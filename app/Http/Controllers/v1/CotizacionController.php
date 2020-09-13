<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Cotizacion;
use Illuminate\Http\Request;
use DB;

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
            $cotizaciones = Cotizacion::with(['hasCliente', 'hasEmpleado', 'hasMoneda', 'hasTiempoDeEntrega', 'hasPartidas', 'hasPartidas.hasIntrumento', 'hasPartidas.hasAcreditaicon'])->get();
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
    public function store(Request $request , Cotizacion $cotizacion)
    {
        try {
            dd($request->all());
            return DB::transaction(function() use ($request, $cotizacion){

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
                $cotizacion->save();


            },5);
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
            return DB::transaction(function() use ($request, $cotizacion){

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
                ]);

            },5);
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
    public function destroy(Cotizacion $cotizacion)
    {
        try {
                
            return DB::transaction(function() use ($id, $cotizacion){
                $cotizacion->find($id)->delete();
            },5);

        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
}
