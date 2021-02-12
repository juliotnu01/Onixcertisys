<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\ClaveSat;
use Illuminate\Http\Request;
use DB;

class ClaveSatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return ClaveSat::all();
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
    public function store(Request $request, ClaveSat $claveSat)
    {
        try {

            return DB::transaction(function () use ($request, $claveSat) {
                $claveSat->codigo = $request['codigo'];
                $claveSat->descripcion = $request['descripcion'];
                $claveSat->save();
            });

        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ClaveSat  $claveSat
     * @return \Illuminate\Http\Response
     */
    public function show(ClaveSat $claveSat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ClaveSat  $claveSat
     * @return \Illuminate\Http\Response
     */
    public function edit(ClaveSat $claveSat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ClaveSat  $claveSat
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ClaveSat $claveSat)
    {
        try {
            
            return DB::transaction(function () use ($request, $claveSat) {
                $claveSat->find($request['id'])->update([
                    'codigo' => $request['codigo'],
                    'descripcion' => $request['descripcion']
                ]);
            });

        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ClaveSat  $claveSat
     * @return \Illuminate\Http\Response
     */
    public function destroy(ClaveSat $claveSat, $id)
    {
        try {
            
            return DB::transaction(function () use ($id, $claveSat)  {
                $claveSat->find($id)->delete();
            });

        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
