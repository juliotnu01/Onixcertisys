<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style>
        body {
            width: 100%;
            padding-left: 0px;
        }

        table {
            font-family: arial, sans-serif;
            font-size: 12px;
            width: 100%;
            font-size: 10px;
        }

        .cabecera_factura {
            font-family: arial, sans-serif;
            font-size: 9px;
            width: 100%;
            background-color: #cecece;
        }

        .cabecera_factura .titulo_cabecera_factura {
            width: 100v;
            height: 50px;
            margin: 0;
            padding: 0;
        }

        .cabecera_factura .titulo_cabecera_factura span {
            font-family: arial, sans-serif;
            font-size: 20px;
            position: absolute;
            left: 70px;
            top: 16px;
            color: white;
        }

        .cabecera_factura .titulo_cabecera_factura img {
            position: absolute;
            left: 15px;
        }

        .cabecera_factura .info_empresa_cabecera_factura {
            font-family: arial, sans-serif;
            width: 50%;
            float: right;
            position: relative;
            transform: translate(0px, -50px);
            height: 50px;
            color: white;
            text-align: right;
            font-size: 8px;
        }

        .table_info_cliente {
            border: 1px solid;
        }

        #table_instrumento tbody tr {
            width: 100%;
            border-collapse: collapse;
        }

        #table_instrumento td,
        th {
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <table class="page_header" style="width:100%;">
		<tr style="vertical-align: top">
		    <td style="width:100%">
				<img src="{{ asset('img/factura_cab.png')}}" style="width: 100%;">
			 </td>
		</tr>
	</table>
    <table style="width:100%;border:2px solid #0095d9;border-radius:15px; padding:5px;">
		<tr style="vertical-align: top">
		    <td style="width:15%">
				<span style=""><b>Nombre Emisor:</b></span><br>
				<span style=""><b>R.F.C. Emisor:</b></span><br>
				<span style=""><b>Nombre Receptor:</b></span><br>
				<span style=""><b>R.F.C. Receptor:</b></span><br>
				<span style=""><b>Uso del CFDI:</b></span>
		    </td>
		    <td style="width:35%">
				<span style="">{{$empresa['nombre_empresa']}}</span><br>
				<span style="">{{$empresa['rfc']}}</span><br>
				<span style="">{{$cliente['razon_social']}}</span><br>
				<span style="">{{$cliente['rfc']}}</span><br>
				<span style=""></span>
		    </td>

		    <td style="width:20%;text-align:right;">
		    	<span style=""><b>Folio Fiscal:</b></span><br>
				<span style=""><b>Serie y Folio:</b></span><br>
				<span style=""><b>C.P. Fecha Emisión:</b></span><br>
				<span style=""><b>Tipo Comprobante:</b></span><br>
				<span style=""><b>Régimen Fiscal:</b></span><br>
				<span style=""><b>Órden de Compra:</b></span>
		    </td>
		    <td style="width:30%">
		    	<span style=""></span><br>
				<span style=""><b></b></span><br>
				<span style=""><b></b></span><br>
				<span style=""></span><br>
				<span style=""></span><br>
				<span style=""></span>
		    </td>
		</tr>
	</table>
    <table id="table_instrumento">
        <thead>
            <tr>
                <th>
                    <div style="text-align: center;">Clave SAT</div>
                </th>
                <th>
                    <div style="text-align: center;">Cantidad</div>
                </th>
                <th>
                    <div style="text-align: center;">Unidad</div>
                </th>
                <th>
                    <div style="text-align: center;">Descripción</div>
                </th>
                <th>
                    <div style="text-align: center;">Precio U.</div>
                </th>
                <th>
                    <div style="text-align: center;">Importe</div>
                </th>
            </tr>
        </thead>
        <tbody>
            @foreach($dataFactura as $value)
            <tr>
                <td colspan="6">
                    <strong> Orden de servicio :</strong> {{$value['id']}} <strong> Fecha: </strong> {{substr($value['created_at'], 0, 19)}}
                </td>
            </tr>
            @foreach($value['has_partidas'] as $value2)
            <tr>
                <td></td>
                <td>
                    <div style="text-align: center;">1</div>
                </td>
                <td>
                    <div style="text-align: center;">{{$value2['unidad']}}</div>
                </td>
                <td>
                    <div>
                        {{$value2['has_intrumento']['nombre']}}
                    </div>
                    <div>
                        ID:{{$value2['identificacion']}}
                    </div>
                    <div>
                        Marca:{{$value2['marca']}}
                    </div>
                    <div>
                        Modelo:{{$value2['modelo']}}
                    </div>
                    <div>
                        Serie:{{$value2['serie']}}
                    </div>
                    <div>
                </td>
                <td>
                    <div style="text-align: center;"> {{$request['cliente']['has_moneda']['clave']}} @money($value2['has_intrumento']['precio_venta'])</div>
                </td>
                <td>
                    <div style="text-align: center;"> {{$request['cliente']['has_moneda']['clave']}} @money($value2['importe'])</div>
                </td>
            </tr>
            @endforeach
            @endforeach
            <tr>
                <td colspan="6">

                    <div style="text-align: right;">
                        <strong> TOTAL </strong> {{$request['cliente']['has_moneda']['clave']}} @money($request['subtotal'])
                    </div>
                    <div style="text-align: right;">
                        <strong>I.V.A. <small>({{$cliente['iva']}}%)</small> </strong> {{$request['cliente']['has_moneda']['clave']}} @money($request['iva'])
                    </div>
                    <div style="text-align: right;">
                        <strong>TOTAL </strong> {{$request['cliente']['has_moneda']['clave']}} @money($request['total'])
                    </div>
                    <div style="text-align: center;">
                        {{$spell}}
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <strong>Moneda:</strong>{{$request['cliente']['has_moneda']['nombre_moneda']}}
                </td>
                <td colspan="3">
                    <strong>RFC del proveedor SAT:</strong>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <strong>Forma de pago:</strong>{{$request['cliente']['has_cliente']['has_condicion_de_pago']['nombre']}}
                </td>
                <td colspan="3">
                    <strong>Serie certificado SAT:</strong>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <strong>Metodo de pago:</strong>{{$request['cliente']['has_cliente']['has_metodo_de_pago']['nombre']}}
                </td>
                <td colspan="3">
                    <strong>Fecha de certificación:</strong>
                </td>
            </tr>
            <tr>
                <td colspan="6">
                    <strong>Sello digital del CFDI:</strong>
                </td>
            </tr>
            <tr>
                <td colspan="6">
                    <strong>Sello digital del SAT:</strong>
                </td>
            </tr>
            <tr>
                <td colspan="6">
                    <strong>Nota:</strong>{{$request['nota']}}
                </td>
            </tr>
        </tbody>
    </table>
    <br/>
    <br/>
    <img src="data:image/png;base64, {!! $qrcode !!}">
</body>

</html>