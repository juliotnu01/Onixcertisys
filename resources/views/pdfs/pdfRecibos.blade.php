<!DOCTYPE html>
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
                <span style="font-size:10pt"><b>{{$data['has_cotizaicon']['has_cliente']['razon_social']}}</b></span><br>
                <span style="color:#003177">{{$data['has_cotizaicon']['has_cliente']['domicilio_fiscal']}}</span><br>
                <span style="color:#003177"><b>Usuario:</b>{{$data['has_cotizaicon']['has_cliente']['nombre_contacto']}}</span><br>
                <span style="color:#003177"><b>Teléfono:</b> {{$data['has_cotizaicon']['has_cliente']['telefono_contacto']}}</span><br>
                <span style="color:#003177"><b>Correo:</b>{{$data['has_cotizaicon']['has_cliente']['correo_contacto']}}</span>
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
     <table cellspacing="10" style="width: 100%; text-align: left; font-size: 11pt; margin-top:100px">
		<tr>
			<td style="width:50%;text-align: center;border-top:solid 1px">Cliente(Nombre y firma)</td>
			<td style="width:50%;text-align: center;border-top:solid 1px">Gerente técnico(firma)</td>
		</tr>
	</table>
</body>

</html>