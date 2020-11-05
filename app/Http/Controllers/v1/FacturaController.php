<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\{Factura,ProductoFactura, Recibo,Empresa};
use Illuminate\Http\Request;
use DB;
use PDF;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Http\Resources\RecibosCollection;

class FacturaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(Request $request, Factura $factura)
    {
        try {
            return DB::transaction(function () use ($request, $factura) {
                $factura->cliente_id = $request['cliente']['has_cliente']['id'];
                $factura->moneda_id = $request['cliente']['has_moneda']['id'];
                $factura->subtotal = $request['subtotal'];
                $factura->iva = $request['iva'];
                $factura->total = $request['total'];
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
                        'hasPartidas.hasIntrumento.hasAcreditacion'])->find($value['recibo_id']);
                }

                $RecibosPartidas = new RecibosCollection($data2);
                $dataFactura = collect($RecibosPartidas);
               
                $pdf = PDF::loadView('pdfs.pdfFactura', compact('dataFactura'));
                Storage::disk('store_pdfs')->put("/facturas/factura.pdf", $pdf->stream());
                $url = Storage::disk('store_pdfs')->url("/facturas/factura.pdf");
                
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
}
