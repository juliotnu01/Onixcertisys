<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Moneda;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Str;

class MonedaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $moneda = Moneda::all();
            return Response($moneda);
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
    public function store(Request $request, Moneda $moneda)
    {
        try {
            return DB::transaction(function() use ($request, $moneda){
                $moneda->clave = Str::upper($request['clave']);
                $moneda->nombre_moneda = Str::upper($request['nombre_moneda']);
                $moneda->tipo_de_cambio = $request['tipo_de_cambio'];
                $moneda->save();
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Moneda  $moneda
     * @return \Illuminate\Http\Response
     */
    public function show(Moneda $moneda)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Moneda  $moneda
     * @return \Illuminate\Http\Response
     */
    public function edit(Moneda $moneda)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Moneda  $moneda
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Moneda $moneda)
    {
         try {
            return DB::transaction(function() use ($request, $moneda){
                $moneda->find($request['id'])->update([
                    'clave' => Str::upper($request['clave']),
                    'nombre_moneda' => Str::upper($request['nombre_moneda']),
                    'tipo_de_cambio' => $request['tipo_de_cambio'],
                ]);
                
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Moneda  $moneda
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Moneda $moneda)
    {
        try {
            return DB::transaction(function() use ($id, $moneda){
                $moneda->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }    
    }
}
