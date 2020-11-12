<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>

<body>
    <table class="page_header" style="width:100%; height: 120px; font-size:10px">
        <tr style="vertical-align: top">
            <td style="width:100%">
                <img src="{{ asset('img/cotizacion_cab.png') }}" style="width: 100%;">
            </td>
        </tr>
    </table>
    <table style="width:100%;border:2px solid #0095d9;border-radius: 15px; padding: 10px; font-size:10px">
		<tr style="vertical-align: top">
		    <td style="width:70%">
				<span style="color:#003177"><b>{{$data['has_cliente']['razon_social']}}</b></span><br>
				<span style="color:#003177">{{$data['has_cliente']['direccion_fiscal']}}</span><br>
				<span style="color:#003177">{{$data['has_cliente']['nombre_completo']}}</span><br>
				<span style="color:#003177"><b>Contacto:</b> {{$data['has_cliente']['nombre_completo']}}</span><br>
				<span style="color:#003177"><b>Teléfono:</b> {{$data['has_cliente']['celular_contacto']}} </span><br>
                <span style="color:#003177"><b>Correo:</b> {{$data['has_cliente']['correo_contacto']}}</span>
                @if (count($data['has_cliente']['has_sucursal']) > 0 )
                <span style="color:#003177"> <p> Sucursal:</p>{{$data['has_cliente']['has_sucursal'][0]['nombre_sucursal'] }} </span>
                <span style="color:#003177"> <p> Direccion: sucursal:</p>{{ $data['has_cliente']['has_sucursal'][0]['direccion_sucursal'] }} </span>
                <span style="color:#003177"> <p> Telefono: sucursal:</p>{{ $data['has_cliente']['has_sucursal'][0]['telefono'] }} </span>
                @endif
		    </td>
		    <td style="width:30%;text-align:right;">
		    	<span ><b>Folio:</b></span><br>
				<span ><b>Fecha:</b></span><br>
				<span ><b>T.Entrega:</b></span><br>
				<span ><b>Moneda:</b></span><br>
				<span ><b>Servicio:</b></span><br>
				<span ><b>Condicion:</b></span>
		    </td>
		    <td style="width:30%">
		    	<span style=" color:red;">{{$data['id']}}</span><br>
				<span style=" color:#003177">{{substr($data['created_at'], 0, 10)}}</span><br>
				<span style=" color:#003177">{{$data['has_tiempo_de_entrega']['nombre']}}</span><br>
				<span style=" color:#003177">{{$data['has_moneda']['clave']}}</span><br>
				<span style=" color:#003177">{{$data['tipo_de_servicio']}}</span><br>
				<span style=" color:#003177">{{$data['condicion']}}</span>
		    </td>
		</tr>
    </table>
    <table style="width:100%;border:2px solid #0095d9;border-radius:15px; font-size:10px" cellspacing=0>
        <tr bgcolor="#0095d9" border-radius="15px">
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Cant</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Serv</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Instrumento</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Marca</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Modelo</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Serie</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Alcance</th>
			<th style="color:#fff; height:20px; padding: 5px;  text-align:center">ID</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Acreditación</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:right" >Precio U</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:right" >Importe</th>
        </tr>
   
        @foreach($data['has_partidas'] as $item)
        <tr >
            <td class="top"      style="border:1px solid #0095d9;  text-align: center">{{$item['cantidad']}}</td>
            <td class="top left"  style="border:1px solid #0095d9;  text-align: center">{{substr($item['servicio'], 0, 1)}}</td>
            <td class="top left"  style="border:1px solid #0095d9;  text-align: left">  {{$item['has_intrumento']['nombre']}}</td>
            <td class="top left"  style="border:1px solid #0095d9;  text-align: center">{{$item['marca']}}</td>
            <td class="top left"  style="border:1px solid #0095d9;  text-align: center">{{$item['modelo']}}</td>
            <td class="top left"  style="border:1px solid #0095d9;  text-align: center">{{$item['serie']}}</td>
            <td class="top left"  style="border:1px solid #0095d9;  text-align: center">{{$item['has_intrumento']['alcance']}}</td>
			<td class="top left"  style="border:1px solid #0095d9;  text-align: center">{{$item['identificacion']}}</td>
			<td class="top left"  style="border:1px solid #0095d9;  text-align: center">{{$item['has_intrumento']['has_acreditacion']['nombre']}}</td>
            <td class="top left"  style="border:1px solid #0095d9;  text-align: right"> {{$data['has_moneda']['clave']}} {{number_format($item['has_intrumento']['precio_venta'], 2, ',', '.')}}</td>
			<td class="top left"  style="border:1px solid #0095d9;  text-align: right"> {{$data['has_moneda']['clave']}} {{number_format($item['importe'], 2, ',', '.')}}</td>
        </tr>
        @endforeach
		

        <tr style="vertical-align: top">
            <td colspan="11" style="text-align:right">
                <b>SubTotal</b>
            </td>
            <td style="text-align:right;padding: 5px; ">
            {{$data['has_moneda']['clave']}} {{number_format($data['sub_total'], 2, ',', '.')}}
            </td>
        </tr>
        <tr style="vertical-align: top">
            <td colspan="11" style="text-align:center">

            </td>
            <td colspan="11" style="text-align:right">
                <b>I.V.A. </b>
            </td>
            <td style="text-align:right;padding: 5px; ">
            {{$data['has_moneda']['clave']}} {{number_format($data['iva'], 2, ',', '.')}}
            </td>
        </tr>
        <tr style="vertical-align: top">
            <td colspan="11" style="text-align:right">
                <b>Total</b>
            </td>
            <td style="text-align:right;padding: 5px; ">
            {{$data['has_moneda']['clave']}} {{number_format($data['total'], 2, ',', '.')}}
            </td>
        </tr>
		<tr style="vertical-align: top">
			<td colspan="11"  style="text-align:center">
            {{$spell}}
			</td>
		</tr>
 	</table>
</body>

</html>