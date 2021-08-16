<?php

namespace App\Http\Controllers\v1;

require_once public_path('./sw-sdk-php-feature-SMARTER-1406/SWSDK.php');

use App\Http\Controllers\Controller;
use App\Models\{Factura, ProductoFactura, Recibo, Empresa, Cliente};
use Illuminate\Http\Request;
use DB;
use PDF;
use QrCode;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Http\Resources\RecibosCollection;
use Luecano\NumeroALetras\NumeroALetras;
use SWServices\Authentication\AuthenticationService as Authentication;
use SWServices\Stamp\StampService as StampService;
use SWServices\Stamp\EmisionTimbrado;
use SWServices\Validation\ValidarXML as ValidarXML;
use SWServices\Validation\ValidaLco as ValidaLco;
use SWServices\Validation\ValidaLrfc as ValidaLrfc;
use SWServices\JSonIssuer\JsonEmisionTimbrado as JsonEmisionTimbrado;
use SWServices\Cancelation\CancelationService as CancelationService;
use SWServices\AccountBalance\AccountBalanceService as AccountBalanceService;
use SWServices\SatQuery\ServicioConsultaSAT as ConsultaCfdiSAT;
use SWServices\Csd\CsdService as CsdService;
use SWServices\Taxpayer\TaxpayerService as ValidarListaNegra;
use View;
use Http;
use Carbon\Carbon;
use Reponse;


class FacturaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return Factura::with(
                'hasCliente',
                'hasMoneda',
                'hasCliente.hasCotizaciones',
                'hasCliente.hasCotizaciones.hasPartidas',
                'hasCliente.hasCotizaciones.hasPartidas.hasIntrumento',
                'hasCliente.hasCotizaciones.hasPartidas.hasIntrumento.hasMagnitud'
            )->get();
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function indexFacturaParaEstadistica()
    {
        try {
            $factura = Factura::with(
                'hasCliente',
                'hasCliente.hasCotizaciones',
                'hasCliente.hasCotizaciones.hasPartidas',
                'hasCliente.hasCotizaciones.hasPartidas.hasIntrumento',
                'hasCliente.hasCotizaciones.hasPartidas.hasIntrumento.hasMagnitud'
            )->orderBy('id', 'desc')->get();

            $data = collect($factura)->groupBy(function ($item, $key) {
                return substr($item['created_at'], 0, 10);
            });
            return Response()->json(new RecibosCollection($data));
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeFacturaNueva(Request $request, Factura $factura)
    {
        try {
            return DB::transaction(function () use ($request, $factura) {

                $factura->cliente_id = $request['cliente']['id'];
                $factura->moneda_id = $request['moneda']['id'];
                $factura->subtotal = $request['subtotal'];
                $factura->iva = $request['iva'];
                $factura->total = $request['total'];
                $factura->nota = $request['nota'];
                $factura->cancelada = false;
                $factura->save();

                foreach ($request['partidas'] as $key => $value) {
                    $producto_factura = new ProductoFactura();
                    $producto_factura->factura_id = $factura['id'];
                    $producto_factura->instrumento_id = $value['instrumento']['id'];
                    $producto_factura->conceopto = "Servicio de {$value['concepto']}";
                    $producto_factura->importe = $value['importe'];
                    $producto_factura->precio_unitario = $value['precio_unitario'];
                    $producto_factura->unidad_id = $value['unidad']['id'];
                    $producto_factura->clave_sat_id = $value['claveSat']['id'];
                    $producto_factura->save();
                }


                $qrcode = base64_encode(QrCode::format('svg')->size(100)->errorCorrection('H')->generate('||1.1|90225f67-0fe4-4841-924c-76a4f35a9ee1|2020-10-29T15:08:26|LSO1306189R5|hzn7VWCZx3TupITNv9ocsAyoMi3MPaZ9fbJJ/bz6MKrs41f4jw89xyLvhP/PsJGMQ/SbqgxA7zInjAZRJh65o/c/WJ0s2KSBQSQucuMAJ+Wdx5PO4LNkOJl5XLr47n9El/+P0Xwob691CbPIZ4+wUvnTO053xC5pzpLSRFHu5bmd2hIKxPFcMS2dhjGn4ITcrwstkQZs/dxO954ir09wxnxzowDJ27bCYEauqW1DJQ2AUNdwPxGB+ZEtwiD4mPa4YeSJqlqiONPho5udxFDF2fTNowWmBfTX6id7kg2oUsWIMahNfKFWHkS3hUjccwyrOK+lTBXJ2DwZ2ozG1rr0pw==|00001000000408254801||'));
                $stringQr = '||1.1|90225f67-0fe4-4841-924c-76a4f35a9ee1|2020-10-29T15:08:26|LSO1306189R5|hzn7VWCZx3TupITNv9ocsAyoMi3MPaZ9fbJJ/bz6MKrs41f4jw89xyLvhP/PsJGMQ/SbqgxA7zInjAZRJh65o/c/WJ0s2KSBQSQucuMAJ+Wdx5PO4LNkOJl5XLr47n9El/+P0Xwob691CbPIZ4+wUvnTO053xC5pzpLSRFHu5bmd2hIKxPFcMS2dhjGn4ITcrwstkQZs/dxO954ir09wxnxzowDJ27bCYEauqW1DJQ2AUNdwPxGB+ZEtwiD4mPa4YeSJqlqiONPho5udxFDF2fTNowWmBfTX6id7kg2oUsWIMahNfKFWHkS3hUjccwyrOK+lTBXJ2DwZ2ozG1rr0pw==|00001000000408254801||';
                $spell = (new NumeroALetras())->toMoney((float)$request['total'], 2, $request['moneda']['nombre_moneda'], 'CENTAVOS');
                $pdf = PDF::loadView('pdfs.pdfFacturaNueva', compact(['request', 'qrcode', 'spell', 'factura', 'stringQr']));
                Storage::disk('store_pdfs')->put("/facturas/factura_{$factura['id']}_" . substr($factura['created_at'], 0, 10) . "_.pdf", $pdf->stream());
                $url = Storage::disk('store_pdfs')->url("/facturas/factura_{$factura['id']}_" . substr($factura['created_at'], 0, 10) . "_.pdf");
                Factura::find($factura['id'])->update([
                    'ruta_pdf' => $url
                ]);
                return  $url;
            });
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Factura $factura)
    {
        $recibos = [];
        $cotizaciones = [];
        // cuantos recibos pertenecen esta factura
        for ($i = 0; $i < count($request['partidas']); $i++) {
            $recibos[] = $request['partidas'][$i]['has_recibo']['id'];
        }
        // cuantos cotizaciones pertenecen esta factura
        for ($i = 0; $i < count($request['partidas']); $i++) {
            $cotizaciones[] = $request['partidas'][$i]['has_recibo']['has_cotizaicon']['id'];
        }

        try {
            return DB::transaction(function () use ($request, $factura, $cotizaciones, $recibos) {
                $factura->cliente_id = $request['cliente']['has_cliente']['id'];
                $factura->moneda_id = $request['cliente']['has_moneda']['id'];
                $factura->subtotal = $request['subtotal'];
                $factura->iva = $request['iva'];
                $factura->total = $request['total'];
                $factura->cotizaciones_ids = json_encode($cotizaciones);
                $factura->recibos_ids = json_encode($recibos);
                $factura->rfc = $request['cliente']['has_cliente']['datos_fisicos_requeremientos_facturacion_rfc'];
                $factura->estado = 'Pendiente';
                $factura->cancelada = false;
                $factura->save();

                foreach ($request['partidas'] as $key => $value) {
                    $producto_factura = new ProductoFactura();
                    $producto_factura->factura_id = $factura['id'];
                    $producto_factura->recibo_id = $value['recibo_id'];
                    $producto_factura->cotizacion_id = $value['cotizacion_id'];
                    $producto_factura->instrumento_id = $value['has_intrumento']['id'];
                    $producto_factura->informe_id = $value['informe_id'];
                    $producto_factura->conceopto = "Servicio de {$value['servicio']}";
                    $producto_factura->precio_unitario = $value['has_intrumento']['precio_venta'];
                    $producto_factura->importe = $value['importe'];
                    $producto_factura->save();
                }
                $data = collect($request->all());
                foreach ($data['partidas'] as $key => $value) {

                    $data2[$value['recibo_id']] = Recibo::with([
                        'hasCotizaicon',
                        'hasCotizaicon.hasCliente',
                        'hasCotizaicon.hasMoneda',
                        'hasCotizaicon.hasEmpleado',
                        'hasPartidas',
                        'hasPartidas.hasCalibracion',
                        'hasPartidas.hasEmpleado',
                        'hasPartidas.hasIntrumento',
                        'hasPartidas.hasIntrumento.hasMagnitud',
                        'hasPartidas.hasIntrumento.hasAcreditacion'
                    ])->find($value['recibo_id']);
                    Recibo::find($value['recibo_id'])->update([
                        'estado' => 'facturado'
                    ]);
                }

                $params = array(
                    "url" => env('URL_TIMBRADO_SW'),
                    "user" => env('USER_TIMPRADO_SW'),
                    "password" => env('PASSWORD_TIMBRADO_SW')
                );
                $auth = Authentication::auth($params);
                $token = $auth::Token();
                $paramsConsultar = array(
                    "url" => env('URL_TIMBRADO_SW'),
                    "token" => $token->data->token
                );


                $empresa = Empresa::first();
                //Datos de Accredian
                $emisor["Rfc"]                         = $empresa['rfc'];
                $emisor["Nombre"]                      = $empresa['nombre_empresa'];
                $emisor["RegimenFiscal"]               = "601";

                //Datos del Cliente
                $receptor["Rfc"]                       = $request['cliente']['has_cliente']['datos_fisicos_requeremientos_facturacion_rfc'];
                $receptor["Nombre"]                    = $request['cliente']['has_cliente']['datos_fisicos_requeremientos_facturacion_razon_social'];
                $receptor["ResidenciaFiscalSpecified"] = false;
                $receptor["NumRegIdTrib"]              = null;
                $receptor["UsoCFDI"]                   = $request['cliente']['has_cliente']['cdfi'];

                //Totales a ceros
                $conceptos                             = null;
                $ImpuestosTotales                      = null;
                $complemento                           = null;
                $totalImpuestosTrasladados             = 0;
                $Subtotal                              = 0;

                $comprobante = [];
                $traslado = [];
                $Subtotal = 0;
                $totalImpuestosTrasladados = 0;
                $comprobante["Version"]                = "3.3";
                $comprobante["Serie"]                  = "A";
                $comprobante["Folio"]                  = $factura['id']; 
                $comprobante["Fecha"]                  =  Carbon::now()->format('Y-m-d') . "T" . Carbon::now()->format('H:i:s');
                $comprobante["Moneda"]                 = $request['cliente']['has_moneda']['clave']; 
                $comprobante["TipoDeComprobante"]      = "I";
                $comprobante["LugarExpedicion"]        = "66050";
                $comprobante["Emisor"]                 = $emisor;
                $comprobante["Receptor"]               = $receptor;
                $comprobante["Complemento"]            = NULL;
                $comprobante["MetodoPagoSpecified"]    = true;
                $comprobante["MetodoPago"]             = "PUE";
                $comprobante["FormaPago"]              = "01";


                for ($i = 0; $i < count($request['partidas']); $i++) {
                    $traslado[0]["Base"]                = $request['partidas'][$i]['importe'];
                    $Subtotal                          += number_format((float)$request['partidas'][$i]['importe'], 2, '.', '');
                    $traslado[0]["Impuesto"]            = "002";
                    $traslado[0]["TipoFactor"]          = "Tasa";
                    $traslado[0]["TasaOCuota"]          = "0.160000";
                    $traslado[0]["TasaOCuotaSpecified"] = true;
                    $traslado[0]["Importe"]             = number_format(($request['partidas'][$i]['importe'] * 16) / 100, 2, '.', '');
                    $totalImpuestosTrasladados         += number_format((float)$traslado[0]["Importe"], 2, '.', '');
                    $traslado[0]["ImporteSpecified"]    = true;
                    $impuesto["Traslados"]              = $traslado;
                    $concepto["ClaveProdServ"]          = $request['partidas'][$i]['has_clave_sat']['codigo'];
                    $concepto["Cantidad"]               = 1;
                    $concepto["ClaveUnidad"]            = $request['partidas'][$i]['has_unidad']['clave'];
                    $concepto["Unidad"]                 = $request['partidas'][$i]['has_unidad']['nombre'];
                    $concepto["Descripcion"]            = $request['partidas'][$i]['has_intrumento']['nombre'];
                    $concepto["ValorUnitario"]          = $request['partidas'][$i]['importe'];
                    $concepto["Importe"]                = $request['partidas'][$i]['importe'];
                    $conceptos[$i]                      = $concepto;
                    $conceptos[$i]["Impuestos"]         = $impuesto;
                }

                $comprobante["Conceptos"]                               = $conceptos;
                $ImpuestosTotales["Retenciones"]                        = null;
                $ImpuestosTotales["Traslados"][0]["Impuesto"]           = "002";
                $ImpuestosTotales["Traslados"][0]["TipoFactor"]         = "Tasa";
                $ImpuestosTotales["Traslados"][0]["TasaOCuota"]         = "0.160000";
                $ImpuestosTotales["Traslados"][0]["Importe"]            = number_format((float)$totalImpuestosTrasladados, 2, '.', '');
                $ImpuestosTotales["TotalImpuestosRetenidosSpecified"]   = false;
                $ImpuestosTotales["TotalImpuestosTrasladados"]          = number_format((float)$totalImpuestosTrasladados, 2, '.', '');
                $ImpuestosTotales["TotalImpuestosTrasladadosSpecified"] = true;
                $comprobante["Impuestos"]                               = $ImpuestosTotales;
                $comprobante["SubTotal"]                                = number_format((float)$Subtotal, 2, '.', '');
                $comprobante["Total"]                                   = number_format((float)$Subtotal + $totalImpuestosTrasladados, 2, '.', '');

                $output = View::make('xmls.XmlFactura', compact('comprobante'))->render();
                EmisionTimbrado::Set($paramsConsultar);
                $result = collect(EmisionTimbrado::EmisionTimbradoV4($output));

                    if ($result['status'] === "success") {
                        Factura::find($factura['id'])->update([
                         'uuid' => $result['data']->uuid
                        ]);

                    $RecibosPartidas = new RecibosCollection($data2);
                    $dataFactura = collect($RecibosPartidas);
                    $cliente = Cliente::with(['hasMetodoDePago', 'hasCondicionDePago'])->find($request['cliente']['cliente_id']);
                    $empresa = Empresa::find(1);
                    $qrcode = base64_encode(QrCode::format('svg')->size(100)->errorCorrection('H')->generate($result['data']->cadenaOriginalSAT));
                    $stringQr = $result['data']->cadenaOriginalSAT;
                    $spell = (new NumeroALetras())->toMoney((float)$request['total'], 2, $request['cliente']['has_moneda']['nombre_moneda'], 'CENTAVOS');
                    $pdf = PDF::loadView('pdfs.pdfFactura', compact(['dataFactura', 'cliente', 'empresa', 'request',  'spell', 'factura', 'stringQr', 'result', 'qrcode']));
                    Storage::disk('store_pdfs')->put("/facturas/factura_{$factura['id']}_" . substr($factura['created_at'], 0, 10) . "_.pdf", $pdf->stream());
                    $url = Storage::disk('store_pdfs')->url("/facturas/factura_{$factura['id']}_" . substr($factura['created_at'], 0, 10) . "_.pdf");
                    Factura::find($factura['id'])->update([
                        'ruta_pdf' => $url
                    ]);
                    return  $url;
                }else{
                    return Response::json([
                        'data' => $result
                    ], 500);
                }
 
            });
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Factura  $factura
     * @return \Illuminate\Http\Response
     */
    public function show(Factura $factura)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Factura  $factura
     * @return \Illuminate\Http\Response
     */
    public function edit(Factura $factura)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Factura  $factura
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Factura $factura)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Factura  $factura
     * @return \Illuminate\Http\Response
     */
    public function destroy(Factura $factura)
    {
        //
    }
    public function consultarSaldoTimbrado()
    {
        $params = array(
            "url" => env('URL_TIMBRADO_SW'),
            "user" => env('USER_TIMPRADO_SW'),
            "password" => env('PASSWORD_TIMBRADO_SW')
        );

        try {

            $auth = Authentication::auth($params);
            $token = $auth::Token();
            $paramsConsultarSaldo = array(
                "url" => env('URL_TIMBRADO_SW'),
                "token" => $token->data->token

            );

            $accountBalance = AccountBalanceService::Set($paramsConsultarSaldo); //asignamos los parámetros
            $result = $accountBalance::GetAccountBalance(); //obtenemos el valor
            $data = collect($result);
            return  $data;
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function timbrarFactura(Request $request, Factura $factura)
    {
        $params = array(
            "url" => env('URL_TIMBRADO_SW'),
            "user" => env('USER_TIMPRADO_SW'),
            "password" => env('PASSWORD_TIMBRADO_SW')
        );
        $auth = Authentication::auth($params);
        $token = $auth::Token();
        $paramsConsultar = array(
            "url" => env('URL_TIMBRADO_SW'),
            "token" => $token->data->token
        );

        try {
            $dataFactura = $factura->find($request['id'])->with([
                'hasItems',
                'hasItems.belongsToClaveSat',
                'hasItems.belongsToInstrumento',
                'hasCliente',
                'hasCliente.hasMetodoDePago',
                'hasCliente.hasCondicionDePago',
                'hasMoneda'
            ])->first();
            $empresa = Empresa::first();
            //Datos de Accredian
            $emisor["Rfc"]                         = $empresa['rfc'];
            $emisor["Nombre"]                      = $empresa['nombre_empresa'];
            $emisor["RegimenFiscal"]               = "601";

            //Datos del Cliente
            $receptor["Rfc"]                       = $dataFactura['hasCliente']['datos_fisicos_requeremientos_facturacion_rfc'];
            $receptor["Nombre"]                    = $dataFactura['hasCliente']['datos_fisicos_requeremientos_facturacion_razon_social'];
            $receptor["ResidenciaFiscalSpecified"] = false;
            $receptor["NumRegIdTrib"]              = null;
            $receptor["UsoCFDI"]                   = $dataFactura['hasCliente']['cdfi'];

            //Totales a ceros
            $conceptos                             = null;
            $ImpuestosTotales                      = null;
            $complemento                           = null;
            $totalImpuestosTrasladados             = 0;
            $Subtotal                              = 0;



            $comprobante = [];
            $traslado = [];
            $Subtotal = 0;
            $totalImpuestosTrasladados = 0;
            $comprobante["Version"]                = "3.3";
            $comprobante["Serie"]                  = "A";
            $comprobante["Folio"]                  = $dataFactura['id'];
            $comprobante["Fecha"]                  =  Carbon::parse($request['created_at'])->format('Y-m-d') . "T" . Carbon::parse($request['created_at'])->format('H:i:s');
            $comprobante["Moneda"]                 = $dataFactura['hasMoneda']['clave'];
            $comprobante["TipoDeComprobante"]      = "I";
            $comprobante["LugarExpedicion"]        = "66050";
            $comprobante["Emisor"]                 = $emisor;
            $comprobante["Receptor"]               = $receptor;
            $comprobante["Complemento"]            = NULL;
            $comprobante["MetodoPagoSpecified"]    = true;
            $comprobante["MetodoPago"]             = "PUE";
            $comprobante["FormaPago"]              = "01";


            for ($i = 0; $i < count($dataFactura['hasItems']); $i++) {
                $traslado[0]["Base"]                = $dataFactura['hasItems'][$i]['belongsToInstrumento']['precio_venta'];
                $Subtotal                          += number_format((float)$dataFactura['hasItems'][$i]['belongsToInstrumento']['precio_venta'], 2, '.', '');
                $traslado[0]["Impuesto"]            = "002";
                $traslado[0]["TipoFactor"]          = "Tasa";
                $traslado[0]["TasaOCuota"]          = "0.160000";
                $traslado[0]["TasaOCuotaSpecified"] = true;
                $traslado[0]["Importe"]             = number_format(($dataFactura['hasItems'][$i]['belongsToInstrumento']['precio_venta'] * 16) / 100, 2, '.', '');
                $totalImpuestosTrasladados         += number_format((float)$traslado[0]["Importe"], 2, '.', '');
                $traslado[0]["ImporteSpecified"]    = true;
                $impuesto["Traslados"]              = $traslado;
                $concepto["ClaveProdServ"]          = $dataFactura['hasItems'][$i]['belongsToClaveSat']['codigo'];
                $concepto["Cantidad"]               = 1;
                $concepto["ClaveUnidad"]            = "E48";
                $concepto["Unidad"]                 = "Unidad de Servicio";
                $concepto["Descripcion"]            = $dataFactura['hasItems'][$i]['belongsToInstrumento']['nombre'];
                $concepto["ValorUnitario"]          = $dataFactura['hasItems'][$i]['belongsToInstrumento']['precio_venta'];
                $concepto["Importe"]                = $dataFactura['hasItems'][$i]['belongsToInstrumento']['precio_venta'];
                $conceptos[$i]                      = $concepto;
                $conceptos[$i]["Impuestos"]         = $impuesto;
            }


            $comprobante["Conceptos"]                               = $conceptos;
            $ImpuestosTotales["Retenciones"]                        = null;
            $ImpuestosTotales["Traslados"][0]["Impuesto"]           = "002";
            $ImpuestosTotales["Traslados"][0]["TipoFactor"]         = "Tasa";
            $ImpuestosTotales["Traslados"][0]["TasaOCuota"]         = "0.160000";
            $ImpuestosTotales["Traslados"][0]["Importe"]            = number_format((float)$totalImpuestosTrasladados, 2, '.', '');
            $ImpuestosTotales["TotalImpuestosRetenidosSpecified"]   = false;
            $ImpuestosTotales["TotalImpuestosTrasladados"]          = number_format((float)$totalImpuestosTrasladados, 2, '.', '');
            $ImpuestosTotales["TotalImpuestosTrasladadosSpecified"] = true;
            $comprobante["Impuestos"]                               = $ImpuestosTotales;
            $comprobante["SubTotal"]                                = number_format((float)$Subtotal, 2, '.', '');
            $comprobante["Total"]                                   = number_format((float)$Subtotal + $totalImpuestosTrasladados, 2, '.', '');

            // $json = json_encode($comprobante);
            // dd($comprobante);
            $output = View::make('xmls.XmlFactura', compact('comprobante'))->render();
          
            // $jsonIssuerStamp = JsonEmisionTimbrado::Set($paramsConsultar);
            // $resultadoJson = $jsonIssuerStamp::jsonEmisionTimbradoV4($json);
            // dd($resultadoJson);

            EmisionTimbrado::Set($paramsConsultar);
            $result = EmisionTimbrado::EmisionTimbradoV4($output);
            dd($result);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
