<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\{Cotizacion, Partida};
use Barryvdh\DomPDF\PDF as DomPDFPDF;
use Illuminate\Http\Request;
use DB;
use PDF;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class CotizacionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $cotizaciones = Cotizacion::with([
                'hasCliente',
                'hasEmpleado',
                'hasMoneda',
                'hasTiempoDeEntrega',
                'hasPartidas',
                'hasPartidas.hasIntrumento',
                'hasPartidas.hasIntrumento.hasMagnitud',
                'hasPartidas.hasIntrumento.hasAcreditacion'
            ])->get();
            return Response($cotizaciones);
        } catch (Exception $e) {
            throw new Exception($e, 1);
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
    public function store(Request $request, Cotizacion $cotizacion)
    {
        try {

            return DB::transaction(function () use ($request, $cotizacion) {

                $cotizacion->cliente_id = $request['cliente_id'];
                $cotizacion->empleado_id = $request['empleado_id'];
                $cotizacion->moneda_id = $request['moneda_id'];
                $cotizacion->tiempo_de_entrega_id = $request['tiempo_de_entrega_id'];
                $cotizacion->tipo_de_servicio = $request['tipo_de_servicio'];
                $cotizacion->nota_para_la_cotizacion = $request['nota_para_la_cotizacion'];
                $cotizacion->estado_de_la_cotizacion = $request['estado_de_la_cotizacion'];
                $cotizacion->contacto = $request['contacto'];
                $cotizacion->contacto_telefono = $request['contacto_telefono'];
                $cotizacion->contacto_correo = $request['contacto_correo'];
                $cotizacion->condicion = $request['condicion'];
                $cotizacion->nota_de_seguimiento = $request['nota_de_seguimiento'];
                $cotizacion->sub_total = $request['sub_total'];
                $cotizacion->iva = $request['iva'];
                $cotizacion->total = $request['total'];
                $cotizacion->save();

                foreach ($request['partidas'] as $key => $value) {
                    $partida = new Partida();
                    $partida->cantidad = $value['cantidad'];
                    $partida->servicio = $value['servicio']['name'];
                    $partida->unidad = $value['unidad']['name'];
                    $partida->identificacion = $value['identificacion'];
                    $partida->importe = $value['importe'];
                    $partida->marca = $value['marca'];
                    $partida->modelo = $value['modelo'];
                    $partida->serie = $value['serie'];
                    $partida->instrumento_id = $value['instrumento']['id'];
                    $partida->cotizacion_id = $cotizacion['id'];
                    $partida->save();
                }
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cotizacion  $cotizacion
     * @return \Illuminate\Http\Response
     */
    public function show(Cotizacion $cotizacion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cotizacion  $cotizacion
     * @return \Illuminate\Http\Response
     */
    public function edit(Cotizacion $cotizacion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cotizacion  $cotizacion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cotizacion $cotizacion)
    {
        try {
            return DB::transaction(function () use ($request, $cotizacion) {

                $cotizacion->find($request['id'])->update([
                    'cliente_id' => $request['cliente_id'],
                    'empleado_id' => $request['empleado_id'],
                    'moneda_id' => $request['moneda_id'],
                    'tiempo_de_entrega_id' => $request['tiempo_de_entrega_id'],
                    'tipo_de_servicio' => $request['tipo_de_servicio'],
                    'nota_para_la_cotizacion' => $request['nota_para_la_cotizacion'],
                    'estado_de_la_cotizacion' => $request['estado_de_la_cotizacion'],
                    'contacto' => $request['contacto'],
                    'contacto_telefono' => $request['contacto_telefono'],
                    'contacto_correo' => $request['contacto_correo'],
                    'condicion' => $request['condicion'],
                    'nota_de_seguimiento' => $request['nota_de_seguimiento'],
                    'sub_total' => $request['sub_total'],
                    'iva' => $request['iva'],
                    'total' => $request['total']
                ]);
                foreach ($request['partidas'] as $key => $value) {
                    $partida = new Partida();
                    if (Arr::exists($value, 'id')) {
                        $partida->find($value['id'])->update([
                            'cantidad' => $value['cantidad'],
                            'servicio' => $value['servicio'],
                            'unidad' => $value['unidad'],
                            'identificacion' => $value['identificacion'],
                            'importe' => $value['importe'],
                            'marca' => $value['marca'],
                            'modelo' => $value['modelo'],
                            'serie' => $value['serie'],
                            'instrumento_id' => $value['has_intrumento']['id'],
                            'cotizacion_id' =>  $request['id'],
                        ]);
                    } else {
                        $partida->cantidad = $value['cantidad'];
                        $partida->servicio = $value['servicio'];
                        $partida->unidad = $value['unidad'];
                        $partida->identificacion = $value['identificacion'];
                        $partida->importe = $value['importe'];
                        $partida->marca = $value['marca'];
                        $partida->modelo = $value['modelo'];
                        $partida->serie = $value['serie'];
                        $partida->instrumento_id = $value['has_intrumento']['id'];
                        $partida->cotizacion_id = $request['id'];
                        $partida->save();
                    }
                }
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cotizacion  $cotizacion
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Cotizacion $cotizacion)
    {
        try {
            return DB::transaction(function () use ($id, $cotizacion) {
                $cotizacion->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }

    public function printCotizacion(Request $request)
    {
        try {
            $exists = Storage::disk('store_pdfs')->exists("/cotizaciones/cotizacion-{$request['id']}-" . Str::limit($request['created_at'], 10, ('')) . ".pdf");
            if($exists) {
                Storage::disk('store_pdfs')->delete("/cotizaciones/cotizacion-{$request['id']}-" . Str::limit($request['created_at'], 10, ('')) . ".pdf");
            }
            $pdf = PDF::loadView('pdfs.pdfCotizacion', compact('request'));
            Storage::disk('store_pdfs')->put("/cotizaciones/cotizacion-{$request['id']}-" . Str::limit($request['created_at'], 10, ('')) . ".pdf", $pdf->stream());
            $url = Storage::disk('store_pdfs')->url("/cotizaciones/cotizacion-{$request['id']}-" . Str::limit($request['created_at'], 10, ('')) . ".pdf");
                    Cotizacion::find($request['id'])->update([
                        'ruta_print_document' => $url
                    ]);
            return Response(Cotizacion::find($request['id']));
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
