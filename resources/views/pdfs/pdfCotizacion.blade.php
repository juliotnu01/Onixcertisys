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
            border-collapse: collapse;
            border: none;
            font-size: 9px;
        }

        td,
        th {
            border: 1px solid #cecece;
            text-align: left;
            padding: 8px;
            border: none;
        }

        tr:nth-child(even) {
            background-color: #cecece;
            border: none;
            text-align: center;
        }

        #cabecera_logo {
            background: #cecece;
            max-height: 300px;
        }

        #cabecera_logo h2 {
            color: white;
            float: right;
            font-size: 30px;
        }
    </style>
</head>

<body>
    <table class="page_header" style="width:100%; height: 120px;">
        <tr style="vertical-align: top">
            <td style="width:100%">
                <img src=" {{ asset('img/cotizacion_cab.png')}} " style="width: 100%;">
            </td>
        </tr>
    </table>
    <table style="width:100%;border:2px solid #0095d9;border-radius: 15px; padding: 10px;">
		<tr style="vertical-align: top">
		    <td style="width:76%">
				<span style="font-size:11pt"><b>{{$data['has_cliente']['razon_social']}}</b></span><br>
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
		    <td style="width:12%;text-align:right;">
		    	<span style="font-size:11pt;"><b>Folio:</b></span><br>
				<span style="font-size:11pt;"><b>Fecha:</b></span><br>
				<span style="font-size:11pt;"><b>T.Entrega:</b></span><br>
				<span style="font-size:11pt;"><b>Moneda:</b></span><br>
				<span style="font-size:11pt;"><b>Servicio:</b></span><br>
				<span style="font-size:11pt;"><b>Condicion:</b></span>
		    </td>
		    <td style="width:12%">
		    	<span style="font-size:11pt; color:red;">{{$data['id']}}</span><br>
				<span style="font-size:11pt; color:#003177">{{substr($data['created_at'], 0, 10)}}</span><br>
				<span style="font-size:11pt; color:#003177">{{$data['has_tiempo_de_entrega']['nombre']}}</span><br>
				<span style="font-size:11pt; color:#003177">{{$data['has_moneda']['clave']}}</span><br>
				<span style="font-size:11pt; color:#003177">{{$data['tipo_de_servicio']}}</span><br>
				<span style="font-size:11pt; color:#003177">{{$data['condicion']}}</span>
		    </td>
		</tr>
    </table>
    <table style="width:100%;border:2px solid #0095d9;border-radius:15px;" cellspacing=0>
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
        <tr style="font-size:8pt">
            <td class="top"      style="border:1px solid #0095d9; width:  5%; text-align: center">{{$item['cantidad']}}</td>
            <td class="top left" style="border:1px solid #0095d9; width:  5%; text-align: center">{{$item['servicio']}}</td>
            <td class="top left" style="border:1px solid #0095d9; width: 20%; text-align: left">  {{$item['has_intrumento']['nombre']}}</td>
            <td class="top left" style="border:1px solid #0095d9; width:  8%; text-align: center">{{$item['marca']}}</td>
            <td class="top left" style="border:1px solid #0095d9; width:  8%; text-align: center">{{$item['modelo']}}</td>
            <td class="top left" style="border:1px solid #0095d9; width:  8%; text-align: center">{{$item['serie']}}</td>
            <td class="top left" style="border:1px solid #0095d9; width:  8%; text-align: center">{{$item['has_intrumento']['alcance']}}</td>
			<td class="top left" style="border:1px solid #0095d9; width:  8%; text-align: center">{{$item['identificacion']}}</td>
			<td class="top left" style="border:1px solid #0095d9; width: 10%; text-align: center">{{$item['has_intrumento']['has_acreditacion']['nombre']}}</td>
            <td class="top left" style="border:1px solid #0095d9; width: 10%; text-align: right"> {{$data['has_moneda']['clave']}} {{number_format($item['has_intrumento']['precio_venta'], 2, ',', '.')}}</td>
			<td class="top left" style="border:1px solid #0095d9; width: 10%; text-align: right"> {{$data['has_moneda']['clave']}} {{number_format($item['importe'], 2, ',', '.')}}</td>
        </tr>
        @endforeach
		
		<tr style="vertical-align: top">
			<td class="" colspan=10 style="text-align:right">
				<b>SubTotal</b> 
			</td>
            <td class="" style="text-align:right">
            {{$data['has_moneda']['clave']}} {{number_format($data['sub_total'], 2, ',', '.')}}
			</td>
		</tr>
		<tr style="vertical-align: top">
			<td class="" colspan=10 style="text-align:right">
				<b>I.V.A. </b> 
			</td>
            <td class="" style="text-align:right">
            {{$data['has_moneda']['clave']}} {{number_format($data['iva'], 2, ',', '.')}}
			</td>
		</tr>
		<tr style="vertical-align: top">
			<td class="" colspan=10 style="text-align:right">
				<b>Total</b> 
			</td>
			<td class="" style="text-align:right">
            {{$data['has_moneda']['clave']}} {{number_format($data['total'], 2, ',', '.')}}
			</td>
		</tr>
		<tr style="vertical-align: top">
			<td class="" colspan=7 style="text-align:center">
            {{$spell}}
			</td>
		</tr>
 	</table>
</body>

</html>