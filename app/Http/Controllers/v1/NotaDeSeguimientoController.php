<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\NotaDeSeguimiento;
use Illuminate\Http\Request;
use DB;

class NotaDeSeguimientoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Nota = NotaDeSeguimiento::with('hasOnwNote')->get();
        return  $Nota;
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
    public function store(Request $request, NotaDeSeguimiento $notaDeSeguimiento)
    {
        try {
            return DB::transaction(function () use ($request, $notaDeSeguimiento){
                // dd($request->all());
                $notaDeSeguimiento->nota_seguimiento = $request['model']['nota_seguimiento'];
                $notaDeSeguimiento->cotizacion_id = $request['cotizacion']['id'];
                $notaDeSeguimiento->save() ;
            });
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function storeCalibracion(Request $request, NotaDeSeguimiento $notaDeSeguimiento)
    {
        try {
            return DB::transaction(function () use ($request, $notaDeSeguimiento){
                // dd($request->all());
                $notaDeSeguimiento->nota_seguimiento = $request['model']['nota_seguimiento'];
                $notaDeSeguimiento->partida_id = $request['partida']['id'];
                $notaDeSeguimiento->save() ;
            });
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function addNotaCotizacionstore(Request $request, NotaDeSeguimiento $notaDeSeguimiento)
    {
        try {
            return DB::transaction(function () use ($request, $notaDeSeguimiento){
                // dd($request->all());
                $notaDeSeguimiento->nota_seguimiento = $request['model']['nota_seguimiento'];
                $notaDeSeguimiento->nota_seguimiento_id = $request['cotizacion']['id'];
                $notaDeSeguimiento->save() ;
            });
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function addNotaCalibracionstore(Request $request, NotaDeSeguimiento $notaDeSeguimiento)
    {
        try {
            return DB::transaction(function () use ($request, $notaDeSeguimiento){
                $notaDeSeguimiento->nota_seguimiento = $request['model']['nota_seguimiento'];
                $notaDeSeguimiento->nota_seguimiento_id = $request['partida']['id'];
                $notaDeSeguimiento->save() ;
            });
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\NotaDeSeguimiento  $notaDeSeguimiento
     * @return \Illuminate\Http\Response
     */
    public function show(NotaDeSeguimiento $notaDeSeguimiento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\NotaDeSeguimiento  $notaDeSeguimiento
     * @return \Illuminate\Http\Response
     */
    public function edit(NotaDeSeguimiento $notaDeSeguimiento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\NotaDeSeguimiento  $notaDeSeguimiento
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, NotaDeSeguimiento $notaDeSeguimiento)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\NotaDeSeguimiento  $notaDeSeguimiento
     * @return \Illuminate\Http\Response
     */
    public function destroy(NotaDeSeguimiento $notaDeSeguimiento)
    {
        //
    }
}
