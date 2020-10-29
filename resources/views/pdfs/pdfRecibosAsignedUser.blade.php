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
            <th  colspan="11"  id="cabecera_logo">
            <img src="{{ asset('img/accredian-bco-mini.png')}}" alt="logo de la empresa"  />
                <h2>Recibo</h2>
            </th>
        </tr>
        <tr>
            <td colspan="6">
                <strong> {{$data['has_cotizaicon']['has_cliente']['razon_social']}}</strong><br />
                <div> {{$data['has_cotizaicon']['has_cliente']['direccion_fiscal']}}</div>
                <div> <strong> Contacto:</strong> {{$data['has_cotizaicon']['has_cliente']['nombre_completo']}}</div>
                <div> <strong> Teléfono:</strong> {{$data['has_cotizaicon']['has_cliente']['celular_contacto']}}</div>
                <div> <strong> Correo:</strong>{{$data['has_cotizaicon']['has_cliente']['correo_contacto']}} </div>
            </td>
            <td colspan="5">
                <div> <strong> Cotizacion:</strong> {{$data['has_cotizaicon']['id']}}</div>
                <div> <strong> Recibo:</strong> {{$data['id']}}</div>
                <div> <strong> Fecha:</strong> {{substr($data['created_at'], 0, 10)}}</div>
                <div> <strong> Condicion:</strong>{{$data['has_cotizaicon']['condicion']}}</div>
                <div> <strong> Estado:</strong>{{$data['estado']}}</div>
            </td>
        </tr>
        <tr style=" background: rgba(0, 49, 119, 1); color: white; ">
            <td  style="text-align: center;"  >Cantidad</td>
            <td  style="text-align: center;"  >Servicio</td>
            <td  style="text-align: center;"  >Instrumento</td>
            <td  style="text-align: center;"  >Alcance</td>
            <td  style="text-align: center;"  >Acreditacion</td>
            <td  style="text-align: center;"  >Magnitud</td>
            <td  style="text-align: center;"  >Marca</td>
            <td  style="text-align: center;"  >Modelo</td>
            <td  style="text-align: center;"  >Serie</td>
            <td  style="text-align: center;"  >ID</td>
            <td  style="text-align: center;"  >Asignado</td>
        </tr>
        @foreach($data['has_partidas'] as $item)
        <tr>
            <td style="text-align: center;" >{{$item['cantidad']}}</td>
            <td style="text-align: center;" >{{$item['servicio']}}</td>
            <td style="text-align: center;" >{{$item['has_intrumento']['nombre']}}</td>
            <td style="text-align: center;" >{{$item['has_intrumento']['alcance']}}</td>
            <td style="text-align: center;" >{{$item['has_intrumento']['has_acreditacion']['nombre']}}</td>
            <td style="text-align: center;" >{{$item['has_intrumento']['has_magnitud']['nombre']}}</td>
            <td style="text-align: center;" >{{$item['marca']}}</td>
            <td style="text-align: center;" >{{$item['modelo']}}</td>
            <td style="text-align: center;" >{{$item['serie']}}</td>
            <td style="text-align: center;" >{{$item['identificacion']}}</td>
            <td style="text-align: center;" >{{$item['has_empleado'] ? $item['has_empleado']['nombre_completo'] : 'Sin Asigar'  }}</td>
        </tr>
        @endforeach
         
    </table>
</body>

</html>