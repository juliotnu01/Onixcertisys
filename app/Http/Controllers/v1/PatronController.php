<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Patron;
use Illuminate\Http\Request;
use DB;

class PatronController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $patron = Patron::all();
            return Response($patron);
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
    public function store(Request $request, Patron $patron)
    {
        try {
            return DB::transaction(function() use ($request, $patron){

                $patron->clave = $request['clave'];
                $patron->nombre = $request['nombre'];
                $patron->alcance = $request['alcance'];
                $patron->fecha_calibracion = $request['fecha_calibracion'];
                $patron->fecha_vencimiento = $request['fecha_vencimiento'];
                $patron->save();


            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Patron  $patron
     * @return \Illuminate\Http\Response
     */
    public function show(Patron $patron)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Patron  $patron
     * @return \Illuminate\Http\Response
     */
    public function edit(Patron $patron)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Patron  $patron
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Patron $patron)
    {
        try {
            return DB::transaction(function() use ($request, $patron){
                $patron->find($request['id'])->update([
                    'clave' => $request['clave'],
                    'nombre' => $request['nombre'],
                    'alcance' => $request['alcance'],
                    'fecha_calibracion' => $request['fecha_calibracion'],
                    'fecha_vencimiento' => $request['fecha_vencimiento'],
                ]);
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Patron  $patron
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Patron $patron)
    {
        try {
            return DB::transaction(function() use ($id, $patron){
                $patron->find($id)->delete();
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
}
