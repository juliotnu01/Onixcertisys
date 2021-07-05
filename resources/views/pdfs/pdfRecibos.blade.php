<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<style>
    *{
        font-family: sans-serif;
    }
    .tdLogo {
        width: 33.3%;
    }
    .tdInfoEmpresa {
        width: 33.3%%;
        text-align: center;
        font-size: 16px ;
    }

    .tdInfoEmpresaContactos {
        width: 20%;
        text-align: right;
        color: #0095d9;
        padding-right: 80px;
        font-size: 12px ;
    }
    .tdInfoNumberCotizacion {
        width: 33.3%%;
    }
    .cotWord {
        font-size: 20px;
        text-align: center;
        background-color: #0095d9;
        color: white;
        border-radius: 6px 6px 6px 6px;
        padding-top: 5px;
        padding-bottom: 5px;
        margin-left: 105px;
    }

    .trCabecera td {
        float: left;
    }

    .cotNumber {
        border: 2px solid #0095d9;
        border-radius: 6px;
        margin-top: 5px;
        margin-right: 90px;
        margin-bottom: 0px;
        margin-left: 195px;
        text-align: left;
    }

    .tableCabecera {
        width: 100%;
        height: auto;
        font-size: 14px;
        border: 3px solid #0095d9;
        border-radius: 6px;
        text-align: right;
    }

    .tableCuerpoItems {
        width: 100%;
        border: 2px solid #0095d9;
        margin-top: 5px;
        font-size: 13px;
    }

    .tableCuerpoItems_head {
        background-color: #0095d9;
        color: white;
        font-size: 8px;
        font-size: 13px;
    }

    .tableCuerpoItems_head_tr {
        background-color: #0095d9;
        color: white;
        font-size: 13px;
    }

    .tableCuerpoItems_body_tr td {
        border: 1px solid #0095d9;
        text-align: center;
        font-size: 13px;
    }

    .tableCuerpoItems_footer_tr td {
        text-align: left;
        font-size: 14px;
    }

    .tableNota {
        width: 100%;
        height: 100px;
        border: 2px solid #0095d9;
        margin-top: 5px;
        border-radius: 20px;
        font-size: 13px;
    }

    .tableDatosBancarios {
        width: 100%;
        font-size: 16px;
        text-align: justify;
        margin-top: 5px;
    }

    #PagoMexico {
        width: 50%;
        margin: 5%;
        font-size: 10px;
        text-align: center;
    }

    #pagoEEUU {
        width: 50%;
        margin: 5%;
        font-size: 10px;
        text-align: center;
    }

    #pagoEEUU tr td {
        border: 1px solid #000;
        padding: 5px;
    }

    #pagoEEUU tr th {
        border: 1px solid #000;
    }

    #PagoMexico tr td {
        border: 1px solid #000;
        padding: 5px;
    }

    #PagoMexico tr th {
        border: 1px solid #000;
    }

    .tablefirma {
        width: 100%;
        font-size: 13px;
        margin-top: 100px;
    }
    #firmaEjecutivoDeVenta {
        text-align: center;
        margin: 0 auto;
    }

    #firmaAceptarCondiciones {
        text-align: center;
        margin: 0 auto;
    }

    .teminosYcondiciones {
        width: 100%;
        margin-top: 5px;
        font-size: 13px;
    }
    .tableCabeceraDoc{
        width: 100%;
    }
