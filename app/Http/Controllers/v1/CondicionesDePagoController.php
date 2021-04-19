<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\CondicionesDePago;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Str;
class CondicionesDePagoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $cdp = CondicionesDePago::all();
            return Response($cdp);
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
    public function store(Request $request , CondicionesDePago $cdp )
    {
        try {
            return DB::transaction(function() use ($request, $cdp){
                $cdp->nombre = Str::upper($request['nombre']);
                $cdp->save();
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CondicionesDePago  $condicionesDePago
     * @return \Illuminate\Http\Response
     */
    public function show(CondicionesDePago $condicionesDePago)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CondicionesDePago  $condicionesDePago
     * @return \Illuminate\Http\Response
     */
    public function edit(CondicionesDePago $condicionesDePago)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CondicionesDePago  $condicionesDePago
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CondicionesDePago $condicionesDePago)
    {
        try {
            return DB::transaction(function() use ($request, $condicionesDePago){
                $condicionesDePago->find($request['id'])->update([
                    'nombre' => Str::upper($request['nombre'])
                ]);
                
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CondicionesDePago  $condicionesDePago
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, CondicionesDePago $condicionesDePago)
    {
        try {
            return DB::transaction(function() use ($id, $condicionesDePago){
                $condicionesDePago->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
}
