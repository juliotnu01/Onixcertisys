<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\{Cliente,SucursalCliente};
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\ClienteImport;
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
            $cliente = Cliente::with([
                'hasMetodoDePago',
                'hasCondicionDePago', 
                'hasSucursal', 
                'hasCotizaciones',
                'hasCotizaciones.hasCliente',
                'hasCotizaciones.hasEmpleado',
                'hasCotizaciones.hasMoneda',
                'hasCotizaciones.hasTiempoDeEntrega',
                'hasCotizaciones.hasPartidas',
                'hasCotizaciones.hasPartidas.hasIntrumento',
                'hasCotizaciones.hasPartidas.hasIntrumento.hasAcreditacion',
                'hasCotizaciones.hasPartidas.hasIntrumento.hasMagnitud',
                'hasCotizaciones.hasPartidas.hasCalibracion',
                'hasCotizaciones.hasPartidas.hasEmpleado',
                'hasCotizaciones.hasPartidas.hasRecibo',
                'hasCotizaciones.hasPartidas.hasTecnico',
                ])->get();
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
                
                $cliente->nombre_contacto = $request['nombre_contacto'];
                $cliente->telefono_contacto = $request['telefono_contacto'];
                $cliente->cargo_contacto = $request['cargo_contacto'];
                $cliente->correo_contacto = $request['correo_contacto'];
                $cliente->razon_social = $request['razon_social'];
                $cliente->domicilio_fiscal = $request['domicilio_fiscal'];
                $cliente->ciudad = $request['ciudad']; 
                $cliente->estado = $request['estado'];
                $cliente->rfc = $request['rfc'];
                $cliente->cp = $request['cp'];
                $cliente->telefono_empresa = $request['telefono_empresa'];
                $cliente->domicilio_servicio = $request['domicilio_servicio'];
                $cliente->info_cli_compras = $request['info_cli_compras'];
                $cliente->info_cli_compras_correo = $request['info_cli_compras_correo'];
                $cliente->info_cli_compras_telefono = $request['info_cli_compras_telefono'];
                $cliente->info_cli_pagos = $request['info_cli_pagos'];
                $cliente->info_cli_pagos_correo = $request['info_cli_pagos_correo'];
                $cliente->info_cli_pagos_telefono = $request['info_cli_pagos_telefono'];
                $cliente->info_cli_almacen = $request['info_cli_almacen'];
                $cliente->info_cli_almacen_correo = $request['info_cli_almacen_correo'];
                $cliente->info_cli_almacen_telefono = $request['info_cli_almacen_telefono'];
                $cliente->dias_de_revision = $request['dias_de_revision'];
                $cliente->dias_de_revision_horario = $request['dias_de_revision_horario'];
                $cliente->dias_de_confirmacion = $request['dias_de_confirmacion'];
                $cliente->dias_de_confirmacion_horario = $request['dias_de_confirmacion_horario'];
                $cliente->dias_de_pago = $request['dias_de_pago'];
                $cliente->dias_de_pago_horario = $request['dias_de_pago_horario'];
                $cliente->nombre_de_la_persona_responsable_de_pago = $request['nombre_de_la_persona_responsable_de_pago'];
                $cliente->nombre_de_la_persona_responsable_de_pago_puesto_cargo = $request['nombre_de_la_persona_responsable_de_pago_puesto_cargo'];
                $cliente->nombre_de_la_persona_responsable_de_pago_puesto_cargo_telf = $request['nombre_de_la_persona_responsable_de_pago_puesto_cargo_telf'];
                $cliente->nombre_de_la_persona_responsable_de_pago_puesto_cargo_correo = $request['nombre_de_la_persona_responsable_de_pago_puesto_cargo_correo'];
                $cliente->metodo_de_pago = $request['metodo_de_pago'];
                $cliente->cfdi = $request['cfdi'];
                $cliente->forma_de_pago = $request['forma_de_pago'];
                $cliente->correo_electronico_para_el_envio_de_factura = $request['correo_electronico_para_el_envio_de_factura'];
                $cliente->se_requiere_orden_de_compra_para_facturar = $request['se_requiere_orden_de_compra_para_facturar'];
                $cliente->servicio_solicitado = $request['servicio_solicitado'];
                $cliente->nombre_quien_brinda_la_info = $request['nombre_quien_brinda_la_info'];
                $cliente->telefono_quien_brinda_la_info = $request['telefono_quien_brinda_la_info'];
                $cliente->fecha_quien_brinda_la_info = $request['fecha_quien_brinda_la_info'];
                $cliente->puesto_quien_brinda_la_info = $request['puesto_quien_brinda_la_info'];
                $cliente->correo_quien_brinda_la_info = $request['correo_quien_brinda_la_info'];
                $cliente->iva = $request['iva'];
                $cliente->save(); 
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
    public function storeFileCliente(Request $request)
    {
        try {
                Excel::import(new ClienteImport, $request->file('file_cliente'));
                return ;
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
                    'metodo_de_pago_id' => $request['metodo_de_pago']['id'],
                    'condicion_de_pago_id' => $request['condicion_de_pago']['id'],
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
