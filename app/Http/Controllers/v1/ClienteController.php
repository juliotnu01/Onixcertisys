<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Cliente;
use Illuminate\Http\Request;
use DB;

class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $cliente = Cliente::all();
            return $cliente;     
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
    public function store(Request $request, Cliente $cliente)
    {
        try {
            return DB::transaction( function() use ($request, $cliente) {
                $cliente->razon_social = $request['razon_social'];
                $cliente->direccion_fiscal = $request['direccion_fiscal'];
                $cliente->ciudad_estad_pais = $request['ciudad_estad_pais'];
                $cliente->codigo_postal = $request['codigo_postal'];
                $cliente->rfc = $request['rfc'];
                $cliente->telefono = $request['telefono'];
                $cliente->descuento = $request['descuento'];
                $cliente->correo_electronico_factura = $request['correo_electronico_factura'];
                $cliente->sitio_web = $request['sitio_web'];
                $cliente->vendedor = $request['vendedor']['nombre_completo'];
                $cliente->nombre_completo = $request['nombre_completo'];
                $cliente->telefono_contacto = $request['telefono_contacto'];
                $cliente->celular_contacto = $request['celular_contacto'];
                $cliente->correo_contacto = $request['correo_contacto'];
                $cliente->iva = $request['iva'];
                $cliente->credito = $request['credito'];
                $cliente->save();
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function show(Cliente $cliente)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function edit(Cliente $cliente)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cliente $cliente)
    {
        try {
            return DB::transaction(function() use ($request, $cliente){

                $cliente->find($request['id'])->update([
                    'razon_social' => $request['razon_social'],
                    'direccion_fiscal' => $request['direccion_fiscal'],
                    'ciudad_estad_pais' => $request['ciudad_estad_pais'],
                    'codigo_postal' => $request['codigo_postal'],
                    'rfc' => $request['rfc'],
                    'telefono' => $request['telefono'],
                    'descuento' => $request['descuento'],
                    'correo_electronico_factura' => $request['correo_electronico_factura'],
                    'sitio_web' => $request['sitio_web'],
                    'vendedor' => $request['vendedor']['nombre_completo'],
                    'credito' => $request['credito'],
                    'nombre_completo' => $request['nombre_completo'],
                    'telefono_contacto' => $request['telefono_contacto'],
                    'celular_contacto' => $request['celular_contacto'],
                    'correo_contacto' => $request['correo_contacto'],
                    'iva' => $request['iva'],
                ]);
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Cliente $cliente)
    {
        try {
            return DB::transaction(function() use ($id, $cliente){
                $cliente->find($id)->delete();
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
}
