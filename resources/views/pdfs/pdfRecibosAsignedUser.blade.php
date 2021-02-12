<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

</head>
<body>
    <table class="page_header" style="width:100%;">
        <tr style="vertical-align: top">
            <td style="width:100%">
                {{-- <img src="img/recibo_cab.png" style="width: 100%;"> --}}
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
			<td style="width:33%;text-align: center;border-top:solid 1px">Asesor de Ventas</td>
			<td style="width:33%;text-align: center;border-top:solid 1px">Gerente de Ventas</td>
			<td style="width:33%;text-align: center;border-top:solid 1px">Cliente Autoriza</td>
		</tr>
	</table>
</body>

</html>