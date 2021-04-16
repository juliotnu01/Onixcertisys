<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\CFDI;
use Illuminate\Http\Request;
use DB;

class CFDIController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $cfdi = CFDI::all();
            return response($cfdi);
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
    public function store(Request $request, CFDI $cfdi)
    {
        try {
            return DB::transaction(function () use ($request, $cfdi) {
                $cfdi->codigo_cfdi = $request['codigo_cfdi'];
                $cfdi->descripcion_cfdi = $request['descripcion_cfdi'];
                $cfdi->save();
            }, 5);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CFDI  $cFDI
     * @return \Illuminate\Http\Response
     */
    public function show(CFDI $cFDI)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CFDI  $cFDI
     * @return \Illuminate\Http\Response
     */
    public function edit(CFDI $cFDI)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CFDI  $cFDI
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CFDI $cfdi)
    {
        try {

            return DB::transaction(function () use ($request, $cfdi) {
                $cfdi->find($request['id'])->update([
                    'codigo_cfdi' => $request['codigo_cfdi'],
                    'descripcion_cfdi' => $request['descripcion_cfdi']
                ]);
            }, 5);

        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CFDI  $cFDI
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, CFDI $cfdi)
    {
         try {
            
            return DB::transaction(function () use ($id, $cfdi) {
                $cfdi->find($id)->delete();
            }, 5);

        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
