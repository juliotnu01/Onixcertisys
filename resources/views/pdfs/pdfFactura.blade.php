<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>

<body>
    <table class="page_header" >
        <tr style="vertical-align: top">
            <td >
            {{--<img src="{{ asset('img/factura_cab.png')}}" alt="logo de la empresa" width="100%" />--}}
            </td>
        </tr>
    </table>
    <table style="width:100%;border:2px solid #0095d9;border-radius:15px; padding:5px; font-size: 10px">
        <tr style="vertical-align: top">
            <td style="width:15%">
            <div><span><b>Nombre Emisor:</b></span></div>
            <div><span><b>R.F.C. Emisor:</b></span></div>
            <div><span><b>Nombre Receptor:</b></span></div>
            <div><span><b>R.F.C. Receptor:</b></span></div>
            <div><span><b>Uso del CFDI:</b></span></div>

            </td>
            <td style="width:50%">
                <div><span>{{$empresa['nombre_empresa']}}</span></div>
                <div><span>{{$empresa['rfc']}}</span></div>
                <div><span><small>{{$cliente['razon_social']}}</small></span></div>
                <div><span>{{$cliente['rfc']}}</span></div>
                <div><span>{{$cliente['cfdi']}}</span></div>
                
            </td>

            <td style="width:15%;text-align:right;">
                <span><b>Folio Fiscal:</b></span><br>
                <span><b>Serie y Folio:</b></span><br>
                <span><b>C.P. Fecha Emisión:</b></span><br>
                <span><b>Tipo Comprobante:</b></span><br>
                <span><b>Régimen Fiscal:</b></span><br>
                <span><b>Órden de Compra:</b></span>
            </td>
            <td style="width:20%">
                <span></span><br>
                <span></span><br>
                <span>{{$factura['created_at']}}</span><br>
                <span>Ingreso</span><br>
                <span>General de personal Morales</span><br>
                <span></span>
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
            {{$request['cliente']['has_moneda']['clave']}} @money($request['total'])
            </td>
        </tr>
    </table>
    <table style="width:100%; padding: 5px; font-size: 10px" cellspacing=0>
		<tr style="vertical-align: top">
		    <td style="width:13%">
				<span><b>Moneda:</b></span><br>
				<span><b>Forma de Pago:</b></span><br>
				<span><b>Método de Pago:</b></span>
		    </td>
		    <td style="width:42%">
				<span>{{$request['cliente']['has_moneda']['nombre_moneda']}}</span><br>
				<span>{{$cliente['forma_de_pago']}}</span><br>
				<span>{{$cliente['metodo_de_pago']}}</span>
		    </td>
		    <td style="width:18%">
				<span><b>RFC del proveedor SAT:</b></span><br>
				<span><b>Serie certificado SAT:</b></span><br>
				<span><b>Fecha de certificación:</b></span>
		    </td>
		    <td style="width:28%">
				<span>SAT970701NN3</span><br>
				<span></span><br>
				<span></span>
		    </td>
        </tr>
        <tr>
            <td colspan="6">
                <strong>Nota:</strong>{{$request['nota']}}
            </td>
        </tr>
	</table>
    <table style="width:100%; padding: 5px;" cellspacing=0>
		<tr>
			<td style="width:15%;" rowspan=2><img src="data:image/png;base64, {!! $qrcode !!}"></td>
		</tr>
		<tr>
            
		</tr>
	</table>
</body>

</html>