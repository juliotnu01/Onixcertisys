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

                $cliente->servicio_solicitado = json_encode($request['servicio_solicitado']);
                $cliente->persona_de_contacto_nombre = $request['persona_de_contacto']['nombre'];
                $cliente->persona_de_contacto_celular = $request['persona_de_contacto']['celular'];
                $cliente->persona_de_contacto_te_ext = $request['persona_de_contacto']['tel_ext'];
                $cliente->persona_de_contacto_email = $request['persona_de_contacto']['email'];
                $cliente->persona_de_contacto_puesto = $request['persona_de_contacto']['puesto'];
                $cliente->contacto_adicionales_compra = $request['contacto_adicionales']['compras'];
                $cliente->contacto_adicionales_compra_correo = $request['contacto_adicionales']['correo_compras'];
                $cliente->contacto_adicionales_compra_telf = $request['contacto_adicionales']['telf_compras'];
                $cliente->contacto_adicionales_pagos = $request['contacto_adicionales']['pagos'];
                $cliente->contacto_adicionales_pagos_correo = $request['contacto_adicionales']['correo_pagos'];
                $cliente->contacto_adicionales_pagos_telf = $request['contacto_adicionales']['telf_pagos'];
                $cliente->contacto_adicionales_almacen = $request['contacto_adicionales']['almacen'];
                $cliente->contacto_adicionales_correo = $request['contacto_adicionales']['correo_almacen'];
                $cliente->contacto_adicionales_telf = $request['contacto_adicionales']['telf_almacen'];
                $cliente->datos_fisicos_requeremientos_facturacion_razon_social = $request['datosFisicosYRequerimientosDeFactuacion']['razon_social'];
                $cliente->datos_fisicos_requeremientos_facturacion_rfc = $request['datosFisicosYRequerimientosDeFactuacion']['rfc'];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle = $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['calle'];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_numero = $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['numero'];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia = $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['colonia'];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad = $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['ciudad'];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado = $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['estado'];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_cp = $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['cp'];
                $cliente->forma_de_pago = $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['formaDePago']['nombre'];
                $cliente->moneda_factura = $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['monedaFactura']['clave'];
                $cliente->correo_envio_factura = $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['emailEnvioFactura'];
                $cliente->cdfi = $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['cfdi'];
                $cliente->metodo_de_pago = $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['metodoDePago']['nombre'];
                $cliente->termino_de_pago = $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['terminosDePago']['name'];
                $cliente->revision_de_factura_pagos_descripcion_revision_factura = $request['revisionDeFacturasYpagos']['descripcionRevisionFactura'];
                $cliente->revision_de_factura_pagos_dias_revision_factura = $request['revisionDeFacturasYpagos']['diasRevisionFactura'];
                $cliente->revision_de_factura_pagos_hora_revision_factura = $request['revisionDeFacturasYpagos']['horaDiasRevisionFactura'];
                $cliente->revision_de_factura_pagos_dias_confirmacion_pagos = $request['revisionDeFacturasYpagos']['diasDeConfirmacionDePago'];
                $cliente->revision_de_factura_pagos_hora_confirmacion_pagos = $request['revisionDeFacturasYpagos']['horaDiasDeConfirmacionDePago'];
                $cliente->revision_de_factura_pagos_dias_pagos = $request['revisionDeFacturasYpagos']['diasDePago'];
                $cliente->revision_de_factura_pagos_hora_pagos = $request['revisionDeFacturasYpagos']['horaDiasDePago'];
                $cliente->link_portal = $request['revisionDeFacturasYpagos']['linkPortal'];
                $cliente->usuario_contraseña = $request['revisionDeFacturasYpagos']['usuarioContrasena'];
                $cliente->indiciones_alta_factura = $request['revisionDeFacturasYpagos']['indicacionesAltaFacturaPortal'];
                $cliente->correo_soporte_tecnico_portal = $request['revisionDeFacturasYpagos']['correoSoporteTecnicoPortal'];
                $cliente->banco_ordenante = $request['revisionDeFacturasYpagos']['bancoOrdenante'];
                $cliente->cuenta_de_pago = $request['revisionDeFacturasYpagos']['cuentaDePago'];
                $cliente->complemento_de_pago_se_envia_por_email = $request['revisionDeFacturasYpagos']['complementoDePagoSeEnviaPorEmail'];
                $cliente->informacion_adicional_complemento_de_pago = $request['revisionDeFacturasYpagos']['informacionAdicionalComplementoDePago'];
                $cliente->lista_requerimiento_acceso_planta = $request['revisionDeFacturasYpagos']['listaRequerimientoDeAccesoAlaPlata'];
                $cliente->iva = $request['iva'];
                $cliente->save();

                foreach ($request['sucursales'] as $key => $value) {
                        $sucursal = new SucursalCliente();
                        $sucursal->nombre_sucursal = $value['nombre'];
                        $sucursal->direccion_sucursal = $value['direccion'];
                        $sucursal->telefono = $value['telefono'];
                        $sucursal->cliente_id =  $cliente->id;
                        $sucursal->save();
                }   

            }, 5);

        } catch (Exception $e) {
            throw new Exception($e);
        }
    }
    public function storeFileCliente(Request $request, Cliente $cliente)
    {
        try {
            return DB::transaction(function () use ($request , $cliente ) {

                dd($request->all());

                $cliente->servicio_solicitado = $request[''];
                $cliente->persona_de_contacto_nombre = $request[''];
                $cliente->persona_de_contacto_celular = $request[''];
                $cliente->persona_de_contacto_te_ext = $request[''];
                $cliente->persona_de_contacto_email = $request[''];
                $cliente->persona_de_contacto_puesto = $request[''];
                $cliente->contacto_adicionales_compra = $request[''];
                $cliente->contacto_adicionales_compra_correo = $request[''];
                $cliente->contacto_adicionales_compra_telf = $request[''];
                $cliente->contacto_adicionales_compra_telf = $request[''];
                $cliente->contacto_adicionales_pagos = $request[''];
                $cliente->contacto_adicionales_pagos_correo = $request[''];
                $cliente->contacto_adicionales_pagos_telf = $request[''];
                $cliente->contacto_adicionales_almacen = $request[''];
                $cliente->contacto_adicionales_correo = $request[''];
                $cliente->contacto_adicionales_telf = $request[''];
                $cliente->datos_fisicos_requeremientos_facturacion_razon_social = $request[''];
                $cliente->datos_fisicos_requeremientos_facturacion_rfc = $request[''];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle = $request[''];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_numero = $request[''];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia = $request[''];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad = $request[''];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado = $request[''];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_cp = $request[''];
                $cliente->forma_de_pago = $request[''];
                $cliente->moneda_factura = $request[''];
                $cliente->correo_envio_factura = $request[''];
                $cliente->cdfi = $request[''];
                $cliente->metodo_de_pago = $request[''];
                $cliente->termino_de_pago = $request[''];
                $cliente->revision_de_factura_pagos = $request[''];
                $cliente->revision_de_factura_pagos_descripcion_revision_factura = $request[''];
                $cliente->revision_de_factura_pagos_dias_revision_factura = $request[''];
                $cliente->revision_de_factura_pagos_hora_revision_factura = $request[''];
                $cliente->revision_de_factura_pagos_dias_confirmacion_pagos = $request[''];
                $cliente->revision_de_factura_pagos_hora_confirmacion_pagos = $request[''];
                $cliente->revision_de_factura_pagos_dias_confirmacion_pagos = $request[''];
                $cliente->revision_de_factura_pagos_horas_confirmacion_pagos = $request[''];
                $cliente->revision_de_factura_pagos_dias_pagos = $request[''];
                $cliente->revision_de_factura_pagos_hora_pagos = $request[''];
                $cliente->link_portal = $request[''];
                $cliente->usuario_contraseña = $request[''];
                $cliente->indiciones_alta_factura = $request[''];
                $cliente->correo_soporte_tecnico_portal = $request[''];
                $cliente->banco_ordenante = $request[''];
                $cliente->cuenta_de_pago = $request[''];
                $cliente->complemento_de_pago_se_envia_por_email = $request[''];
                $cliente->informacion_adicional_complemento_de_pago = $request[''];
                $cliente->lista_requerimiento_acceso_planta = $request[''];

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
                    'servicio_solicitado' => json_encode($request['servicio_solicitado']), 
                    'persona_de_contacto_nombre' => $request['persona_de_contacto']['nombre'],
                    'persona_de_contacto_celular' => $request['persona_de_contacto']['celular'],
                    'persona_de_contacto_te_ext' => $request['persona_de_contacto']['tel_ext'],
                    'persona_de_contacto_email' => $request['persona_de_contacto']['email'],
                    'persona_de_contacto_puesto' => $request['persona_de_contacto']['puesto'],
                    'contacto_adicionales_compra' => $request['contacto_adicionales']['compras'],
                    'contacto_adicionales_compra_correo' => $request['contacto_adicionales']['correo_compras'],
                    'contacto_adicionales_compra_telf' => $request['contacto_adicionales']['telf_compras'],
                    'contacto_adicionales_pagos' => $request['contacto_adicionales']['pagos'],
                    'contacto_adicionales_pagos_correo' => $request['contacto_adicionales']['correo_pagos'],
                    'contacto_adicionales_pagos_telf' => $request['contacto_adicionales']['telf_pagos'],
                    'contacto_adicionales_almacen' => $request['contacto_adicionales']['almacen'],
                    'contacto_adicionales_correo' => $request['contacto_adicionales']['correo_almacen'],
                    'contacto_adicionales_telf' => $request['contacto_adicionales']['telf_almacen'],
                    'datos_fisicos_requeremientos_facturacion_razon_social' => $request['datosFisicosYRequerimientosDeFactuacion']['razon_social'],
                    'datos_fisicos_requeremientos_facturacion_rfc' => $request['datosFisicosYRequerimientosDeFactuacion']['rfc'],
                    'datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle' => $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['calle'],
                    'datos_fisicos_requeremientos_facturacion_domiclio_fiscal_numero' => $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['numero'],
                    'datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia' => $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['colonia'],
                    'datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad' => $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['ciudad'],
                    'datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado' => $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['estado'],
                    'datos_fisicos_requeremientos_facturacion_domiclio_fiscal_cp' => $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['cp'],
                    'correo_envio_factura' => $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['emailEnvioFactura'],
                    'cdfi' => $request['datosFisicosYRequerimientosDeFactuacion']['domicilioFiscalParaFacturacion']['cfdi'],
                    'revision_de_factura_pagos_descripcion_revision_factura' => $request['revisionDeFacturasYpagos']['descripcionRevisionFactura'],
                    'revision_de_factura_pagos_dias_revision_factura' => $request['revisionDeFacturasYpagos']['diasRevisionFactura'],
                    'revision_de_factura_pagos_hora_revision_factura' => $request['revisionDeFacturasYpagos']['horaDiasRevisionFactura'],
                    'revision_de_factura_pagos_dias_confirmacion_pagos' => $request['revisionDeFacturasYpagos']['diasDeConfirmacionDePago'],
                    'revision_de_factura_pagos_hora_confirmacion_pagos' => $request['revisionDeFacturasYpagos']['horaDiasDeConfirmacionDePago'],
                    'revision_de_factura_pagos_dias_pagos' => $request['revisionDeFacturasYpagos']['diasDePago'],
                    'revision_de_factura_pagos_hora_pagos' => $request['revisionDeFacturasYpagos']['horaDiasDePago'],
                    'link_portal' => $request['revisionDeFacturasYpagos']['linkPortal'],
                    'usuario_contraseña' => $request['revisionDeFacturasYpagos']['usuarioContrasena'],
                    'indiciones_alta_factura' => $request['revisionDeFacturasYpagos']['indicacionesAltaFacturaPortal'],
                    'correo_soporte_tecnico_portal' => $request['revisionDeFacturasYpagos']['correoSoporteTecnicoPortal'],
                    'banco_ordenante' => $request['revisionDeFacturasYpagos']['bancoOrdenante'],
                    'cuenta_de_pago' => $request['revisionDeFacturasYpagos']['cuentaDePago'],
                    'complemento_de_pago_se_envia_por_email' => $request['revisionDeFacturasYpagos']['complementoDePagoSeEnviaPorEmail'],
                    'informacion_adicional_complemento_de_pago' => $request['revisionDeFacturasYpagos']['informacionAdicionalComplementoDePago'],
                    'lista_requerimiento_acceso_planta' => $request['revisionDeFacturasYpagos']['listaRequerimientoDeAccesoAlaPlata'],
                    'iva' => $request['iva'],
                    // 'iva' => $request['iva'],
                ]);
                // for ($i = 0; $i < collect($request['sucursales'])->count(); $i++) {
                //     $sucursal = new SucursalCliente();
                //     if (!isset($request['sucursales'][$i]['id'])) {
                //         $sucursal->nombre_sucursal = $request['sucursales'][$i]['nombre_sucursal'];
                //         $sucursal->direccion_sucursal = $request['sucursales'][$i]['direccion_sucursal'];
                //         $sucursal->telefono = $request['sucursales'][$i]['telefono'];
                //         $sucursal->cliente_id = $request['id'];
                //         $sucursal->save();
                //     } else {
                //         $sucursal->find($request['sucursales'][$i]['id'])->update([
                //             'nombre_sucursal' => $request['sucursales'][$i]['nombre_sucursal'],
                //             'direccion_sucursal' => $request['sucursales'][$i]['direccion_sucursal'],
                //             'telefono' => $request['sucursales'][$i]['telefono'],
                //             'Cliente_id' => $request['id']
                //         ]);
                //     }
                // }
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
