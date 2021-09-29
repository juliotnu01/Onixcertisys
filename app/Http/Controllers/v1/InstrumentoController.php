<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\{Instrumento,Partida, Cotizacion};
use Illuminate\Http\Request;
use DB;
use App\Imports\{InstrumentoImport};
use Excel;

class InstrumentoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $instrumento = Instrumento::with(['hasAcreditacion','hasMagnitud', 'belongsDocumento'])->get();
            return Response($instrumento);
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
    public function store(Request $request, Instrumento $instrumento)
    {
        try {
            return DB::transaction(function() use ($request, $instrumento){
                $instrumento->nombre = $request['nombre'];
                $instrumento->alcance = $request['alcance'];
                $instrumento->acreditacion_id = $request['acreditacion']['id'];
                $instrumento->magnitude_id = $request['area']['id'];
                $instrumento->precio_venta = $request['precio_venta'];
                $instrumento->save();

            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
    public function storeFromFile(Request $request)
    {
        try {
            Excel::import(new InstrumentoImport, $request->file('document_instrumentos'), \Maatwebsite\Excel\Excel::XLSX);
            return response(['mensaje' => 'cargado con exito'] , 200);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Instrumento  $instrumento
     * @return \Illuminate\Http\Response
     */
    public function show(Instrumento $instrumento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Instrumento  $instrumento
     * @return \Illuminate\Http\Response
     */
    public function edit(Instrumento $instrumento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Instrumento  $instrumento
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Instrumento $instrumento)
    {
        try {
            return DB::transaction(function() use ($request, $instrumento){
                $instrumento->find($request['id'])->update([
                    'nombre' => $request['nombre'],
                    'alcance' => $request['alcance'],
                    'acreditacion_id' => $request['has_acreditacion']['id'],
                    'magnitude_id' => $request['has_magnitud']['id'],
                    'precio_venta' => $request['precio_venta'],
                ]);
                 $pa = Partida::where('instrumento_id', $request['id'])->update([
                    'importe' =>  $request['precio_venta']
                ]); // partida para actualizar

                if($pa){
                    $p = Partida::where('instrumento_id', $request['id'])->first(); // partida para sacar la cotizacion
                    $c = Cotizacion::with(['hasCliente'])->where('id', $p['cotizacion_id'])->first(); // cotizacion 
                    $pr = Partida::where('cotizacion_id', $c['id'])->get(); // partida relacionadas con la cotizacion
                    
                    $subtotal = collect($pr->reduce(function ($carry, $item) {
                        return $carry + $item['importe'];
                    }))->sum(); // subtotal de las partidas
                
                    $iva = (($subtotal * (float)$c['hasCliente']['iva'] ) / 100 );
                    $total = $subtotal + (float)$iva;
                
                    $c->update([
                        'sub_total' => $subtotal,
                        'iva' => $iva,
                        'total' => $total
                    ]);

                }
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
    public function updateInstrumentoCargadoMasivamente(Request $request, Instrumento $instrumento)
    {
        try {
            return DB::transaction(function() use ($request, $instrumento){
                $instrumento->find($request['id_instrumento'])->update([
                    'acreditacion_id' => $request['acreditacion'],
                    'magnitude_id' => $request['magnitud'],
                    'precio_venta' => $request['precio_venta'],
                ]);

            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Instrumento  $instrumento
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Instrumento $instrumento)
    {
        try {
            return DB::transaction(function() use ($id, $instrumento){
                $instrumento->find($id)->delete();
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
}
