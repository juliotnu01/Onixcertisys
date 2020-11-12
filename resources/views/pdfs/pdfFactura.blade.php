<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>

<body>
    <table class="page_header" style="width:100%;">
        <tr style="vertical-align: top">
            <td style="width:100%">
                <img src="{{ asset('img/factura_cab.png')}}" style="width: 100%;">
            </td>
        </tr>
    </table>
    <table style="width:100%;border:2px solid #0095d9;border-radius:15px; padding:5px; font-size: 10px">
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

    <table style="width:100%;border:2px solid #0095d9;border-radius:15px; padding: 0px; font-size: 10px" cellspacing=0>
        <tr bgcolor="#0095d9">
            <th style="color:#fff; height:10px; border-radius:14px 0px 0px 0px; padding: 5px; width: 14%; text-align:center">Clave SAT</th>
            <th style="color:#fff; height:10px; padding: 5px; width: 14%; text-align:center">Cantidad</th>
            <th style="color:#fff; height:10px; padding: 5px; width: 14%; text-align:center">Unidad</th>
            <th style="color:#fff; height:10px; padding: 5px; width: 30%; text-align:left">Descripción</th>
            <th style="color:#fff; height:10px; padding: 5px; width: 14%; text-align:right">Precio U</th>
            <th style="color:#fff; height:10px; border-radius:0px 14px 0px 0px; padding: 5px; width: 14%; text-align:right">Importe</th>
        </tr>
        
        @foreach($dataFactura as $value)
        <tr>
            <td colspan="6">
                <strong> Orden de servicio :</strong> {{$value['id']}} <strong> Fecha: </strong> {{substr($value['created_at'], 0, 19)}}
            </td>
        </tr>
        @foreach($value['has_partidas'] as $value2)
        <tr style="font-size:8pt">
            <td style="border:1px solid #0095d9; width: 14%; padding: 5px; text-align: center"></td>
            <td style="border:1px solid #0095d9; width: 14%; padding: 5px; text-align: center">1</td>
            <td style="border:1px solid #0095d9; width: 14%; padding: 5px; text-align: center">{{$value2['unidad']}}</td>
            <td style="border:1px solid #0095d9; width: 14%; padding: 5px; text-align: left">
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
            <td style="border:1px solid #0095d9; width: 14%; padding: 5px; text-align: right">  {{$request['cliente']['has_moneda']['clave']}} @money($value2['has_intrumento']['precio_venta'])</td>
            <td style="border:1px solid #0095d9; width: 14%; padding: 5px; text-align: right">{{$request['cliente']['has_moneda']['clave']}} @money($value2['importe'])</td>
        </tr>
        @endforeach
        @endforeach
        <tr style="vertical-align: top">
            <td class="" colspan=5 style="text-align:right">
                <b>SubTotal</b>
            </td>
            <td class="" style="text-align:right;padding: 5px; ">
            {{$request['cliente']['has_moneda']['clave']}} @money($request['subtotal'])
            </td>
        </tr>
        <tr style="vertical-align: top">
            <td class="" colspan=4 style="text-align:center">

            </td>
            <td class="" colspan=1 style="text-align:right">
                <b>I.V.A. <small>({{$cliente['iva']}}%)</small></b>
            </td>
            <td class="" style="text-align:right;padding: 5px; ">
            {{$request['cliente']['has_moneda']['clave']}} @money($request['iva'])
            </td>
        </tr>
        <tr style="vertical-align: top">
            <td class="" colspan=5 style="text-align:right">
                <b>Total</b>
            </td>
            <td class="" style="text-align:right;padding: 5px; ">
            {{$request['cliente']['has_moneda']['clave']}} @money($request['subtotal'])
            </td>
        </tr>
    </table>
    <table style="width:100%; padding: 5px; font-size: 10px" cellspacing=0>
		<tr style="vertical-align: top">
		    <td style="width:13%">
				<span style=""><b>Moneda:</b></span><br>
				<span style=""><b>Forma de Pago:</b></span><br>
				<span style=""><b>Método de Pago:</b></span>
		    </td>
		    <td style="width:42%">
				<span style="">{{$request['cliente']['has_moneda']['nombre_moneda']}}</span><br>
				<span style="">{{$request['cliente']['has_cliente']['has_condicion_de_pago']['nombre']}}</span><br>
				<span style="">{{$request['cliente']['has_cliente']['has_metodo_de_pago']['nombre']}}</span>
		    </td>
		    <td style="width:18%">
				<span style=""><b>RFC del proveedor SAT:</b></span><br>
				<span style=""><b>Serie certificado SAT:</b></span><br>
				<span style=""><b>Fecha de certificación:</b></span>
		    </td>
		    <td style="width:28%">
				<span style="">SAT970701NN3</span><br>
				<span style=""></span><br>
				<span style=""></span>
		    </td>
		</tr>
	</table>

    <br />
    <br />
    <img src="data:image/png;base64, {!! $qrcode !!}">
</body>

</html>