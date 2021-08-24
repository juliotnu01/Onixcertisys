<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Calidad;
use Illuminate\Http\Request;
use DB;

class CalidadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $calidad = calidad::with(['belongsToPartida','belongsToPartida.hasEmpleado','belongsToPartida.hasRecibo.hasCotizaicon.hasCliente','belongsToPartida.hasIntrumento','belongsToEmpleado'])->get();
            return response($calidad);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Calidad  $calidad
     * @return \Illuminate\Http\Response
     */
    public function show(Calidad $calidad)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Calidad  $calidad
     * @return \Illuminate\Http\Response
     */
    public function edit(Calidad $calidad)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Calidad  $calidad
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Calidad $calidad)
    {
        try {
            return DB::transaction(function () use ($request, $calidad) {
                $calidad->find($request['id'])->update([
                    'status_calidad' => $request['status_calidad'],
                    'observacion' => $request['observacion']
                ]);
            }, 5);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Calidad  $calidad
     * @return \Illuminate\Http\Response
     */
    public function destroy(Calidad $calidad)
    {
        //
    }
}
