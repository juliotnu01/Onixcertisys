<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\{Calibracion, Partida};
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use DB;

class CalibracionController extends Controller
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
    public function store(Request $request, Calibracion $calibracion, Partida $partida)
    {
        try {
            return DB::transaction(function () use ($request, $calibracion, $partida) {
                $calibracion->tipo_de_calibracion = $request['tipo_de_calibracion']['name'];
                $calibracion->patron_de_calibracion = $request['patron_de_calibracion']['nombre'];
                $calibracion->procedimiento_de_calibracion = $request['procedimiento_de_calibracion']['nombre'];
                $calibracion->fecha_anomalia = $request['fecha_anomalia'];
                $calibracion->fecha_inicio_calibracion = Carbon::now();
                $calibracion->descripcion_anomalia = $request['descripcion_anomalia'];
                $calibracion->observacion_tecnico = $request['observacion_tecnico'];
                $calibracion->estado = 'calibrando';
                $calibracion->save();

                $partida->find($request['id_partida'])->update([
                    'calibracion_id' => $calibracion['id']
                ]);

                
            }, 5);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function terminarCalibracion(Request $request, Calibracion $calibracion)
    {
        try {
            return DB::transaction(function () use ($request, $calibracion) {
                $calibracion->find($request['id_calibracion'])->update([
                    'estado' => 'calibrado',
                    'fecha_terminacion_calibracion' => Carbon::now()
                ]);
            }, 5);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Calibracion  $calibracion
     * @return \Illuminate\Http\Response
     */
    public function show(Calibracion $calibracion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Calibracion  $calibracion
     * @return \Illuminate\Http\Response
     */
    public function edit(Calibracion $calibracion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Calibracion  $calibracion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Calibracion $calibracion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Calibracion  $calibracion
     * @return \Illuminate\Http\Response
     */
    public function destroy(Calibracion $calibracion)
    {
        //
    }
}