</style>
<body>
    <table class="tableCabeceraDoc">
        <tr>
            <td class="tdLogo">
                <!-- <img src="{{ asset('img/login-logo.png') }}" style="width: 80%;"> -->
            </td>
            <td class="tdInfoEmpresa">
                <span>
                    Accredian, S. DE R.L. DE C.V.<br />
                    <strong> RFC: ACC1905026P3 </strong> <br />
                    Domicilio Fiscal: Calle Monclova 213,
                    Col. Miravista Gral. Escobedo, N.L. MX CP. 66050<br />
                    Sucursal: Calle 24 #600 Resid. Las Puentes 3er sector,
                    San Nicolas de los Garza, N.L. MX CP. 66460
                </span>
            </td>
            <td class="tdInfoNumberCotizacion">
                <div>
                    <div class="cotWord">ORDEN DE SERVICIO</div>
                    <div class="cotNumber">#{{$data['id']}}</div>
                </div>
            </td>
        </tr>
    </table>
    <table class="tableCabecera">
        <tbody>
            <tr>
                <td style="width: 3%;">Cliente:</td>
                <td style="width: 37%; text-align: left;" colspan="3">{{$data['has_cotizaicon']['has_cliente']['datos_fisicos_requeremientos_facturacion_razon_social']}}</td>
                <td style="width: 3%;">Fecha:</td>
                <td style="width: 3%; text-align: left;" colspan="3">{{substr($data['created_at'], 0, 10)}}</td>
            </tr>
            <tr>
                <td style="width: 3%;">Dirección:</td>
                <td style="width: 3%; text-align: left" colspan="3">
                    {{$data['has_cotizaicon']['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle']}}
                    {{$data['has_cotizaicon']['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_numero']}}
                    {{$data['has_cotizaicon']['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia']}}
                    {{$data['has_cotizaicon']['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad']}}
                    {{$data['has_cotizaicon']['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado']}}
                </td>
            </tr>
            <tr>
                <td style="width: 3%;">Usuario:</td>
                <td style="width: 3%; text-align: left" colspan="3">{{$data['has_cotizaicon']['has_cliente']['contacto_adicionales_compra']}}</td>
            </tr>
            <tr>
                <td style="width: 3%;">Teléfono:</td>
                <td style="width: 3%; text-align: left" colspan="3"> {{$data['has_cotizaicon']['has_cliente']['contacto_adicionales_compra_telf']}}</td>
            </tr>
            <tr>
                <td style="width: 3%;">Correo:</td>
                <td style="width: 3%; text-align: left" colspan="3"> {{$data['has_cotizaicon']['has_cliente']['contacto_adicionales_compra_correo']}}</td>
            </tr>
        </tbody>
    </table>
    
    <table class="tableCuerpoItems" cellspacing=0>
        <thead class="tableCuerpoItems_head">
            
            <tr class="tableCuerpoItems_head_tr">
                <th>#</th>
                <th>Part</th>
                <th>Cant</th>
                <th>Serv</th>
                <th>Informe - Instrumento</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Serie</th>
                <th>Identificación</th>
                <th>Lugar de servicio</th>
                <th>Tipo</th>
                <th>Vigencia</th>
                
            </tr>
           
        </thead>
        <tbody>
            @foreach($data['has_partidas'] as $key => $item)
            <tr class="tableCuerpoItems_body_tr">
                <td>{{$key+1}}</td>
                <td>{{$item['id']}}</td>
                <td>{{$item['cantidad']}}</td>
                <td>{{substr($item['servicio'], 0, 1)}}</td>
                <td>{{$item['informe_id']}} - {{$item['has_intrumento']['nombre']}}</td>
                <td>{{$item['marca']}}</td>
                <td>{{$item['modelo']}}</td>
                <td>{{$item['serie']}}</td>
                <td>{{$item['identificacion']}}</td>
                <td> {{$item['lugar_servicio']}}</td>
                <td>{{$item['tipo']}}</td>
                <td> {{$item['vigencia']}}</td>
            </tr>
             @endforeach
        </tbody>
    </table>
    
    <table class="tableNota">
        <tbody>
            <tr>
                <td>  Observaciones:</td>
                <td> </td>
            </tr>
            <tr>
                <td style="border: none;" > &nbsp; </td>
            </tr>
            <tr>
                <td style="border: none;" > &nbsp; </td>
            </tr>
            <tr>
                <td style="border: none;" > &nbsp; </td>
            </tr>
            <tr>
                <td style="border: none;" > &nbsp; </td>
            </tr>
        </tbody>
    </table>
   
    <table class="tableDatosBancarios">
        <tbody>
            <tr>
               <td>
                   <p>
                   Los informes de calibración serán emitidos con los datos proporcionados en el presente documento. Toda reimpresión de informe de calibración por causas atribuidas al cliente tendrá un cargo de $100.00 pesos M. N. Accredian, S. DE R.L. DE C.V. asumirá como abandono los instrumentos que no hayan sido reclamados en un plazo mayor de 60 días naturales posteriores a la fecha de recepción. En caso de robo o pérdida del equipo(s) del cliente mientras estos se encuentren en las instalaciones de Accredian, S. DE R.L. DE C.V. El cliente podrá reclamar el importe del mismo al precio del mercado menos la depreciación correspondiente. El tiempo de calibración acordado empieza a partir de que el cliente entrega el(los) equipos(s). En caso de requerir criterios de aceptación, tolerancia o alguna otra característica especial, favor de mencionarlo en el presente documento.
                   </p>
               </td>
            </tr>
        </tbody>
    </table>
    
    <table class="tablefirma">
        <tbody>
            <tr>
                <td>
                    <table id="firmaEjecutivoDeVenta">
                        <tbody>
                            <tr>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>_________________________________________________</td>
                            </tr>
                            <tr>
                                <td>Ing. De Calibración<br/>Nombre y firma</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td>
                    <table id="firmaAceptarCondiciones">
                        <tbody>
                            <tr>
                                <td>Ing. Roberto Delgado</td>
                            </tr>
                            <tr>
                                <td>_________________________________________________</td>
                            </tr>
                            <tr>
                                <td>Gerente Tecnico</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td>
                    <table id="firmaAceptarCondiciones">
                        <tbody>
                            <tr>
                                <td>_________________________________________________</td>
                            </tr>
                            <tr>
                                <td>Autorización Cliente<br/>Nombre, puesto y firma</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>