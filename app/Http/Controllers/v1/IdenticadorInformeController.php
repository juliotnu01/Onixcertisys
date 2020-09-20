<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\{IdenticadorInforme, Partida};
use Illuminate\Http\Request;
use DB;

class IdenticadorInformeController extends Controller
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
    public function store(Request $request, IdenticadorInforme $identicadorInforme)
    {
        try {
            return DB::transaction(function () use ($request, $identicadorInforme) {
                $ultimoIdentificador = $identicadorInforme->where('clave_info', $request['clave_info'])->latest()->first();

                if(is_null($ultimoIdentificador['info_id'])){
                    $id = 1;
                    $identificador = $request['clave_info'] . "-" . $request['cotizacion_id'] . "-" . $id;
                }else{
                    $id = ($ultimoIdentificador['info_id'] + 1);
                    $identificador = $request['clave_info'] . "-" . $request['cotizacion_id'] . "-" . $id;
                }
                
                $identicadorInforme->clave_info = $request['clave_info'];
                $identicadorInforme->cotizacion_id = $request['cotizacion_id'];
                $identicadorInforme->partida_id = $request['partida_id'];
                $identicadorInforme->info_id =  $id;
                $identicadorInforme->save();

                $partida = new Partida();
                $partida->find($request['partida_id'])->update([
                    'informe_id' => $identificador,
                ]);
                return Response([$identicadorInforme, $identificador]);
            });
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\IdenticadorInforme  $identicadorInforme
     * @return \Illuminate\Http\Response
     */
    public function show(IdenticadorInforme $identicadorInforme)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\IdenticadorInforme  $identicadorInforme
     * @return \Illuminate\Http\Response
     */
    public function edit(IdenticadorInforme $identicadorInforme)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\IdenticadorInforme  $identicadorInforme
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, IdenticadorInforme $identicadorInforme)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\IdenticadorInforme  $identicadorInforme
     * @return \Illuminate\Http\Response
     */
    public function destroy(IdenticadorInforme $identicadorInforme)
    {
        //
    }
}
