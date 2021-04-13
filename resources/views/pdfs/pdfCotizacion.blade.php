<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<style>
    .tdLogo{
        width: 40%;
    }
    .tdInfoEmpresa{
        font-size: 8px;
        width: 20%;
        text-align: center;
    }
    .tdInfoEmpresaContactos{
        font-size: 10px;
        width: 20%;
        text-align: center;
        color: #4d99de;
    }
    .tdInfoNumberCotizacion{
        width: 10%;
    }
    .cotWord{
        font-size: 20px;
        text-align: center;
        background-color: #4d99de;
        border-radius: 10%;
        color: white
    }
    .trCabecera td{
		float:left;
    }
    .cotNumber{
        border: 2px solid #4d99de;
        border-radius: 15%;
        margin-top: 5px;
        text-align: center;
    }
    .tableCabecera{
        width: 100%;
        height: auto;
        font-size: 10px;
        border: 2px solid #4d99de;
        border-radius: 5px 5px 5px 5px;
        text-align: right;
    }
    .tableCuerpoItems{
        width: 100%;
        border: 2px solid #4d99de;
        margin-top: 5px;
    }
    .tableCuerpoItems_head{
        background-color: #4d99de;
        color: white;
        font-size: 8px;
    }
    .tableCuerpoItems_head_tr{
        background-color: #4d99de;
        color: white;
        font-size: 10px;
    }
    .tableCuerpoItems_body_tr td{
        border: 1px solid #4d99de;
        text-align: center;
        font-size: 10px;
    }
    .tableCuerpoItems_footer_tr td{
        text-align: left;
        font-size: 12px;
    }
    .tableNota{
        width: 100%;
        border: 2px solid #4d99de;
        margin-top: 5px;
        border-radius: 5px 5px 5px 5px;
        font-size: 13px;
    }
    .tableDatosBancarios{
        width: 100%;
        font-size: 10px;
        text-align: center;
        margin-top: 5px;
    }
    #PagoMexico{
        width: 45%;
        margin: 5%;
        font-size: 10px;
        text-align: center;
    }
    #pagoEEUU{
        width: 45%;
        margin: 5%;
        font-size: 10px;
        text-align: center;
    }
    #pagoEEUU tr td{
        border: 1px solid #000;
        padding: 5px;
    }
    #pagoEEUU tr th{
        border: 1px solid #000;
    }

    #PagoMexico tr td {
        border: 1px solid #000;
        padding: 5px;
    }
    #PagoMexico tr th {
        border: 1px solid #000;
    }
    .tablefirma{
        width: 50%;
        text-align: center;
    }
