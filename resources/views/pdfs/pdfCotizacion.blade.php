<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <style>
        body {
            max-width: 100%;
            max-height: 100%;
        }

        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            border: none;
            font-size: 12px;
        }

        td,
        th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            border: none;
        }

        tr:nth-child(even) {
            background-color: #0095d93b;
            border: none;
            text-align: center;
        }

        #cabecera_logo {
            background: rgba(0, 49, 119, 1);
            max-height: 300px;
        }

        #cabecera_logo h2 {
            color: white;
            float: right;
            margin-top: 50px;
            font-size: 30px;
        }
    </style>
</head>

<body>
    <table>
        <tr>
            <th colspan="11" id="cabecera_logo">
                <img src="{{ asset('img/accredian-bco.png')}}" alt="logo de la empresa"  />
                <h2>Cotizacion</h2>
            </th>
        </tr>
        <tr>
            <td colspan="5">
                <strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong><br />
                <div> Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div> <strong> Contacto:</strong> Lorem ipsum dolor sit amet</div>
                <div> <strong> Teléfono:</strong> Lorem ipsum dolor sit amet</div>
                <div> <strong> Correo:</strong> Lorem ipsum dolor sit amet </div>
            </td>
            <td colspan="6">
                <div> <strong> Cotizacion:</strong> 9999</div>
                <div> <strong> Fecha:</strong> 20-20-2020</div>
                <div> <strong> Tiempo de Entrega:</strong>99 Dias</div>
                <div> <strong> Moneda:</strong>MXN</div>
                <div> <strong> Servicio:</strong>Normal</div>
                <div> <strong> Condicion:</strong>99 Dias</div>
            </td>
        </tr>
        <tr style=" background: rgba(0, 49, 119, 1); color: white; ">
            <td>Cantidad</td>
            <td>Servicio</td>
            <td>Instrumento</td>
            <td>Marca</td>
            <td>Modelo</td>
            <td>Serie</td>
            <td>Alcance</td>
            <td>ID</td>
            <td>Acreditaciión</td>
            <td>Precio Unitario</td>
            <td>Importe</td>
        </tr>
        @foreach($data['has_partidas'] as $item)
        <tr>
            <td style="text-align: center;" >{{$item['cantidad']}}</td>
            <td style="text-align: center;" >{{$item['servicio']}}</td>
            <td style="text-align: center;" >{{$item['has_intrumento']['nombre']}}</td>
            <td style="text-align: center;" >{{$item['marca']}}</td>
            <td style="text-align: center;" >{{$item['modelo']}}</td>
            <td style="text-align: center;" >{{$item['serie']}}</td>
            <td style="text-align: center;" >{{$item['has_intrumento']['alcance']}}</td>
            <td style="text-align: center;" >{{$item['identificacion']}}</td>
            <td style="text-align: center;" >{{$item['has_intrumento']['has_acreditacion']['nombre']}}</td>
            <td style="text-align: center;" > {{$data['has_moneda']['clave']}} {{number_format($item['has_intrumento']['precio_venta'], 2, ',', '.')}}</td>
            <td style="text-align: center;" > {{$data['has_moneda']['clave']}} {{number_format($item['importe'], 2, ',', '.')}}</td>
        </tr>
        @endforeach
        <tr>
            <td style="text-align: right;" colspan="11">
                <h3><strong>Sub Total:</strong> {{$data['has_moneda']['clave']}} {{number_format($data['sub_total'], 2, ',', '.')}}</h3>
                <h3><strong>I.V.A:</strong> {{$data['has_moneda']['clave']}} {{number_format($data['iva'], 2, ',', '.')}}</h3>
                <h3><strong>Total:</strong> {{$data['has_moneda']['clave']}} {{number_format($data['total'], 2, ',', '.')}}</h3>
            </td>
        </tr>
    </table>
</body>

</html>