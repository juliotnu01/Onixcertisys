<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\MetodoDePago;
use Illuminate\Http\Request;
use DB;

class MetodoDePagoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $MetodoDePago = MetodoDePago::all();
            return $MetodoDePago;
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
    public function store(Request $request, MetodoDePago $metodoDePago)
    {
        try {
            return DB::transaction(function() use ($request, $metodoDePago){
                $metodoDePago->nombre = $request['nombre'];
                $metodoDePago->save();
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MetodoDePago  $metodoDePago
     * @return \Illuminate\Http\Response
     */
    public function show(MetodoDePago $metodoDePago)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MetodoDePago  $metodoDePago
     * @return \Illuminate\Http\Response
     */
    public function edit(MetodoDePago $metodoDePago)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MetodoDePago  $metodoDePago
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MetodoDePago $metodoDePago)
    {
        try {
            return DB::transaction(function() use ($request, $metodoDePago){

                $metodoDePago->find($request['id'])->update([
                    'nombre' => $request['nombre']
                ]);

            },5);
            
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MetodoDePago  $metodoDePago
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, MetodoDePago $metodoDePago)
    {
        try {
            return DB::transaction(function() use ($id, $metodoDePago){
                $metodoDePago->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
}
