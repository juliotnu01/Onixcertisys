<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <style>
        body{
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
            <img src="{{ asset('img/accredian-bco-mini.png')}}" alt="logo de la empresa"  width="100"/>
                <h2>Cotizacion</h2>
            </th>
        </tr>
        <tr>
            <td colspan="5">
                <strong> {{$data['has_cliente']['razon_social']}}</strong><br />
                <div> {{$data['has_cliente']['direccion_fiscal']}}</div>
                <div> <strong> Contacto:</strong> {{$data['has_cliente']['nombre_completo']}}</div>
                <div> <strong> Teléfono:</strong> {{$data['has_cliente']['celular_contacto']}}</div>
                <div> <strong> Correo:</strong>{{$data['has_cliente']['correo_contacto']}} </div>
                <div> <strong> Sucursal:</strong>{{$data['has_cliente']['has_sucursal'][0]['nombre_sucursal']}} </div>
                <div> <strong> Direccion: sucursal:</strong>{{$data['has_cliente']['has_sucursal'][0]['direccion_sucursal']}} </div>
                <div> <strong> Telefono: sucursal:</strong>{{$data['has_cliente']['has_sucursal'][0]['telefono']}} </div>
            </td>
            <td colspan="6">
                <div> <strong> Cotizacion:</strong> {{$data['id']}}</div>
                <div> <strong> Fecha:</strong> {{substr($data['created_at'], 0, 10)}}</div>
                <div> <strong> Tiempo de Entrega:</strong>{{$data['has_tiempo_de_entrega']['nombre']}}</div>
                <div> <strong> Moneda:</strong> {{$data['has_moneda']['clave']}}</div>
                <div> <strong> Servicio:</strong>{{$data['tipo_de_servicio']}}</div>
                <div> <strong> Condicion:</strong>{{$data['condicion']}}</div>
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
        <tr>
            <td  style="text-align: center; margin-top: 20px" colspan="6">
                _______________________________ <br/>
                Ejecutivo(a) de ventas
            </td>
            <td  style="text-align: center; margin-top: 20px" colspan="5" >
                _______________________________ <br/>
                Autorización Cliente
            </td>
        </tr>  
    </table>
</body>

</html>