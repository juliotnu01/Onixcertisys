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
            font-size: 12px;
            width: 100%;
            font-size: 10px;
        }

        .cabecera_factura {
            font-family: arial, sans-serif;
            font-size: 9px;
            width: 100%;
            background-color: #cecece;
        }

        .cabecera_factura .titulo_cabecera_factura {
            width: 100v;
            height: 50px;
            margin: 0;
            padding: 0;
        }

        .cabecera_factura .titulo_cabecera_factura span {
            font-family: arial, sans-serif;
            font-size: 20px;
            position: absolute;
            left: 70px;
            top: 16px;
            color: white;
        }

        .cabecera_factura .titulo_cabecera_factura img {
            position: absolute;
            left: 15px;
        }

        .cabecera_factura .info_empresa_cabecera_factura {
            font-family: arial, sans-serif;
            width: 50%;
            float: right;
            position: relative;
            transform: translate(0px, -50px);
            height: 50px;
            color: white;
            text-align: right;
            font-size: 8px;
        }

        .table_info_cliente {
            border: 1px solid;
        }

        #table_instrumento tbody tr {
            width: 100%;
            border-collapse: collapse;
        }

        #table_instrumento td,
        th {
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <table>
        <thead>
            <tr>
                <th>
                    <div class="cabecera_factura">
                        <div class="titulo_cabecera_factura">
                            <img src="{{ asset('img/factura_cab.png')}}" alt="logo de la empresa" width="50" />
                        </div>
                    </div>
                </th>
            </tr>
        </thead>
    </table>
    <table class="table_info_cliente">
        <thead>
            <tr>
                <td style="width: 50%;">
                    <div>
                        <strong> Nombre del emisor:</strong>{{$empresa['nombre_empresa']}}<br />
                    </div>
                    <div>
                        <strong> R.F.C del emisor:</strong>{{$empresa['rfc']}}<br />
                    </div>
                    <div>
                        <strong> Nombre del receptor:</strong>{{$cliente['razon_social']}}<br />
                    </div>
                    <div>
                        <strong> R.F.C del receptor:</strong>{{$cliente['rfc']}}<br />
                    </div>
                    <div>
                        <strong> Uso del CFDI:</strong>
                    </div>
                </td>
                <td style="width: 50%;">
                    <div>
                        <strong> Folio fiscal:</strong><br />
                    </div>
                    <div>
                        <strong> Ferie y Folio :</strong> <br />
                    </div>
                    <div>
                        <strong> CP Fecha de emisión:</strong> <br />
                    </div>
                    <div>
                        <strong> Tipo de comprobante:</strong> <br />
                    </div>
                    <div>
                        <strong> Regimen Fiscal:</strong> <br />
                    </div>
                    <div>
                        <strong> Orden de compra:</strong>
                    </div>
                </td>
            </tr>
        </thead>
    </table>
    <table id="table_instrumento">
        <thead>
            <tr>
                <th>
                    <div style="text-align: center;">Clave SAT</div>
                </th>
                <th>
                    <div style="text-align: center;">Cantidad</div>
                </th>
                <th>
                    <div style="text-align: center;">Unidad</div>
                </th>
                <th>
                    <div style="text-align: center;">Descripción</div>
                </th>
                <th>
                    <div style="text-align: center;">Precio U.</div>
                </th>
                <th>
                    <div style="text-align: center;">Importe</div>
                </th>
            </tr>
        </thead>
        <tbody>
            @foreach($dataFactura as $value)
            <tr>
                <td colspan="6">
                    <strong> Orden de servicio :</strong> {{$value['id']}} <strong> Fecha: </strong> {{substr($value['created_at'], 0, 19)}}
                </td>
            </tr>
            @foreach($value['has_partidas'] as $value2)
            <tr>
                <td></td>
                <td>
                    <div style="text-align: center;">1</div>
                </td>
                <td>
                    <div style="text-align: center;">{{$value2['unidad']}}</div>
                </td>
                <td>
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
                <td>
                    <div style="text-align: center;"> {{$request['cliente']['has_moneda']['clave']}} @money($value2['has_intrumento']['precio_venta'])</div>
                </td>
                <td>
                    <div style="text-align: center;"> {{$request['cliente']['has_moneda']['clave']}} @money($value2['importe'])</div>
                </td>
            </tr>
            @endforeach
            @endforeach
            <tr>
                <td colspan="6">

                    <div style="text-align: right;">
                        <strong> TOTAL </strong> {{$request['cliente']['has_moneda']['clave']}} @money($request['subtotal'])
                    </div>
                    <div style="text-align: right;">
                        <strong>I.V.A. <small>({{$cliente['iva']}}%)</small> </strong> {{$request['cliente']['has_moneda']['clave']}} @money($request['iva'])
                    </div>
                    <div style="text-align: right;">
                        <strong>TOTAL </strong> {{$request['cliente']['has_moneda']['clave']}} @money($request['total'])
                    </div>
                    <div style="text-align: center;">
                        {{$spell}}
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <strong>Moneda:</strong>{{$request['cliente']['has_moneda']['nombre_moneda']}}
                </td>
                <td colspan="3">
                    <strong>RFC del proveedor SAT:</strong>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <strong>Forma de pago:</strong>{{$request['cliente']['has_cliente']['has_condicion_de_pago']['nombre']}}
                </td>
                <td colspan="3">
                    <strong>Serie certificado SAT:</strong>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <strong>Metodo de pago:</strong>{{$request['cliente']['has_cliente']['has_metodo_de_pago']['nombre']}}
                </td>
                <td colspan="3">
                    <strong>Fecha de certificación:</strong>
                </td>
            </tr>
            <tr>
                <td colspan="6">
                    <strong>Sello digital del CFDI:</strong>
                </td>
            </tr>
            <tr>
                <td colspan="6">
                    <strong>Sello digital del SAT:</strong>
                </td>
            </tr>
            <tr>
                <td colspan="6">
                    <strong>Nota:</strong>{{$request['nota']}}
                </td>
            </tr>
        </tbody>
    </table>
    <br/>
    <br/>
    <img src="data:image/png;base64, {!! $qrcode !!}">
</body>

</html>