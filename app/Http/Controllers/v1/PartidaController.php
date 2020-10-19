<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Partida;
use Illuminate\Http\Request;
use DB;
class PartidaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $partida = Partida::with(['hasIntrumento',
                                      'hasIntrumento.hasMagnitud', 
                                      'hasRecibo', 
                                      'hasRecibo.hasCotizaicon', 
                                      'hasRecibo.hasCotizaicon.hasCliente',
                                      'hasTecnico'])->where('convertir_recibo', true)->get();
            return Response($partida);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Partida  $partida
     * @return \Illuminate\Http\Response
     */
    public function show(Partida $partida)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Partida  $partida
     * @return \Illuminate\Http\Response
     */
    public function edit(Partida $partida)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Partida  $partida
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Partida $partida)
    {
        try {

            return DB::transaction(function () use ($request,$partida) {
                $partida->find($request['id'])->update([
                    'cantidad' => $request['cantidad'],
                    'servicio' => $request['servicio'],
                    'unidad' => $request['unidad'],
                    'identificacion' => $request['identificacion'],
                    'importe' => $request['importe'],
                    'marca' => $request['marca'],
                    'modelo' => $request['modelo'],
                    'serie' => $request['serie'],
                    'instrumento_id' => $request['instrumento_id'],
                    'cotizacion_id' => $request['cotizacion_id'],
                ]);
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Partida  $partida
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Partida $partida)
    {
        try {

            return DB::transaction(function () use ($id, $partida) {
                $partida->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }
}
