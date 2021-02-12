<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style>
        body {
            width: 200.9mm;
            margin: 0 auto;
        }

        .td40 {
            width: 40%;
            font-size: 12px;
        }

        .td70 {
            width: 70%;
            font-size: 12px;
        }

        .td15 {
            width: 7%;
            font-size: 12px;
        }

        .td15 #td15Cliente {
            text-align: right;
            font-size: 12px;

        }

        .td30 {
            width: 30%;
            text-align: center;
            font-size: 12px;
        }

        .td30E {
            width: 12%;
            font-size: 12px;
        }

        .td30E .td30ECliente {
            text-align: left;
            font-size: 12px;
        }

        .td30 #factura {
            width: 50%;
            margin: 0 auto;
            background-color: #5dbbe8;
            padding: 10px;
            font-size: 20px;
            font-weight: bold;
            font-family: serif;
            color: #fff;
            border-radius: 10px;
        }

        .td30 #correlativo {
            border: 2px solid #5dbbe8;
            border-radius: 5px;
            width: 50%;
            margin: 10px auto;
        }

        .td30 #cabeceraAcredian {
            font-size: 9px;
            position: relative;
            left: 15px;
            top: 15px;
        }

        #tablaProductos {
            border: 2px solid #5dbbe8;
            border-radius: 15px;
            margin: 5px 0px;
            width: 95%;
        }
    </style>
</head>

