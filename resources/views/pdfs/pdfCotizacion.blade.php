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
        font-size: 8px;
        width: 20%;
        text-align: center;
    }
    .tdInfoNumberCotizacion{
        font-size: 8px;
        width: 20%;
        text-align: center;
    }
     .cotWord{
        font-size: 20px;
        width: 45%;
        text-align: center;
        background-color: blue;
        border-radius: 10%;
        padding: 1%;
        color: white
    }
    .trCabecera{
        background-color:#CCC;
		width:100%;
		height:100px
    }
    .trCabecera td{
		float:left;
    }
</style>
<body>
    <table>
        <tr>
            <td class="tdLogo" >
                {{--<img src="{{ asset('img/login-logo.png') }}" style="width: 100%;">--}}
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
                    <div class="cotWord">cotizacion</div>
                    <div>#99.999.999.99</div>
                </div>
            </td>
        </tr>
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