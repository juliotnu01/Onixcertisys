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
            font-size: 9px;
            width: 100%;
        }
        .cabecera_factura {
            font-family: arial, sans-serif;
            font-size: 9px;
            width: 100%;
            background-color: #cecece;
        }

        .cabecera_factura .titulo_cabecera_factura {
            font-family: arial, sans-serif;
            width: 30%;
            height: 50px;
            margin: 0;
            padding: 0;
        }
        .cabecera_factura .titulo_cabecera_factura span {
            font-family: arial, sans-serif;
            font-size: 20px;
            position: absolute;
            left: 70px;
            top: 23px;
            color: white;
        }
        .cabecera_factura .titulo_cabecera_factura img{
            position: absolute;
            left: 15px;
        }

        .cabecera_factura .info_empresa_cabecera_factura {
            font-family: arial, sans-serif;
            width: 50%;
            background: red;
            float: right;
            position: relative;
            transform: translate(0px, -50px);
        }
    </style>
</head>

<body>
    <table>
        <tr>
            <th>
                <div class="cabecera_factura">
                    <div class="titulo_cabecera_factura">
                        <span>
                            Cotizacion
                        </span>
                        <img src="{{ asset('img/accredian-bco-mini.png')}}" alt="logo de la empresa" width="50" />
                    </div>
                    <div class="info_empresa_cabecera_factura">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quisquam molestias expedita veritatis repellat facere dolor quasi impedit beatae, doloribus dolores recusandae numquam illum esse vel officia at repellendus modi?
                    </div>
                </div>
            </th>
        </tr>
    </table>
</body>

</html>