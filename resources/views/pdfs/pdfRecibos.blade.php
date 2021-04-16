<!-- {{--<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

</head>
<body>
    <table class="page_header" style="width:100%;">
        <tr style="vertical-align: top">
            <td style="width:100%">
            <img src="img/recibo_cab.png" style="width: 100%;">
            </td>
        </tr>
    </table>

    <table style="width:100%;border:2px solid #0095d9;border-radius: 15px; padding: 10px; margin-top: 10px">
        <tr style="vertical-align: top">
            <td style="width:76%">
                <span style="font-size:10pt"><b>{{$data['has_cotizaicon']['has_cliente']['datos_fisicos_requeremientos_facturacion_razon_social']}}</b></span><br>
                <span style="color:#003177">{{$data['has_cotizaicon']['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle']}}</span><br>
                <span style="color:#003177"><b>Usuario:</b>{{$data['has_cotizaicon']['has_cliente']['contacto_adicionales_compra']}}</span><br>
                <span style="color:#003177"><b>Teléfono:</b> {{$data['has_cotizaicon']['has_cliente']['contacto_adicionales_compra_telf']}}</span><br>
                <span style="color:#003177"><b>Correo:</b>{{$data['has_cotizaicon']['has_cliente']['contacto_adicionales_compra_correo']}}</span>
            </td>
            <td style="width:12%;text-align:right;">
                <span style="font-size:10pt;"><b>Folio:</b></span><br>
                <span style="font-size:10pt;"><b>Fecha:</b></span>
            </td>
            <td style="width:12%">
                <span style="font-size:10pt; color:red;">{{$data['has_cotizaicon']['id']}}</span><br>
                <span style="font-size:10pt; color:#003177">{{substr($data['created_at'], 0, 10)}}</span>
            </td>
        </tr>
    </table>
    <table style="width:100%;border:2px solid #0095d9; margin-top: 10px" cellspacing=0>
        <tr bgcolor="#0095d9" style="font-size:8pt">
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Cant</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Serv</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Informe - Instrumento</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Magnitud</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Marca</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Modelo</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Serie</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Identificación</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Tipo</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Vigencia</th>
        </tr>
        @foreach($data['has_partidas'] as $item)
        <tr style="font-size:8pt">
            <td class="top" style="border:1px solid #0095d9; text-align: center">{{$item['cantidad']}}</td>
            <td class="top left" style="border:1px solid #0095d9; text-align: center">{{ substr($item['servicio'], 0, 1)}}</td>
            <td class="top left" style="border:1px solid #0095d9; text-align: left"> {{$item['informe_id']}} - {{$item['has_intrumento']['nombre']}}</td>
            <td class="top left" style="border:1px solid #0095d9; text-align: left"> {{$item['has_intrumento']['has_magnitud']['nombre']}}</td>
            <td class="top left" style="border:1px solid #0095d9; text-align: left">{{$item['marca']}}</td>
            <td class="top left" style="border:1px solid #0095d9; text-align: left">{{$item['modelo']}}</td>
            <td class="top left" style="border:1px solid #0095d9; text-align: left">{{$item['serie']}}</td>
            <td class="top left" style="border:1px solid #0095d9; text-align: left">{{$item['identificacion']}}</td>
            <td class="top left" style="border:1px solid #0095d9; text-align: left">{{$item['tipo']}}</td>
            <td class="top left" style="border:1px solid #0095d9; text-align: left">{{$item['vigencia']}} Meses</td>
        </tr>
        @endforeach
    </table>
    <p style="text-align: justify">
 		Los informes de calibración serán emitidos con los datos proporcionados en el presente documento o documento (s) anexo(s) o con los datos proporcionados en la última calibración si la casilla Informe Ant. esta llena. Toda reimpresión de informe de calibración por causas atribuidas al cliente tendrá un cargo de $100.00 pesos M. N. ".$bussines_name." asumirá como abandono los instrumentos que no hayan sido reclamados en un plazo mayor de 60 días naturales posteriores a la fecha de recepción. En caso de robo o pérdida del equipo(s) del cliente mientras estos se encuentren en las instalaciones de ".$bussines_name." El cliente podrá reclamar el importe del mismo al precio del mercado menos la depreciación correspondiente. El tiempo de calibración acordado empieza a partir de que el cliente entrega el(los) equipos(s). En caso de requerir criterios de aceptación, tolerancia o alguna otra característica especial, favor de mencionarlo en el presente documento o anexo.
     </p>
     <table cellspacing="10" style="width: 100%; text-align: left; font-size: 11pt; margin-top:100px">
		<tr>
			<td style="width:50%;text-align: center;border-top:solid 1px">Cliente(Nombre y firma)</td>
			<td style="width:50%;text-align: center;border-top:solid 1px">Gerente técnico(firma)</td>
		</tr>
	</table>
</body>

</html>
--}} -->
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
        color: #4d99de;
        padding-right: 80px;
        font-size: 12px ;
    }
    .tdInfoNumberCotizacion {
        width: 33.3%%;
    }
    .cotWord {
        font-size: 20px;
        text-align: center;
        background-color: #4d99de;
        color: white;
        border-radius: 6px 6px 6px 6px;
        padding-top: 5px;
        padding-bottom: 5px;
        margin-left: 75px;
        margin-right: 75px;
    }

    .trCabecera td {
        float: left;
    }

    .cotNumber {
        border: 2px solid #4d99de;
        border-radius: 6px;
        margin-top: 5px;
        margin-right: 145px;
        margin-bottom: 0px;
        margin-left: 140px;
        text-align: left;
    }

    .tableCabecera {
        width: 100%;
        height: auto;
        font-size: 14px;
        border: 3px solid #4d99de;
        border-radius: 6px;
        text-align: right;
    }

    .tableCuerpoItems {
        width: 100%;
        border: 2px solid #4d99de;
        margin-top: 5px;
        font-size: 13px;
    }

    .tableCuerpoItems_head {
        background-color: #4d99de;
        color: white;
        font-size: 8px;
        font-size: 13px;
    }

    .tableCuerpoItems_head_tr {
        background-color: #4d99de;
        color: white;
        font-size: 13px;
    }

    .tableCuerpoItems_body_tr td {
        border: 1px solid #4d99de;
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
        border: 2px solid #4d99de;
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

    .page-break {
        page-break-after: always;
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
                <img src="{{ asset('img/login-logo.png') }}" style="width: 80%;">
            </td>
            <td class="tdInfoEmpresa">
                <span>
                    Accredian, S. DE R.L. DE C.V.<br />
                    RFC: ACC1905026P3<br />
                    Domicilio Fiscal: Calle Monclova 213,
                    Col. Miravista Gral. Escobedo, N.L. MX CP. 66050<br />
                    Sucursal: Calle 24 #600 Resid. Las Puentes 3er sector,
                    San Nicolas de los Garza, N.L. MX CP. 66460
                </span>
            </td>
            <td class="tdInfoNumberCotizacion">
                <div>
                    <div class="cotWord">ORDEN DE SERVICIO</div>
                    {{--<div class="cotNumber">#{{$data['id']}}</div> --}}
                    <div class="cotNumber">#99999999</div>
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
            @foreach($data['has_partidas'] as $item)
            <tr class="tableCuerpoItems_body_tr">
                <td>{{$item['id']}}</td>
                <td>{{$item['cantidad']}}</td>
                <td>{{substr($item['servicio'], 0, 1)}}</td>
                <td>{{$item['informe_id']}} - {{$item['has_intrumento']['nombre']}}</td>
                <td>{{$item['marca']}}</td>
                <td>{{$item['modelo']}}</td>
                <td>{{$item['serie']}}</td>
                <td>{{$item['identificacion']}}</td>
                <td></td>
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
                                <td></td>
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