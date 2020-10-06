<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Instrumento;
use Illuminate\Http\Request;
use DB;

class InstrumentoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $instrumento = Instrumento::with(['hasAcreditacion','hasMagnitud'])->get();
            return Response($instrumento);
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
    public function store(Request $request, Instrumento $instrumento)
    {
        try {
            return DB::transaction(function() use ($request, $instrumento){
                $instrumento->nombre = $request['nombre'];
                $instrumento->alcance = $request['alcance'];
                $instrumento->acreditacion_id = $request['acreditacion']['id'];
                $instrumento->magnitude_id = $request['area']['id'];
                $instrumento->precio_venta = $request['precio_venta'];
                $instrumento->save();

            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Instrumento  $instrumento
     * @return \Illuminate\Http\Response
     */
    public function show(Instrumento $instrumento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Instrumento  $instrumento
     * @return \Illuminate\Http\Response
     */
    public function edit(Instrumento $instrumento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Instrumento  $instrumento
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Instrumento $instrumento)
    {
        try {
            return DB::transaction(function() use ($request, $instrumento){
                $instrumento->find($request['id'])->update([
                    'nombre' => $request['nombre'],
                    'alcance' => $request['alcance'],
                    'acreditacion_id' => $request['acreditacion_selected']['id'],
                    'magnitude_id' => $request['magnitud_selected']['id'],
                    'precio_venta' => $request['precio_venta'],
                ]);

            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
    public function updateInstrumentoCargadoMasivamente(Request $request, Instrumento $instrumento)
    {
        try {
            return DB::transaction(function() use ($request, $instrumento){
                $instrumento->find($request['id_instrumento'])->update([
                    'acreditacion_id' => $request['acreditacion'],
                    'magnitude_id' => $request['magnitud'],
                    'precio_venta' => $request['precio_venta'],
                ]);

            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Instrumento  $instrumento
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Instrumento $instrumento)
    {
        try {
            return DB::transaction(function() use ($id, $instrumento){
                $instrumento->find($id)->delete();
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
}
