<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Unidad;
use Illuminate\Http\Request;
use DB;


class UnidadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return Unidad::all();
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
    public function store(Request $request, Unidad $unidad)
    {
        try {
            return DB::transaction(function () use ($request, $unidad){
                $unidad->tipo = $request['tipo'];
                $unidad->clave = $request['clave'];
                $unidad->nombre = $request['nombre'];
                $unidad->save();

            });
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Unidad  $unidad
     * @return \Illuminate\Http\Response
     */
    public function show(Unidad $unidad)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Unidad  $unidad
     * @return \Illuminate\Http\Response
     */
    public function edit(Unidad $unidad)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Unidad  $unidad
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Unidad $unidad)
    {
        try {
            
            return DB::transaction(function () use ($request, $unidad) {

                $unidad->find($request['id'])->update([
                    'tipo' => $request['tipo'],
                    'clave' => $request['clave'],
                    'nombre' => $request['nombre'],
                ]);

            });
            
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Unidad  $unidad
     * @return \Illuminate\Http\Response
     */
    public function destroy(Unidad $unidad, $id)
    {
        try {
            
            return DB::transaction(function () use ($unidad, $id) {

                $unidad->find($id)->delete();

            });
            
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
