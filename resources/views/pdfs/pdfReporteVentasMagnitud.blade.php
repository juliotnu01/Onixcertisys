<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

</head>
<body>
    <table class="page_header" style="width:100%;">
        <tr style="vertical-align: top">
            <td style="width:100%">
                Reporte de ventas por magnitud
            </td>
        </tr>
    </table>

    <table style="width:100%;border:2px solid #0095d9; margin-top: 10px" cellspacing=0>
        <tr bgcolor="#0095d9" style="font-size:8pt">
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Partida</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Partida ID</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Folio</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Cliente</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Factura</th>
            <th style="color:#fff; height:20px; padding: 5px;  text-align:center">Fecha</th>
        </tr>
        @foreach($data['instrumento_selected']['belongs_partida'] as $item)
        <tr style="font-size:8pt">
            <td class="top" style="border:1px solid #0095d9; text-align: center">{{$item['id']}}</td>
            <td class="top" style="border:1px solid #0095d9; text-align: center">{{$item['identificacion']}}</td>
            <td class="top" style="border:1px solid #0095d9; text-align: center">{{$item['belongs_cotizacion']['id']}}</td>
            <td class="top" style="border:1px solid #0095d9; text-align: center">{{$item['belongs_cotizacion']['has_cliente']['razon_social']}}</td>
            <td class="top" style="border:1px solid #0095d9; text-align: center">{{$item['belongs_cotizacion']['belongs_recibo'][0]['id']}}</td>
            <td class="top" style="border:1px solid #0095d9; text-align: center">{{substr($item['belongs_cotizacion']['belongs_recibo'][0]['created_at'], 0,10)}}</td>
        </tr>
        
        @endforeach
        <tr>
            <td class="top" colspan="6"  style="border:1px solid #0095d9; text-align: left"> <h4> Total Facturado:  @money($data['total_vendido']) </h4></td>
        </tr>
    </table>
     
</body>

</html>