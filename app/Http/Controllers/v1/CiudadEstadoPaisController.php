<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\CiudadEstadoPais;
use Illuminate\Http\Request;
use DB;

class CiudadEstadoPaisController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $ciudadEstadoPais = CiudadEstadoPais::all();
            return Response($ciudadEstadoPais);
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
    public function store(Request $request, CiudadEstadoPais $ciudadEstadoPais)
    {
        try {
            return DB::transaction(function() use ($request, $ciudadEstadoPais){
                $ciudadEstadoPais->nombre_ciudad = $request['nombre_ciudad'];
                $ciudadEstadoPais->nombre_estado = $request['nombre_estado'];
                $ciudadEstadoPais->nombre_pais = $request['nombre_pais'];
                $ciudadEstadoPais->save();
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }   
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CiudadEstadoPais  $ciudadEstadoPais
     * @return \Illuminate\Http\Response
     */
    public function show(CiudadEstadoPais $ciudadEstadoPais)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CiudadEstadoPais  $ciudadEstadoPais
     * @return \Illuminate\Http\Response
     */
    public function edit(CiudadEstadoPais $ciudadEstadoPais)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CiudadEstadoPais  $ciudadEstadoPais
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CiudadEstadoPais $ciudadEstadoPais)
    {
        try {
            return DB::transaction(function() use ($request, $ciudadEstadoPais){
                $ciudadEstadoPais->find($request['id'])->update([
                    'nombre_ciudad' => $request['nombre_ciudad'],
                    'nombre_estado' => $request['nombre_estado'],
                    'nombre_pais' => $request['nombre_pais']
                ]);
                
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CiudadEstadoPais  $ciudadEstadoPais
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, CiudadEstadoPais $ciudadEstadoPais)
    {
        try {
            return DB::transaction(function() use ($id, $ciudadEstadoPais){
                $ciudadEstadoPais->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
}