</style>
<body>
    <table>
        <tr>
            <td class="tdLogo" >
                <img src="{{ asset('img/login-logo.png') }}" style="width: 100%;">
            </td>
            <td class="tdInfoEmpresa">
                <span>
                Accredian, S. DE R.L. DE C.V.<br/>
                RFC: ACC1905026P3<br/>
                Domicilio Fiscal: Calle Monclova 213, 
                Col. Miravista Gral. Escobedo, N.L. MX CP. 66050<br/>
                Sucursal: Calle 24 #600 Resid. Las Puentes 3er sector, 
                San Nicolas de los Garza, N.L. MX CP. 66460
                </span>
            </td>
            <td class="tdInfoEmpresaContactos">
                <span>
                    Tel.  813-186-4994<br/>
                    813-186-4995<br/>
                    818-748-0707<br/>
                    www.accredian.com
                </span>
            </td>
            <td class="tdInfoNumberCotizacion" >
                <div>
                    <div class="cotWord">COTIZACIÓN</div>
                    <div class="cotNumber" >#99.999.999.99</div>
                </div>
            </td>
        </tr>
    </table>
    <table class="tableCabecera">
        <tbody>
            <tr>
                <td style="width: 5%;" >Cliente:</td>
                <td style="width: 5%;"  colspan="3" ></td>
                <td style="width: 5%;" >Fecha:</td>
                <td style="width: 5%;" colspan="3"></td>
            </tr>
            <tr>
                <td style="width: 5%;" >Dirección Fiscal:</td>
                <td style="width: 5%;"  colspan="3"></td>
                <td style="width: 5%;" >Moneda:</td>
                <td style="width: 5%;" colspan="3"></td>
            </tr>
            <tr>
                <td style="width: 5%;" >Dirección Sucursal:</td>
                <td style="width: 5%;"  colspan="3"></td>
                <td style="width: 5%;" >Tipo de Servicio:</td>
                <td style="width: 5%;" colspan="3"></td>
            </tr>
            <tr>
                <td style="width: 5%;" >Contacto:</td>
                <td style="width: 5%;"  colspan="3"></td>
                <td style="width: 5%;" >Tiempo Entrega:</td>
                <td style="width: 5%;" colspan="3"></td>
            </tr>
            <tr>
                <td style="width: 5%;" >Email:</td>
                <td style="width: 5%;" ></td>
                <td style="width: 5%;" >Teléfono:</td>
                <td style="width: 5%;"   ></td>
                <td style="width: 5%;" >Codiciones de pago:</td>
                <td style="width: 5%;"  ></td>
                <td style="width: 5%;" >Dias:</td>
                <td style="width: 5%;" ></td>
            </tr>
        </tbody>
    </table>
    <table class="tableCuerpoItems" cellspacing=0>
        <thead class="tableCuerpoItems_head" >
            <tr class="tableCuerpoItems_head_tr">
                <th>Part</th>
                <th>Cant</th>
                <th>Serv</th>
                <th>Instrumento</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Serie</th>
                <th>Alcance</th>
                <th>ID</th>
                <th>Acreditación</th>
                <th>Vigencia</th>
                <th>Precio Unitario</th>
                <th>Importe</th>
            </tr>
        </thead>
        <tbody>
            <tr class="tableCuerpoItems_body_tr" >
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="tableCuerpoItems_footer_tr" >
                <td></td>
                <td></td>
                <td></td>
                <td colspan="6" style="color: #4d99de; font-weight: bold;" >Importe con letra (Novecientos noventa y nueve millones novecientos noventa y nuevemil noveciento noventa y nueve)</td> <!--//number letter-->
                <td></td>
                <td></td>
                <td style="text-align: right;" >SubTotal:</td>
                <td></td>
            </tr>
            <tr class="tableCuerpoItems_footer_tr" >
                <td></td>
                <td></td>
                <td></td>
                <td colspan="6"></td>
                <td></td>
                <td></td>
                <td style="text-align: right;" >I.V.A. <small>(16%)</small>:</td>
                <td></td>
            </tr>
            <tr class="tableCuerpoItems_footer_tr" >
                <td colspan="6"><small>Serv: &nbsp; &nbsp; &nbsp;    C  Calibración   &nbsp; &nbsp; &nbsp;R  Reparación    &nbsp; &nbsp; &nbsp;M  Mantenimiento &nbsp; &nbsp; &nbsp;V  Venta de Equipo</small></td>
                <td></td>
                <td></td>
                <td ></td>
                <td></td>
                <td></td>
                <td style="text-align: right;" >Total:</td>
                <td></td>
            </tr>
        </tfoot>
    </table>
    <table class="tableNota" >
        <tbody>
            <tr>
                <td> NOTAS:</td>
                <td> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia magni dicta minima soluta, laboriosam unde est mollitia quisquam aperiam dolor consequuntur sapiente facere veritatis eius, corrupti quo minus veniam.</td>
            </tr>
        </tbody>
    </table>
    <table class="tableDatosBancarios" >
        <tbody>
            <tr>
                <td id="PagoMexico">
                    <table cellspacing=0>
                        <thead >
                            <tr>
                                <td colspan="5" style="background-color: #cecece; font-size: 13px; font-weight: bold; " >Para pagos desde México</td>
                            </tr>
                            <tr style="background-color: #cecece; ">
                                <th>Banco</th>
                                <th>Moneda</th>
                                <th>Sucursal</th>
                                <th>Cuenta</th>
                                <th>CLABE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BBVA Bancomer</td>
                                <td>Pesos</td>
                                <td>5357</td>
                                <td>0113689131</td>
                                <td>012072001136891315</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td id="pagoEEUU">
                <table cellspacing=0>
                        <thead >
                            <tr >
                                <td colspan="6" style="background-color: #cecece; font-size: 13px; font-weight: bold; "> Para pagos en USD desde USA</td>
                            </tr>
                            <tr style="background-color: #cecece; ">
                                <th>Banco</th>
                                <th>Moneda</th>
                                <th>Cuenta</th>
                                <th>Routing</th>
                                <th>Beneficiario</th>
                                <th>Referencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bank of New York Mellon</td>
                                <td>Dolares</td>
                                <td>8901003158</td>
                                <td>021000018</td>
                                <td>Accredian S DE RL DE CV</td>
                                <td>00003236114</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table class="tablefirma" >
        <tbody>
            <tr>
                <td>__________________________________</td>
            </tr>
            <tr>
                <td>Ejecutivo(a) de Ventas</td>
            </tr>
        </tbody>
    </table>

    {{--<table style="width:100%;border:2px solid #0095d9;border-radius: 15px;  font-size:10px">
        <tr style="vertical-align: top">
            <td style="width:70%">
                <span style="color:#003177"><b>{{$data['has_cliente']['datos_fisicos_requeremientos_facturacion_razon_social']}}</b></span><br>
                <span style="color:#003177">{{$data['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle']}}
                    {{$data['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_numero']}}
                    {{$data['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia']}}
                    {{$data['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad']}}
                    {{$data['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado']}}
                </span><br>
                <span style="color:#003177"><b>Contacto:</b> {{$data['has_cliente']['contacto_adicionales_compra']}}</span><br>
                <span style="color:#003177"><b>Teléfono:</b> {{$data['has_cliente']['contacto_adicionales_compra_telf']}} </span><br>
                <span style="color:#003177"><b>Correo:</b> {{$data['has_cliente']['contacto_adicionales_compra_correo']}}</span><br>
                @if(isset($data['has_cliente']['has_sucursal']))
                @foreach( $data['has_cliente']['has_sucursal'] as $key => $value )
                @if($data['sucursal_cliente_id'] === $value['id'])
                <span style="color:#003177"><b>Sucursal:</b> {{$value['nombre_sucursal']}}</span><br>
                <span style="color:#003177"><b>Direccion Sucursal:</b> {{$value['direccion_sucursal']}}</span><br>
                <span style="color:#003177"><b>Telefono sucursal:</b> {{$value['telefono']}}</span><br>
                @endif
                @endforeach
                @endif
            </td>
            <td style="width:30%;text-align:right;">
                <span><b>Folio:</b></span><br>
                <span><b>Fecha:</b></span><br>
                <span><b>T.Entrega:</b></span><br>
                <span><b>Moneda:</b></span><br>
                <span><b>Servicio:</b></span><br>
                <span><b>Condicion:</b></span>
            </td>
            <td style="width:30%">
                <span style=" color:red;">{{$data['id']}}</span><br>
                <span style=" color:#003177">{{substr($data['created_at'], 0, 10)}}</span><br>
                <span style=" color:#003177">{{$data['has_tiempo_de_entrega']['nombre']}}</span><br>
                <span style=" color:#003177">{{$data['has_moneda']['clave']}}</span><br>
                <span style=" color:#003177">{{$data['tipo_de_servicio']}}</span><br>
                <span style=" color:#003177">{{$data['condicion']}}</span>
                <span style=" color:#003177"></span>
            </td>
        </tr>
    </table>
    <table style="width:100%;border:2px solid #0095d9;border-radius:15px; font-size:10px" cellspacing=0>
        <tr bgcolor="#0095d9" border-radius="15px">
            <th style="color:#fff; height:20px;   text-align:center">Cant</th>
            <th style="color:#fff; height:20px;   text-align:center">Serv</th>
            <th style="color:#fff; height:20px;   text-align:center">Instrumento</th>
            <th style="color:#fff; height:20px;   text-align:center">Marca</th>
            <th style="color:#fff; height:20px;   text-align:center">Modelo</th>
            <th style="color:#fff; height:20px;   text-align:center">Serie</th>
            <th style="color:#fff; height:20px;   text-align:center">Alcance</th>
            <th style="color:#fff; height:20px;   text-align:center">ID</th>
            <th style="color:#fff; height:20px;   text-align:center">Acreditación</th>
            <th style="color:#fff; height:20px;   text-align:right">Precio U</th>
            <th style="color:#fff; height:20px;   text-align:right">Importe</th>
        </tr>

        @foreach($data['has_partidas'] as $item)
        <tr>
            <td class="top" style="border:1px solid #0095d9;   text-align: center">{{$item['cantidad']}}</td>
            <td class="top left" style="border:1px solid #0095d9;   text-align: center">{{substr($item['servicio'], 0, 1)}}</td>
            <td class="top left" style="border:1px solid #0095d9;   text-align: left"> {{$item['has_intrumento']['nombre']}}</td>
            <td class="top left" style="border:1px solid #0095d9;   text-align: center">{{$item['marca']}}</td>
            <td class="top left" style="border:1px solid #0095d9;   text-align: center">{{$item['modelo']}}</td>
            <td class="top left" style="border:1px solid #0095d9;   text-align: center">{{$item['serie']}}</td>
            <td class="top left" style="border:1px solid #0095d9;   text-align: center">{{$item['has_intrumento']['alcance']}}</td>
            <td class="top left" style="border:1px solid #0095d9;   text-align: center">{{$item['identificacion']}}</td>
            <td class="top left" style="border:1px solid #0095d9;   text-align: center">{{$item['has_intrumento']['has_acreditacion']['nombre']}}</td>
            <td class="top left" style="border:1px solid #0095d9;   text-align: right"> {{$data['has_moneda']['clave']}} {{number_format($item['has_intrumento']['precio_venta'], 2, ',', '.')}}</td>
            <td class="top left" style="border:1px solid #0095d9;   text-align: right"> {{$data['has_moneda']['clave']}} {{number_format($item['importe'], 2, ',', '.')}}</td>
        </tr>
        @endforeach


        <tr style="vertical-align: top">
            <td colspan="9" style="text-align:right">
                <b>SubTotal</b>
            </td>
            <td style="text-align:right; " colspan="2">
                {{$data['has_moneda']['clave']}} {{number_format($data['sub_total'], 2, ',', '.')}}
            </td>
        </tr>
        <tr style="vertical-align: top">
            <td colspan="9" style="text-align:right">
                <b>I.V.A. </b>
            </td>
            <td style="text-align:right; " colspan="2">
                {{$data['has_moneda']['clave']}} {{number_format($data['iva'], 2, ',', '.')}}
            </td>
        </tr>
        <tr style="vertical-align: top">
            <td colspan="9" style="text-align:right">
                <b>Total</b>
            </td>
            <td style="text-align:right; " colspan="2">
                {{$data['has_moneda']['clave']}} {{number_format($data['total'], 2, ',', '.')}}
            </td>
        </tr>
        <tr style="vertical-align: top">
            <td colspan="11" style="text-align:center">
                {{$spell}}
            </td>
        </tr>
    </table>
    <table cellspacing="10" style="width: 100%; text-align: left; font-size: 11pt">
        <tr>
            <td style="width:100%;text-align: justify;border-top:solid 0px">
                <b><strong>Nota para la cotizacion:</strong> </b>{{$data['nota_para_la_cotizacion']}}
            </td>
        </tr>
    </table>
    <table cellspacing="10" style="width: 100%; text-align: left; font-size: 11pt; margin-top: 100px">
        <tr>
            <td style="width:33%;text-align: center;border-top:solid 1px">
                <b>Ejecutivo de ventas</b>
            </td>
            <td style="width:33%;text-align: center;border-top:solid 1px">
                <b>Autorización Cliente</b>
            </td>
        </tr>
    </table>--}}
</body>

</html>