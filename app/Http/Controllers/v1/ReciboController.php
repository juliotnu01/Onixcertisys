<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\{Recibo, Partida};
use Illuminate\Http\Request;
use DB;

class ReciboController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $recibos = Recibo::with(['hasCotizaicon',
                                     'hasCotizaicon.hasCliente',
                                     'hasPartidas', 
                                     'hasPartidas.hasEmpleado',
                                     'hasPartidas.hasIntrumento', 
                                     'hasPartidas.hasIntrumento.hasMagnitud', 
                                     'hasPartidas.hasIntrumento.hasAcreditacion'])->get();
            return Response($recibos);
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
    public function store(Request $request, Recibo $recibo)
    {
        try {
            return DB::transaction(function () use ($request, $recibo) {
                $recibo->estado = $request['estado'];
                $recibo->cotizacion_id = $request['cotizacion_id']['id'];
                $recibo->save();

                foreach ($request['cotizacion_id']['has_partidas'] as $key => $value) {
                    $partida = new Partida();
                    if (is_string($value['tipo'])) {
                        $tipo = $value['tipo'];
                    } else {
                        $tipo = $value['tipo']['name'];
                    }
                    $validate = $partida->where('convertir_recibo', true)->where('id', $value['id'])->first();
                    if (is_null($validate)) {
                        $partida->find($value['id'])
                            ->update([
                                'convertir_recibo' => $value['convertir_recibo'],
                                'tipo' => $tipo,
                                'vigencia' => $value['vigencia'],
                                'recibo_id' => $recibo['id'],
                            ]);
                    }
                }
            }, 5);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Recibo  $recibo
     * @return \Illuminate\Http\Response
     */
    public function show(Recibo $recibo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Recibo  $recibo
     * @return \Illuminate\Http\Response
     */
    public function edit(Recibo $recibo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Recibo  $recibo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Recibo $recibo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Recibo  $recibo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Recibo $recibo)
    {
        //
    }
}
