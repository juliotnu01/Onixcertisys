<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\TiempoDeEntrega;
use Illuminate\Http\Request;
use DB;
use Excel;
use App\Imports\TiempoDeEntregaImport;

class TiempoDeEntregaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         try {
            $tiempoDeEntrega = TiempoDeEntrega::all();
            return $tiempoDeEntrega;
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
    public function store(Request $request, TiempoDeEntrega $tiempoDeEntrega)
    {
         try {
            return DB::transaction(function() use ($request, $tiempoDeEntrega){
                $tiempoDeEntrega->nombre = $request['nombre'];
                $tiempoDeEntrega->save();
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
    public function storeImport(Request $request, TiempoDeEntrega $tiempoDeEntrega)
    {
         try {
            Excel::import(new TiempoDeEntregaImport, $request->file('document_TDE'), \Maatwebsite\Excel\Excel::XLSX);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TiempoDeEntrega  $tiempoDeEntrega
     * @return \Illuminate\Http\Response
     */
    public function show(TiempoDeEntrega $tiempoDeEntrega)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TiempoDeEntrega  $tiempoDeEntrega
     * @return \Illuminate\Http\Response
     */
    public function edit(TiempoDeEntrega $tiempoDeEntrega)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TiempoDeEntrega  $tiempoDeEntrega
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TiempoDeEntrega $tiempoDeEntrega)
    {
         try {
            return DB::transaction(function() use ($request, $tiempoDeEntrega){
                $tiempoDeEntrega->find($request['id'])->update([
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
     * @param  \App\Models\TiempoDeEntrega  $tiempoDeEntrega
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, TiempoDeEntrega $tiempoDeEntrega)
    {
         try {
            return DB::transaction(function() use ($id, $tiempoDeEntrega){
                $tiempoDeEntrega->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
}
