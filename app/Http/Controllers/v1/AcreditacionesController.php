<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Acreditaciones;
use Illuminate\Http\Request;
use DB;
use Excel;
use App\Imports\AcreditacionImport;


class AcreditacionesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $acreditaciones = Acreditaciones::all();
            return Response($acreditaciones);
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
    public function store(Request $request, Acreditaciones $acreditaciones)
    {
        try {
            return DB::transaction(function () use ($request, $acreditaciones) {
                $acreditaciones->nombre = $request['nombre'];
                $acreditaciones->save();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }

    public function agregarAcreditacionesMasivamente(Request $request, Acreditaciones $acreditaciones)
    {
        try {
            return DB::transaction(function () use ($request, $acreditaciones) {
                Excel::import(new AcreditacionImport, $request->file('document_instrumentos'), \Maatwebsite\Excel\Excel::XLSX);
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Acreditaciones  $acreditaciones
     * @return \Illuminate\Http\Response
     */
    public function show(Acreditaciones $acreditaciones)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Acreditaciones  $acreditaciones
     * @return \Illuminate\Http\Response
     */
    public function edit(Acreditaciones $acreditaciones)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Acreditaciones  $acreditaciones
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Acreditaciones $acreditaciones)
    {
        try {
            return DB::transaction(function () use ($request, $acreditaciones) {
                $acreditaciones->find($request['id'])->update([
                    'nombre' => $request['nombre']
                ]);
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Acreditaciones  $acreditaciones
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Acreditaciones $acreditaciones)
    {
        try {
            return DB::transaction(function () use ($id, $acreditaciones) {
                $acreditaciones->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }
}
