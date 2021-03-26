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
                'hasCotizaciones.hasCliente.hasSucursal',
                'hasCotizaciones.hasEmpleado',
                'hasCotizaciones.hasMoneda',
                'hasCotizaciones.hasTiempoDeEntrega',
                'hasCotizaciones.hasPartidas',
                'hasCotizaciones.hasPartidas.hasUnidad',
                'hasCotizaciones.hasPartidas.hasClaveSat',
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
                        $sucursal->contacto_sucural = $value['contacto'];
                        $sucursal->correo_contacto_sucural = $value['correo'];
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
            return DB::transaction(function () use ($request, $cliente) {

                $collectServiciosSolicitados = collect($request['serviciosSolicitados']);

                if($collectServiciosSolicitados){
                    foreach ($collectServiciosSolicitados as $key => $value) {
                        if ($key === 'calibracion' && $value == 'x') {
    
                            $servicios[] = (object)['name' => $key, 'value' => 1];
                        } elseif ($key === 'venta' && $value == 'x') {
    
                            $servicios[] = (object)['name' => $key, 'value' => 2];
                        } elseif ($key === 'mantenimiento' && $value == 'x') {
    
                            $servicios[] = (object)['name' => $key, 'value' => 3];
                        } elseif ($key === 'capacitación' && $value == 'x') {
    
                            $servicios[] = (object)['name' => $key, 'value' => 4];
                        } else {
                            $servicios[] = '';
                        }
                    }

                }else{

                   $collectServiciosSolicitados  = [];
                
                  
            }
                
                $collectFormaDePago = collect($request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['formaDePago']);

                if($collectFormaDePago){

                    foreach ($collectFormaDePago as $key => $value) {
                    if ($key === 'transferenciaElectronica' && $value === 'x') {
                        $formaDePago = "Transferencia Electronica";
                    } elseif ($key === 'depositoEnEfectivo' && $value === 'x') {
                        $formaDePago = "Deposito en efectivo";
                    } elseif ($key === 'cheque' && $value === 'x') {
                        $formaDePago = "Cheque";
                    }
                }
                }else{
                    $collectFormaDePago = '';
                }

                
                $collectMoneda = collect($request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['monedaFactura']);
                if($collectMoneda){
                    foreach ($collectMoneda as $key => $value) {
                        if ($key === 'pesosMexicano' && $value === 'x') {
                            $moneda = "MXN";
                        } elseif ($key === 'dolares' && $value === 'x') {
                            $moneda = "USD";
                        }
                    }
                }else{
                    $collectMoneda  = '';
                }

                $collectTerminosDePago = collect($request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['TerminosDePago']);
                
                if($collectTerminosDePago){
                    foreach ($collectTerminosDePago as $key => $value) {
                        if ($key === 'treintaDias' && $value === 'x') {
                            $terminoPago = "credito de 30 dias";
                        } elseif ($key === 'quinceDias' && $value === 'x') {
                            $terminoPago = "credito de 15 dias";
                        } elseif ($key === 'contado' && $value === 'x') {
                            $terminoPago = "contado";
                        }
                    }
                }else{
                    $collectTerminosDePago = '';
                }

                $collectUsuarioContraseña = collect($request['revisionDeFacturaYpago']['UsuarioContraseña']);
                if($collectUsuarioContraseña){
                    foreach ($collectUsuarioContraseña as $key => $value) {
                        if ($key === 'seEnviaPorEmail' && $value === 'x') {
                            $usuarioContraseña = "Se envia por Email";
                        } elseif ($key === 'seOptienePorElPortal' && $value === 'x') {
                            $usuarioContraseña = "Se optiene por el portal";
                        }
                    }
                }else{
                    $collectUsuarioContraseña = '';
                }
               
               

                $collectAltaFactura = collect($request['revisionDeFacturaYpago']['altaDefacturas']);
                if($collectAltaFactura){

                    foreach ($collectAltaFactura as $key => $value) {
                        if ($key === 'seEnviaPorEmail' && $value === 'x') {
                            $altaFactura = "Se envia por Email";
                        } elseif ($key === 'seOptienePorElPortal' && $value === 'x') {
                            $altaFactura = "Se optiene por el portal";
                        }
                    }
                }else{
                    $collectAltaFactura = '';
                }



                $collectMetodoDePago = collect($request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['metodoDePago']);

                if($collectMetodoDePago){

                    foreach ($collectMetodoDePago as $key => $value) {
                        if ($key === 'pagoParcialesDiferidos' && $value === 'x') {
                            $metodoDepago = "Pago Parcialidades o Diferido";
                        } elseif ($key === 'pagoEnUnaSolaExhibicion' && $value === 'x') {
                            $metodoDepago = "Pago en una sola exhibicion";
                        }
                    }
                }else{
                    $collectMetodoDePago = '';
                }

               

                $cliente->servicio_solicitado = json_encode($servicios);
                $cliente->persona_de_contacto_nombre = $request['personaDeContacto']['nombre'];
                $cliente->persona_de_contacto_celular = $request['personaDeContacto']['celular'];
                $cliente->persona_de_contacto_te_ext = $request['personaDeContacto']['TelExt'];
                $cliente->persona_de_contacto_email = $request['personaDeContacto']['email'];
                $cliente->persona_de_contacto_puesto = $request['personaDeContacto']['puesto'];
                $cliente->contacto_adicionales_compra = $request['ContactoAdicionales']['compras']['compras'];
                $cliente->contacto_adicionales_compra_correo = $request['ContactoAdicionales']['compras']['email'];
                $cliente->contacto_adicionales_compra_telf = $request['ContactoAdicionales']['compras']['telf'];
                $cliente->contacto_adicionales_pagos = $request['ContactoAdicionales']['pagos']['compras'];
                $cliente->contacto_adicionales_pagos_correo = $request['ContactoAdicionales']['pagos']['email'];
                $cliente->contacto_adicionales_pagos_telf = $request['ContactoAdicionales']['pagos']['telf'];
                $cliente->contacto_adicionales_almacen = $request['ContactoAdicionales']['almacen']['compras'];
                $cliente->contacto_adicionales_correo = $request['ContactoAdicionales']['almacen']['email'];
                $cliente->contacto_adicionales_telf = $request['ContactoAdicionales']['almacen']['telf'];
                $cliente->datos_fisicos_requeremientos_facturacion_razon_social = $request['DatosFiscalesYRequerimientosParaFacturacion']['razonSocial'];
                $cliente->datos_fisicos_requeremientos_facturacion_rfc = $request['DatosFiscalesYRequerimientosParaFacturacion']['rfc'];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle = $request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['calle'];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_numero = $request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['numero'];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia = $request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['colonia'];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad = $request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['ciudad'];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado = $request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['estado'];
                $cliente->datos_fisicos_requeremientos_facturacion_domiclio_fiscal_cp = $request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['cp'];
                $cliente->forma_de_pago = $formaDePago ;
                $cliente->moneda_factura = $moneda;
                $cliente->correo_envio_factura = $request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['emailParaEnvioFactura'];
                $cliente->cdfi = $request['DatosFiscalesYRequerimientosParaFacturacion']['domicilioFiscalParaFacturacion']['cfdi'];
                $cliente->metodo_de_pago = $metodoDepago;
                $cliente->termino_de_pago =  $terminoPago;
                $cliente->revision_de_factura_pagos_descripcion_revision_factura = $request['revisionDeFacturaYpago']['descripcion'];
                $cliente->revision_de_factura_pagos_dias_revision_factura = $request['revisionDeFacturaYpago']['diasDeRevisionDeFactura']['dias'];
                $cliente->revision_de_factura_pagos_hora_revision_factura = $request['revisionDeFacturaYpago']['diasDeRevisionDeFactura']['horas'];
                $cliente->revision_de_factura_pagos_dias_confirmacion_pagos = $request['revisionDeFacturaYpago']['diasDeConfirmacionnDepago']['dias'];
                $cliente->revision_de_factura_pagos_hora_confirmacion_pagos = $request['revisionDeFacturaYpago']['diasDeConfirmacionnDepago']['horas'];
                $cliente->revision_de_factura_pagos_dias_pagos = $request['revisionDeFacturaYpago']['diasDepago']['dias'];
                $cliente->revision_de_factura_pagos_hora_pagos = $request['revisionDeFacturaYpago']['diasDepago']['horas'];
                $cliente->link_portal = $request['revisionDeFacturaYpago']['linkPortal'];
                $cliente->usuario_contraseña = $usuarioContraseña;
                $cliente->indiciones_alta_factura = $altaFactura;
                $cliente->correo_soporte_tecnico_portal = $request['revisionDeFacturaYpago']['soporteTecnicoEmail'];
                $cliente->banco_ordenante = $request['revisionDeFacturaYpago']['BancoOrdenante'];
                $cliente->cuenta_de_pago = $request['revisionDeFacturaYpago']['cuentaDeBanco'];
                $cliente->complemento_de_pago_se_envia_por_email = $request['revisionDeFacturaYpago']['complementoDePagoSeEnviaPorEmail'];
                $cliente->informacion_adicional_complemento_de_pago = $request['revisionDeFacturaYpago']['informacionAdicionalDePago'];
                $cliente->lista_requerimiento_acceso_planta = $request['listaDeAccesoAlaPlata'];
                $cliente->iva = "";
                $cliente->save();

                 foreach ($request['sucursales'] as $key => $value) {
                     if(isset($value['nombre']) && $value['nombre'] != null ){
                        $sucursal = new SucursalCliente();
                        $sucursal->nombre_sucursal = $value['nombre'];
                        $sucursal->direccion_sucursal = $value['direccion'];
                        $sucursal->contacto_sucural = $value['nombreContacto'];
                        $sucursal->correo_contacto_sucural = $value['email'];
                        $sucursal->telefono = $value['tel_ext']['num'];
                        $sucursal->cliente_id =  $cliente->id;
                        $sucursal->save();
                    }
                }
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
                    'iva' => $request['iva'],
                ]);
                for ($i = 0; $i < collect($request['sucursales'])->count(); $i++) {
                    $sucursal = new SucursalCliente();
                    if (!isset($request['sucursales'][$i]['id'])) {
                        $sucursal->nombre_sucursal = $request['sucursales'][$i]['nombre_sucursal'];
                        $sucursal->direccion_sucursal = $request['sucursales'][$i]['direccion_sucursal'];
                        $sucursal->telefono = $request['sucursales'][$i]['telefono'];
                        $sucursal->contacto_sucural = $request['sucursales'][$i]['contacto'];
                        $sucursal->correo_contacto_sucural = $request['sucursales'][$i]['correo'];
                        $sucursal->cliente_id = $request['id'];
                        $sucursal->save();
                    } else {
                        $sucursal->find($request['sucursales'][$i]['id'])->update([
                            'nombre_sucursal' => $request['sucursales'][$i]['nombre_sucursal'],
                            'direccion_sucursal' => $request['sucursales'][$i]['direccion_sucursal'],
                            'telefono' => $request['sucursales'][$i]['telefono'],
                            'contacto_sucural' => $request['sucursales'][$i]['contacto_sucural'],
                            'correo_contacto_sucural' => $request['sucursales'][$i]['correo_contacto_sucural'],
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
