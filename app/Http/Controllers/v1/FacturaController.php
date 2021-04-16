<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\{Factura,ProductoFactura, Recibo,Empresa, Cliente};
use Illuminate\Http\Request;
use DB;
use PDF;
use QrCode;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Http\Resources\RecibosCollection;
use Luecano\NumeroALetras\NumeroALetras;
use SWServices\AccountBalance\AccountBalanceService as AccountBalanceService;
use SWServices\Authentication\AuthenticationService as Authentication;
use SWServices\Stamp\StampService as StampService;
use View;


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
                                 'hasCliente.hasCotizaciones.hasPartidas.hasIntrumento.hasMagnitud')->get();
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
                'hasCliente.hasCotizaciones.hasPartidas.hasIntrumento.hasMagnitud')->orderBy('id', 'desc')->get();

                $data = collect($factura)->groupBy(function($item, $key){
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
                Storage::disk('store_pdfs')->put("/facturas/factura_{$factura['id']}_". substr($factura['created_at'], 0, 10) ."_.pdf", $pdf->stream());
                $url = Storage::disk('store_pdfs')->url("/facturas/factura_{$factura['id']}_". substr($factura['created_at'], 0, 10) ."_.pdf");
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
        for ($i=0; $i < count($request['partidas']); $i++) { 
            $recibos[] = $request['partidas'][$i]['has_recibo']['id'];
        }
        // cuantos cotizaciones pertenecen esta factura
        for ($i=0; $i < count($request['partidas']); $i++) { 
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
                        'hasPartidas' ,
                        'hasPartidas.hasCalibracion',
                        'hasPartidas.hasEmpleado',
                        'hasPartidas.hasIntrumento',
                        'hasPartidas.hasIntrumento.hasMagnitud',
                        'hasPartidas.hasIntrumento.hasAcreditacion'])->find($value['recibo_id']);
                        Recibo::find($value['recibo_id'])->update([
                            'estado' => 'facturado'
                        ]);
                }

                $RecibosPartidas = new RecibosCollection($data2);
                $dataFactura = collect($RecibosPartidas);
                $cliente = Cliente::with(['hasMetodoDePago','hasCondicionDePago'])->find($request['cliente']['cliente_id']);
                $empresa = Empresa::find(1);
                $qrcode = base64_encode(QrCode::format('svg')->size(100)->errorCorrection('H')->generate('||1.1|90225f67-0fe4-4841-924c-76a4f35a9ee1|2020-10-29T15:08:26|LSO1306189R5|hzn7VWCZx3TupITNv9ocsAyoMi3MPaZ9fbJJ/bz6MKrs41f4jw89xyLvhP/PsJGMQ/SbqgxA7zInjAZRJh65o/c/WJ0s2KSBQSQucuMAJ+Wdx5PO4LNkOJl5XLr47n9El/+P0Xwob691CbPIZ4+wUvnTO053xC5pzpLSRFHu5bmd2hIKxPFcMS2dhjGn4ITcrwstkQZs/dxO954ir09wxnxzowDJ27bCYEauqW1DJQ2AUNdwPxGB+ZEtwiD4mPa4YeSJqlqiONPho5udxFDF2fTNowWmBfTX6id7kg2oUsWIMahNfKFWHkS3hUjccwyrOK+lTBXJ2DwZ2ozG1rr0pw==|00001000000408254801||'));
                $stringQr = '||1.1|90225f67-0fe4-4841-924c-76a4f35a9ee1|2020-10-29T15:08:26|LSO1306189R5|hzn7VWCZx3TupITNv9ocsAyoMi3MPaZ9fbJJ/bz6MKrs41f4jw89xyLvhP/PsJGMQ/SbqgxA7zInjAZRJh65o/c/WJ0s2KSBQSQucuMAJ+Wdx5PO4LNkOJl5XLr47n9El/+P0Xwob691CbPIZ4+wUvnTO053xC5pzpLSRFHu5bmd2hIKxPFcMS2dhjGn4ITcrwstkQZs/dxO954ir09wxnxzowDJ27bCYEauqW1DJQ2AUNdwPxGB+ZEtwiD4mPa4YeSJqlqiONPho5udxFDF2fTNowWmBfTX6id7kg2oUsWIMahNfKFWHkS3hUjccwyrOK+lTBXJ2DwZ2ozG1rr0pw==|00001000000408254801||';
                $spell = (new NumeroALetras())->toMoney((float)$request['total'], 2, $request['cliente']['has_moneda']['nombre_moneda'], 'CENTAVOS');
                $pdf = PDF::loadView('pdfs.pdfFactura', compact(['dataFactura', 'cliente', 'empresa', 'request', 'qrcode', 'spell', 'factura', 'stringQr']));
                Storage::disk('store_pdfs')->put("/facturas/factura_{$factura['id']}_". substr($factura['created_at'], 0, 10) ."_.pdf", $pdf->stream());
                $url = Storage::disk('store_pdfs')->url("/facturas/factura_{$factura['id']}_". substr($factura['created_at'], 0, 10) ."_.pdf");
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
            "url"=>env('URL_TIMBRADO_SW'),
            "user"=>env('USER_TIMPRADO_SW'),
            "password"=> env('PASSWORD_TIMBRADO_SW')
        );
            
        try {
        
            $auth = Authentication::auth($params);
            $token = $auth::Token();
            $paramsConsultarSaldo = array(  
                "url"=>env('URL_TIMBRADO_SW'),
                "token"=> $token->data->token
                
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
        // $params = array(
        //     "url"=>"http://services.test.sw.com.mx",
        //     "user"=>"",
        //     "password"=> "ACC.1701.U"
        // );
            
        try {
        
        //     $auth = Authentication::auth($params);
        //     $token = $auth::Token();
        //     $paramsConsulta = array(  
        //         "url"=>"https://services.sw.com.mx",
        //         "token"=> $token->data->token
        //     );
            $dataFactura = $factura->find($request['id'])->with(['hasItems','hasItems.belongsToInstrumento', 'hasCliente', 'hasMoneda'])->first();
            dd(collect($dataFactura));
            $output = View::make('xmls.XmlFactura', compact('dataFactura'))->render();
            Storage::disk('store_pdfs')->put("/xmls/test2.xml", $output);
            $url = Storage::disk('store_pdfs')->url("/xmls/test.xml");
   
            
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
