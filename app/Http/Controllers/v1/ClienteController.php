<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\{Cliente, SucursalCliente};
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
            return DB::transaction(function () use ($request, $cliente) {
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

                for ($i = 0; $i < collect($request['sucursales'])->count(); $i++) {
                    $sucursal = new SucursalCliente();
                    $sucursal->nombre_sucursal = $request['sucursales'][$i]['nombre'];
                    $sucursal->direccion_sucursal = $request['sucursales'][$i]['direccion'];
                    $sucursal->telefono = $request['sucursales'][$i]['telefono'];
                    $sucursal->cliente_id = $cliente['id'];
                    $sucursal->save();
                }
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }
    public function storeFileCliente(Request $request, Cliente $cliente)
    {
        try {
            return DB::transaction(function () use ($request , $cliente ) {

                $cliente->nombre_contacto = $request['personaDeContacto']['nombre'];
                $cliente->telefono_contacto = $request['personaDeContacto']['celular'];
                // $cliente->extension_contacto = $request['personaDeContacto']['TelExt'];
                $cliente->cargo_contacto = $request['personaDeContacto']['puesto'];
                $cliente->correo_contacto = $request['personaDeContacto']['email'];

                $cliente->info_cli_compras = $request['ContactoAdicionales']['compras']['compras'];
                $cliente->info_cli_compras_correo = $request['ContactoAdicionales']['compras']['email'];
                $cliente->info_cli_compras_telefono = $request['ContactoAdicionales']['compras']['telf'];
                $cliente->info_cli_pagos = $request['ContactoAdicionales']['pagos']['compras'];
                $cliente->info_cli_pagos_correo = $request['ContactoAdicionales']['pagos']['email'];
                $cliente->info_cli_pagos_telefono = $request['ContactoAdicionales']['pagos']['telf'];
                $cliente->info_cli_almacen = $request['ContactoAdicionales']['almacen']['compras'];
                $cliente->info_cli_almacen_correo = $request['ContactoAdicionales']['almacen']['email'];
                $cliente->info_cli_almacen_telefono = $request['ContactoAdicionales']['almacen']['telf'];
                
                $cliente->razon_social = $request['DatosFiscalesYRequerimientosParaFacturacion']['razonSocial'];
                $cliente->domicilio_fiscal = $request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['calle'] ;
                $cliente->ciudad = $request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['ciudad'];
                $cliente->estado = $request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['estado'];
                $cliente->rfc = $request['DatosFiscalesYRequerimientosParaFacturacion']['rfc'];
                $cliente->cp = $request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['cp'];
                $cliente->cfdi = $request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['cfdi'];
                
                // $cliente->correo_electronico_para_el_envio_de_factura = $request['DatosFiscalesYRequerimientosParaFacturacion']['emailParaEnvioFactura']['telfx'];
                
                $cliente->dias_de_revision = $request['revisionDeFacturaYpago']['diasDeRevisionDeFactura']['dias'];
                $cliente->dias_de_revision_horario = $request['revisionDeFacturaYpago']['diasDeRevisionDeFactura']['horas'];
                $cliente->dias_de_confirmacion = $request['revisionDeFacturaYpago']['diasDeConfirmacionnDepago']['dias'];
                $cliente->dias_de_confirmacion_horario = $request['revisionDeFacturaYpago']['diasDeConfirmacionnDepago']['horas'];
                $cliente->dias_de_pago = $request['revisionDeFacturaYpago']['diasDepago']['dias'];
                $cliente->dias_de_pago_horario = $request['revisionDeFacturaYpago']['diasDepago']['horas'];
                $cliente->save();

            });
            return;
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
            return DB::transaction(function () use ($request, $cliente) {

                $cliente->find($request['id'])->update([
                    'nombre_contacto' => $request['nombre_contacto'],
                    'telefono_contacto' => $request['telefono_contacto'],
                    'cargo_contacto' => $request['cargo_contacto'],
                    'correo_contacto' => $request['correo_contacto'],
                    'razon_social' => $request['razon_social'],
                    'domicilio_fiscal' => $request['domicilio_fiscal'],
                    'ciudad' => $request['ciudad'],
                    'estado' => $request['estado'],
                    'rfc' => $request['rfc'],
                    'cp' => $request['cp'],
                    'telefono_empresa' => $request['telefono_empresa'],
                    'domicilio_servicio' => $request['domicilio_servicio'],
                    'info_cli_compras' => $request['info_cli_compras'],
                    'info_cli_compras_correo' => $request['info_cli_compras_correo'],
                    'info_cli_compras_telefono' => $request['info_cli_compras_telefono'],
                    'info_cli_pagos' => $request['info_cli_pagos'],
                    'info_cli_pagos_correo' => $request['info_cli_pagos_correo'],
                    'info_cli_pagos_telefono' => $request['info_cli_pagos_telefono'],
                    'info_cli_almacen' => $request['info_cli_almacen'],
                    'info_cli_almacen_correo' => $request['info_cli_almacen_correo'],
                    'info_cli_almacen_telefono' => $request['info_cli_almacen_telefono'],
                    'dias_de_revision' => $request['dias_de_revision'],
                    'dias_de_revision_horario' => $request['dias_de_revision_horario'],
                    'dias_de_confirmacion' => $request['dias_de_confirmacion'],
                    'dias_de_confirmacion_horario' => $request['dias_de_confirmacion_horario'],
                    'dias_de_pago' => $request['dias_de_pago'],
                    'dias_de_pago_horario' => $request['dias_de_pago_horario'],
                    'nombre_de_la_persona_responsable_de_pago' => $request['nombre_de_la_persona_responsable_de_pago'],
                    'nombre_de_la_persona_responsable_de_pago_puesto_cargo' => $request['nombre_de_la_persona_responsable_de_pago_puesto_cargo'],
                    'nombre_de_la_persona_responsable_de_pago_puesto_cargo_telf' => $request['nombre_de_la_persona_responsable_de_pago_puesto_cargo_telf'],
                    'nombre_de_la_persona_responsable_de_pago_puesto_cargo_correo' => $request['nombre_de_la_persona_responsable_de_pago_puesto_cargo_correo'],
                    'metodo_de_pago' => $request['metodo_de_pago'],
                    'cfdi' => $request['cfdi'],
                    'forma_de_pago' => $request['forma_de_pago'],
                    'correo_electronico_para_el_envio_de_factura' => $request['correo_electronico_para_el_envio_de_factura'],
                    'se_requiere_orden_de_compra_para_facturar' => $request['se_requiere_orden_de_compra_para_facturar'],
                    'servicio_solicitado' => $request['servicio_solicitado'],
                    'nombre_quien_brinda_la_info' => $request['nombre_quien_brinda_la_info'],
                    'telefono_quien_brinda_la_info' => $request['telefono_quien_brinda_la_info'],
                    'fecha_quien_brinda_la_info' => $request['fecha_quien_brinda_la_info'],
                    'puesto_quien_brinda_la_info' => $request['puesto_quien_brinda_la_info'],
                    'correo_quien_brinda_la_info' => $request['correo_quien_brinda_la_info'],
                    'iva' => $request['iva'],
                ]);
                for ($i = 0; $i < collect($request['has_sucursal'])->count(); $i++) {
                    $sucursal = new SucursalCliente();
                    if (!isset($request['has_sucursal'][$i]['id'])) {
                        $sucursal->nombre_sucursal = $request['has_sucursal'][$i]['nombre_sucursal'];
                        $sucursal->direccion_sucursal = $request['has_sucursal'][$i]['direccion_sucursal'];
                        $sucursal->telefono = $request['has_sucursal'][$i]['telefono'];
                        $sucursal->cliente_id = $request['id'];
                        $sucursal->save();
                    } else {
                        $sucursal->find($request['has_sucursal'][$i]['id'])->update([
                            'nombre_sucursal' => $request['has_sucursal'][$i]['nombre_sucursal'],
                            'direccion_sucursal' => $request['has_sucursal'][$i]['direccion_sucursal'],
                            'telefono' => $request['has_sucursal'][$i]['telefono'],
                            'Cliente_id' => $request['id']
                        ]);
                    }
                }
            }, 5);
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
            return DB::transaction(function () use ($id, $cliente) {
                $cliente->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }
    public function destroySucursal($id, SucursalCliente $sucursal)
    {
        try {
            return DB::transaction(function () use ($id, $sucursal) {
                $sucursal->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }
}
