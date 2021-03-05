<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Partida;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Http\File;

class PartidaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $partida = Partida::with([
                                        'hasProcedimientosLabs',
                                        'hasPatronesLabs',
                                        'hasIntrumento',
                                        'hasUnidad',
                                        'hasClaveSat',
                                        'hasNotaDeSeguimiento',
                                        'hasNotaDeSeguimiento.hasOnwNote',
                                        'hasIntrumento.hasMagnitud', 
                                        'hasCalibracion',
                                        'hasRecibo', 
                                        'hasRecibo.hasCotizaicon', 
                                        'hasRecibo.hasCotizaicon.hasCliente',
                                        'hasTecnico'])->where('convertir_recibo', true)->get();
            return Response($partida);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
    public function indexParaCalibrar()
    {
        try {
            $partida = Partida::with([
                                      'hasProcedimientosLabs',
                                      'hasPatronesLabs',
                                      'hasIntrumento',
                                      'hasIntrumento.hasMagnitud', 
                                      'hasCalibracion',
                                      'hasRecibo', 
                                      'hasRecibo.hasCotizaicon', 
                                      'hasRecibo.hasCotizaicon.hasCliente',
                                      'hasTecnico'])->whereNotNull('empleado_id')->get();
            return Response($partida);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Partida  $partida
     * @return \Illuminate\Http\Response
     */
    public function show(Partida $partida)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Partida  $partida
     * @return \Illuminate\Http\Response
     */
    public function edit(Partida $partida)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Partida  $partida
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Partida $partida)
    {
        try {

            return DB::transaction(function () use ($request,$partida) {
                $partida->find($request['id'])->update([
                    'cantidad' => $request['cantidad'],
                    'servicio' => $request['servicio'],
                    'unidad' => $request['unidad'],
                    'identificacion' => $request['identificacion'],
                    'importe' => $request['importe'],
                    'marca' => $request['marca'],
                    'modelo' => $request['modelo'],
                    'serie' => $request['serie'],
                    'instrumento_id' => $request['instrumento_id'],
                    'cotizacion_id' => $request['cotizacion_id'],
                ]);
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Partida  $partida
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Partida $partida)
    {
        try {

            return DB::transaction(function () use ($id, $partida) {
                $partida->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }

    public function cargarCertificadoPdfPartida(Request $request)
    {
        try {
            $partida = json_decode($request['partida']);
            Storage::disk('store_pdfs')->putFileAs("/certificados", new File($request->file('pdf_calibracion')), "certificado-{$partida->informe_id}-cliente-{$partida->has_recibo->has_cotizaicon->has_cliente->razon_social}.pdf");
            $url = Storage::disk('store_pdfs')->url("/certificados/certificado-{$partida->informe_id}-cliente-{$partida->has_recibo->has_cotizaicon->has_cliente->razon_social}.pdf");
            Partida::find($partida->id)->update([
                'ruta_pdf_calibracion' => $url
            ]);
            return response($url);
            
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
