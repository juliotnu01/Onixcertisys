<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Magnitudes;
use Illuminate\Http\Request;
use DB;
class MagnitudesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       try {
            $magnitudes = Magnitudes::all();
            return $magnitudes;
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        } 
    }
    public function indexMagnitud()
    {
       try {
            $magnitudes = Magnitudes::with(  ['has_instrumento',
                                             'has_instrumento.belongsPartida',
                                             'has_instrumento.belongsPartida.belongsCotizacion', 
                                             'has_instrumento.belongsPartida.belongsCotizacion.hasCliente', 
                                             'has_instrumento.belongsPartida.belongsCotizacion.belongsRecibo'])->get(['id', 'clave', 'nombre']);
            return $magnitudes;
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
    public function store(Request $request, Magnitudes $magnitudes)
    {
        try {
            return DB::transaction(function() use ($request, $magnitudes){
                $magnitudes->clave = $request['clave'];
                $magnitudes->nombre = $request['nombre'];
                $magnitudes->save();
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Magnitudes  $magnitudes
     * @return \Illuminate\Http\Response
     */
    public function show(Magnitudes $magnitudes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Magnitudes  $magnitudes
     * @return \Illuminate\Http\Response
     */
    public function edit(Magnitudes $magnitudes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Magnitudes  $magnitudes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Magnitudes $magnitudes)
    {

        try {
            return DB::transaction(function() use ($request, $magnitudes){

                $magnitudes->find($request['id'])->update([
                    'clave' => $request['clave'],
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
     * @param  \App\Models\Magnitudes  $magnitudes
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Magnitudes $magnitudes)
    {
        try {
            return DB::transaction(function() use ($id, $magnitudes){
                $magnitudes->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
    public function storeReporteVentasMagnitud()
    {
        
    }
}