<body>
    <table class="page_header">
        <tr style="vertical-align: top">
            <td class="td40">
                <img src="img/login-logo.png" style="width: 100%;">
            </td>
            <td class="td30">
                <div id="cabeceraAcredian">
                    Accredian, S. DE R.L. DE C.V. <br />
                    RFC: ACC1905026P3<br />
                    Domicilio Fiscal: Calle Monclova 213, Colonia Miravista General Escobedo, N.L. MX CP. 66050<br />
                    Sucursal: Calle 24 #600 Residencial Las Puentes 3er sector, San Nicolas de los Garza, N.L. MX CP. 66460
                </div>
            </td>
            <td class="td30">
                <div id="factura">
                    FACTURA
                </div>
                <div id="correlativo">
                    # 9999-9999-99
                </div>
            </td>
        </tr>
    </table>
    <table class="page_header">
        <tr>
            <td class="td70">
                <span>Régimen Fiscal: 601 General de Ley Personas Morales</span>
            </td>
            <td class="td30">
                <span>Orden de Compra:</span>
            </td>
        </tr>
    </table>
    <table id="tablaProductos">
        <tr>
            <td class="td15">
                <div id="td15Cliente">
                    <div>Cliente</div>
                    <div>R.F.C.:</div>
                    <div>Uso del CFDI:</div>
                    <div>Forma de Pago:</div>
                    <div>Método de Pago:</div>
                    <div>Condiciones de Pago:</div>
                </div>
            </td>
            <td class="td30E">
                <div class="td30ECliente">
                    <div>Cliente</div>
                    <div>R.F.C.:</div>
                    <div>Uso del CFDI:</div>
                    <div>Forma de Pago:</div>
                    <div>Método de Pago:</div>
                    <div>Condiciones de Pago:</div>
                </div>
            </td>
            <td class="" style="font-size: 12px; width: 9%; text-align:right">
                <div class="">
                    <div>Folio Fiscal:</div>
                    <div>Fecha Expedición:</div>
                    <div>C.P.de Expedición:</div>
                    <div>Forma de Pago:</div>
                    <div>Tipo Comprobante</div>
                    <div>Moneda</div>
                </div>
            </td>
            <td class="" style="font-size: 12px; width: 8%;">
                <div class="">
                    <div>Folio Fiscal:</div>
                    <div>Fecha Expedición:</div>
                    <div>C.P.de Expedición:</div>
                    <div>Forma de Pago:</div>
                    <div>Tipo Comprobante</div>
                    <div>Moneda</div>
                </div>
            </td>
        </tr>
    </table>
    <table style="width: 95%; background-color: #5dbbe8; color: #fff; font-size: 12px;font-weight: bold;">
        <thead>
            <tr>
                <th>Clave SAT</th>
                <th>Cantidad</th>
                <th>Unidad</th>
                <th>Descripcion</th>
                <th>Precio Unitario</th>
                <th>Importe</th>
            </tr>
        </thead>
        <tbody style=" background-color: #fff; color: #000; font-weight: 100; text-align: center; ">
            <tr>
                <td>123H</td>
                <td>123</td>
                <td>unidad</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit modi doloremque distinctio cum aliquid aspernatur.</td>
                <td>$9.999.99,99</td>
                <td>$9.999.99,99</td>
            </tr>
            <tr>
                <td rowspan="4" colspan="4">
                    Importe con letra ()
                </td>
            </tr>
            <tr>
                <td>Sub Total</td>
                <td>$99.999.999,99</td>
            </tr>
            <tr>
                <td>I.V.A (16%)</td>
                <td>$99.999.999,99</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>$99.999.999,99</td>
            </tr>
        </tbody>
    </table>
    <table style="width: 95%; background-color: #5dbbe8; color: #fff;  font-weight: bold; margin-top: 5px; border-radius: 10px;">
        <tbody style="background-color: #fff; color: #000; font-weight: 100; text-align: left; ">
            <tr>
                <td>Observaciones:</td>
            </tr>
        </tbody>
    </table>
    <table style="width: 50%; background-color: #cecece; color: #fff; font-weight: bold; margin-top: 5px; font-size: 12px;">
        <thead>
            <tr>
                <th colspan="6">Cuentas Bancarias</th>
            </tr>
            <tr>
                <th>Banco</th>
                <th>Moneda</th>
                <th>Sucursal</th>
                <th>Cuenta</th>
                <th>CLABE</th>
            </tr>
        </thead>
        <tbody style="background-color: #fff; color: #000; font-weight: 100; text-align: left; ">
            <tr>
                <td>Bancomer</td>
                <td>Pesos</td>
                <td>5357</td>
                <td>0113689131</td>
                <td>012072001136891315</td>
            </tr>
            <tr>
                <td>Monex</td>
                <td>Dolares</td>
                <td></td>
                <td>3236114</td>
                <td>112962000032361141</td>
            </tr>
        </tbody>
    </table>
    <table style="width: 70%; background-color: #cecece; color: #fff; font-weight: bold; margin-top: 5px; font-size: 12px;">
        <thead>
            <tr>
                <th colspan="6">Para pagos en USD desde USA</th>
            </tr>
            <tr>
                <th>Banco</th>
                <th>Moneda</th>
                <th>Cuenta</th>
                <th>Routing</th>
                <th>Beneficiario</th>
                <th>Referencia</th>
            </tr>
        </thead>
        <tbody style="background-color: #fff; color: #000; font-weight: 100; text-align: left; ">
            <tr>
                <td>BNY Mellon</td>
                <td>Dolares</td>
                <td>8901003158</td>
                <td>021000018</td>
                <td>Accredian S DE RL DE CV</td>
                <td>00003236114</td>
            </tr>
        </tbody>
    </table>
    <table style="font-size: 12px;">
        <tbody>
            <tr>
                <td>RFC del proveedor SAT:</td>
                <td>SAT970701NN3</td>
            </tr>
            <tr>
                <td>Serie certificado SAT:</td>
                <td>00001000000408254801</td>
            </tr>
            <tr>
                <td>Fecha de certificación:</td>
                <td>2021-01-20T18:42:33</td>
            </tr>
        </tbody>
    </table>
    <div style="width: 95%; font-size: 12px;     margin-top: 15px; margin-bottom: 15px; ">
        <strong>Sello digital del CFDI:</strong><br />
        Yg/kCI9nz/+sFWX1ep6DxpNW3Fw7gKcTPaMEhpFWNjAD8Y5NqyC/r7X4ly+yHsSVbYKygluVfilIhw3rC <br/>
        iIG/EyorjP+3O8jtdnkPlmS0pY6rkf6P/WPdoAt87OdCuPtZDkW2jAjC1tGZrtCFoP8JDF9EGDIamukpl4 <br/>
        gaeLimdVNoveOpzFzYa6HlKnVpT3obnowH/QQS0IQMxfkX6HlpYStjOjxPTu5uBLRJ8nt+hky/MABbQ41 <br/>
        mBXCyUg2tt8p/VnE+AdrDMTmSucZNnz3iOgcsu0V5J9OFFk945rpZyCtJKu+6ZKy2cOJvJDtj3Gx/mgzszGGrb bhhyIItklUKg==
    </div>
    <div style="width: 95%; font-size: 12px;      margin-top: 15px; margin-bottom: 15px; ">
        <strong>Sello digital del SAT:</strong><br />
        FkJI43dvBJoEw/BTBdY5Ggy5kyMc7lHh8UfP5gFY1gdIuoEhn1C1wlCKrYEKVwdAq+Bfa2BBNkq47h7Qq <br/>
        qAeuLdtSgdjdxz+eTNJ1y5uuanxwm2qIEQtyYLLua71fWTQQB91rGFPjP8GrEbWVO1nmL1d6tmqoUgqOe <br/>
        7nydyT6ex4fT2DJOYIdFMkh79IUemo7YWip/H5FZZiSJG1/AhtvM2heum/ratERpqXQ6XOAfX0VZ0/ppQv <br/>
        VquqjVHYApXqVWtKDew1oJ+0UaP9Wle9vWlhL60iKyRI6d/8o+pgY+3fz8JaOY/+OKuTiQoTDo7Y8HpRbo7Yay AcJXWu15/XYQ==
    </div>
    <table style="width:100%; padding: 5px; font-size: 12px;" cellspacing=0>
        <tr>
            <td style="width:15%;">
                <strong>Cadena Original del complemento de certificación digital del SAT:</strong>
            </td>
        </tr>
        <tr>
            <td style="width:15%;">
                {{--<img src="data:image/png;base64, {!! $qrcode !!}">--}}
            </td>
        </tr>
        <tr>
            <td>
                ||1.1|8cfb92a0-8d80-42b7-887f-379d330d55f7|2021-01-20T18:42:33|LSO1306189R5| <br/>
                Yg/kCI9nz/+sFWX1ep6DxpNW3Fw7gKcTPaMEhpFWNjAD8Y5NqyC/r7X4ly+yHsSVbYKygluVfilIh <br/>
                w3rCiIG/EyorjP+3O8jtdnkPlmS0pY6rkf6P/WPdoAt87OdCuPtZDkW2jAjC1tGZrtCFoP8JDF9EGD <br/>
                Iamukpl4gaeLimdVNoveOpzFzYa6HlKnVpT3obnowH/QQS0IQMxfkX6HlpYStjOjxPTu5uBLRJ8nt+h <br/>
                ky/MABbQ41mBXCyUg2tt8p/VnE+AdrDMTmSucZNnz3iOgcsu0V5J9OFFk945rpZyCtJKu+6ZKy2cOJvJ <br/>
                Dtj3Gx/mgzszGGrbbhhyIItklUKg==|00001000000408254801||
            </td>
        </tr>
    </table>
</body>

</html>