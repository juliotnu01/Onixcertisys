<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\{Empleado,Partida};
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class EmpleadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       try {
            $empleado = Empleado::all();
            return Response($empleado);
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
    public function store(Request $request, Empleado $empleado)
    {
        try {
            return DB::transaction(function() use ($request, $empleado){

                $empleado->fecha_de_alta = $request['fecha_de_alta'];
                $empleado->fecha_de_baja = $request['fecha_de_baja'];
                $empleado->status = $request['status']['value'];
                $empleado->nombre_completo = $request['nombre_completo'];
                $empleado->rfc = $request['rfc'];
                $empleado->direccion = $request['direccion'];
                $empleado->ciudad = $request['ciudad'];
                $empleado->codigo_postal = $request['codigo_postal'];
                $empleado->telefono = $request['telefono'];
                $empleado->correo_factura = $request['correo_factura'];
                $empleado->departamento = $request['departamento'];
                $empleado->observaciones = $request['observaciones'];
                $empleado->save();


            },5);
            
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Empleado  $empleado
     * @return \Illuminate\Http\Response
     */
    public function show(Empleado $empleado)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Empleado  $empleado
     * @return \Illuminate\Http\Response
     */
    public function edit(Empleado $empleado)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Empleado  $empleado
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Empleado $empleado)
    {

        try {
            return DB::transaction(function() use ($request, $empleado){

                $empleado->find($request['id'])->update([
                    'fecha_de_alta' => $request['fecha_de_alta'],
                    'fecha_de_baja' => $request['fecha_de_baja'],
                    'status' => $request['status']['value'],
                    'nombre_completo' => $request['nombre_completo'],
                    'rfc' => $request['rfc'],
                    'direccion' => $request['direccion'],
                    'ciudad' => $request['ciudad'],
                    'codigo_postal' => $request['codigo_postal'],
                    'telefono' => $request['telefono'],
                    'correo_factura' => $request['correo_factura'],
                    'departamento' => $request['departamento'],
                    'observaciones' => $request['observaciones'],

                ]);

            },5);
            
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Empleado  $empleado
     * @return \Illuminate\Http\Response
     */
    public function destroy($id,  Empleado $empleado)
    {
        try {
            return DB::transaction(function() use ($id, $empleado){
                $empleado->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    public function asignarTecnicoPartida(Request $request, Partida $partida)
    {
        try {
            return DB::transaction(function() use ($request, $partida){
                if($request['tipo_documento'] == 1){
                    $data = json_decode($request['model']);
                    $nameFIle = $request->file('documento')->getClientOriginalName();
                    Storage::disk('documentos_excel')->putFileAs("/documentos/excels/",$request->file('documento'), $nameFIle);
                    $url = asset(Storage::url($nameFIle));
                    $partida->find($data->id)->update([
                        'empleado_id' =>  $data->has_empleado->id,
                        'ruta_doc_calibracion' => $url
                    ]);
                }else {
                    $partida->find($request['model']['id'])->update([
                        'empleado_id' =>  $request['model']['has_empleado']['id'],
                        'ruta_doc_calibracion' => $request['documento']
                    ]);
                }

            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
}
