<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<style>
    * {
        font-family: sans-serif;
    }

    .tdLogo {
        width: 40%;
    }

    .tdInfoEmpresa {
        width: 30%;
        text-align: center;
        font-size: 10px;
    }

    .tdInfoEmpresaContactos {
        width: 20%;
        text-align: right;
        color: #0095d9;
        padding-right: 80px;
        font-size: 12px;
    }

    .tdInfoNumberCotizacion {
        width: 30%;
    }

    .cotWord {
        font-size: 20px;
        text-align: center;
        background-color: #0095d9;
        color: white;
        border-radius: 6px 6px 6px 6px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .trCabecera td {
        float: left;
    }

    .cotNumber {
        border: 2px solid #0095d9;
        border-radius: 6px;
        margin-top: 5px;
        margin-right: 65px;
        margin-bottom: 0px;
        margin-left: 60px;
        text-align: left;
    }

    .tableCabecera {
        width: 100%;
        height: auto;
        font-size: 13px;
        border: 3px solid #0095d9;
        border-radius: 6px;
        text-align: right;
    }

    .tableCuerpoItems {
        width: 100%;
        border: 2px solid #0095d9;
        margin-top: 5px;
        font-size: 13px;
    }

    .tableCuerpoItems_head {
        background-color: #0095d9;
        color: white;
        font-size: 8px;
        font-size: 13px;
    }

    .tableCuerpoItems_head_tr {
        background-color: #0095d9;
        color: white;
        font-size: 13px;
    }

    .tableCuerpoItems_body_tr td {
        border: 1px solid #0095d9;
        text-align: center;
        font-size: 13px;
    }

    .tableCuerpoItems_footer_tr td {
        text-align: left;
        font-size: 14px;
    }

    .tableNota {
        width: 100%;
        border: 2px solid #0095d9;
        margin-top: 5px;
        border-radius: 5px 5px 5px 5px;
        font-size: 13px;
    }

    .tableDatosBancarios {
        width: 100%;
        font-size: 10px;
        text-align: center;
        margin-top: 5px;
    }

    #PagoMexico {
        width: 70%;
        margin: 5%;
        font-size: 10px;
        text-align: center;
    }

    #pagoEEUU {
        width: 30%;
        margin: 5%;
        font-size: 10px;
        text-align: center;
    }

    #pagoEEUU tr td {
        border: 1px solid #000;
        padding: 5px;
    }

    #pagoEEUU tr th {
        border: 1px solid #000;
    }

    #PagoMexico tr td {
        border: 1px solid #000;
        padding: 5px;
    }

    #PagoMexico tr th {
        border: 1px solid #000;
    }

    .tablefirma {
        width: 100%;
        font-size: 13px;
        margin-top: 100px;
    }

    .page-break {
        page-break-after: always;
    }

    #firmaEjecutivoDeVenta {
        text-align: center;
        margin: 0 auto;
    }

    #firmaAceptarCondiciones {
        text-align: center;
        margin: 0 auto;
    }

    .teminosYcondiciones {
        width: 100%;
        margin-top: 5px;
        font-size: 13px;
        text-align: justify;
    }

    .tableCabeceraDoc {
        width: 100%;
        margin-bottom: 10px;
    }
</style>

<body>
    <table class="tableCabeceraDoc">
        <tr>
            <td class="tdLogo">
                <img src="{{ asset('img/login-logo.png') }}" style="width: 80%;">
            </td>
            <td class="tdInfoEmpresa">
                <span>
                    Accredian, S. DE R.L. DE C.V.<br />
                    <strong>RFC: ACC1905026P3</strong><br />
                    Domicilio Fiscal: Calle Monclova 213,
                    Col. Miravista Gral. Escobedo, N.L. MX CP. 66050<br />
                    Sucursal: Calle 24 #600 Resid. Las Puentes 3er sector,
                    San Nicolas de los Garza, N.L. MX CP. 66460
                </span>
            </td>
            <td class="tdInfoNumberCotizacion">
                <div>
                    <div class="cotWord">FACTURA</div>
                    {{--<div class="cotNumber">#{{$data['id']}}
                </div> --}}
                <div class="cotNumber">#99999</div>
                </div>
            </td>
        </tr>
        <tr>
            <td style="border: none;">&nbsp;</td>
        </tr>
        <tr>
            <td style="font-size: 12px;">Régimen Fiscal: 601 General de Ley Personas Morales</td>
            <td style="font-size: 12px; text-align: right;">Orden de Compra: </td>
            <td style="font-size: 12px; text-align: left;">1231313123</td>
        </tr>
    </table>
    <table class="tableCabecera">
        <tbody>
            <tr>
                <td style="width: 15%;">Cliente:</td>
                <td style="width: 85%; text-align: left;" colspan="4"></td>
            </tr>
            <tr>
                <td style="width: 10%;">R.F.C.:</td>
                <td style=" text-align: left;"></td>
                <td style="width: 10%;">Folio Fiscal:</td>
                <td style=" text-align: left;"></td>
            </tr>
            <tr>
                <td style="width: 10%;">Uso del CFDI:</td>
                <td style=" text-align: left;"></td>
                <td style="width: 10%;">Fecha Expedición:</td>
                <td style=" text-align: left;"></td>
            </tr>
            <tr>
                <td style="width: 10%;">Forma de Pago:</td>
                <td style=" text-align: left;"></td>
                <td style="width: 10%;">C.P.de Expedición:</td>
                <td style=" text-align: left;"></td>
            </tr>
            <tr>
                <td style="width: 10%;">Método de Pago:</td>
                <td style=" text-align: left;"></td>
                <td style="width: 10%;">Tipo Comprobante:</td>
                <td style=" text-align: left;">Ingreso Versión 3.3</td>
            </tr>
            <tr>
                <td style="width: 10%;">Condiciones de Pago</td>
                <td style=" text-align: left;"></td>
                <td style="width: 10%;">Moneda:</td>
                <td style=" text-align: left;"></td>
            </tr>
        </tbody>
    </table>
    <table class="tableCuerpoItems" cellspacing=0>
        <thead class="tableCuerpoItems_head">
            <tr class="tableCuerpoItems_head_tr">
                <th>Clave SAT</th>
                <th>Cantidad</th>
                <th>Unidad</th>
                <th>Descripcion</th>
                <th>Precio Unitario</th>
                <th>Importe</th>
            </tr>
        </thead>
        <tbody>
            <tr class="tableCuerpoItems_body_tr">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="tableCuerpoItems_footer_tr">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style="text-align: right;"><strong>SubTotal:</strong></td>
                <td> </td>
            </tr>
            <tr class="tableCuerpoItems_footer_tr">
                <td></td>
                <td>Importe con letra ()</td>
                <td></td>
                <td></td>
                <td style="text-align: right;"><strong>I.V.A. <small>(16%)</small>:</strong></td>
                <td></td>
            </tr>
            <tr class="tableCuerpoItems_footer_tr">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style="text-align: right;"><strong> Total:</strong></td>
                <td> </td>
            </tr>
        </tfoot>
    </table>
    <table class="tableNota">
        <tbody>
            <tr rowspan="3">
                <td> Observaciones:</td>
            </tr>
            <tr rowspan="2">
                <td style="border: none;"></td>
            </tr>
            <tr>
                <td style="border: none;">&nbsp;</td>
            </tr>
            <tr>
                <td style="border: none;">&nbsp;</td>
            </tr>
        </tbody>
    </table>
    <table class="tableDatosBancarios">
        <tbody>
            <tr>
                <td id="PagoMexico">
                    <table cellspacing=0 style="width: 70%;">
                        <thead>
                            <tr>
                                <td colspan="5" style="background-color: #cecece; font-size: 13px;  text-align: center; ">Para pagos desde México</td>
                            </tr>
                            <tr style="background-color: #cecece; ">
                                <th>Banco</th>
                                <th>Moneda</th>
                                <th>Sucursal</th>
                                <th>Cuenta</th>
                                <th>CLABE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BBVA Bancomer</td>
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
                    <table cellspacing=0 style="width: 100%; margin-top: 10px;">
                        <thead>
                            <tr>
                                <td colspan="6" style="background-color: #cecece; font-size: 13px;  text-align: center; "> Para pagos en USD desde USA</td>
                            </tr>
                            <tr style="background-color: #cecece; ">
                                <th>Banco</th>
                                <th>Moneda</th>
                                <th>Cuenta</th>
                                <th>Routing</th>
                                <th>Beneficiario</th>
                                <th>Referencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bank of New York Mellon</td>
                                <td>Dolares</td>
                                <td>8901003158</td>
                                <td>021000018</td>
                                <td>Accredian S DE RL DE CV</td>
                                <td>00003236114</td>
                            </tr>
                            <tr style="border: none;">
                                <td style="border: none;">&nbsp;</td>
                                <td style="border: none;">&nbsp;</td>
                                <td style="border: none;">&nbsp;</td>
                                <td style="border: none;">&nbsp;</td>
                                <td style="border: none;">&nbsp;</td>
                                <td style="border: none;">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td id="pagoEEUU">
                    <table cellspacing=0 style="width: 100%; margin-top: 10px; border: none;">
                        <tbody>
                            <tr>
                                <td style="border: none;"> <strong> RFC del proveedor SAT:</strong> SAT970701NN3</td>
                            </tr>
                            <tr>
                                <td style="border: none;"><strong>Serie certificado SAT: </strong>00001000000408254801</td>
                            </tr>
                            <tr>
                                <td style="border: none;"><strong>Fecha de certificación:</strong> 2021-01-20T18:42:33</td>
                            </tr>
                            <tr>
                                <td style="border: none;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="border: none;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="border: none;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="border: none;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="border: none;">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table style="margin-top: 10px; max-width: 100%; font-size: 13px;">
        <tbody>
            <tr>
                <td> <strong> Sello digital del CFDI:</strong></td>
            </tr>
            <tr>
                <td style="max-width: 100%; font-size: 13px; text-align: justify;">
                    Yg/kCI9nz/+sFWX1ep6DxpNW3Fw7gKcTPaMEhpFWNjAD8Y5NqyC/r7X4ly+yHsSVbYKygluVfilIhw3rCiIG/EyorjP+3O8jtdnkPlmS0pY6rkf6P/WPdoAt8
                    7OdCuPtZDkW2jAjC1tGZrtCFoP8JDF9EGDIamukpl4gaeLimdVNoveOpzFzYa6HlKnVpT3obnowH/QQS0IQMxfkX6HlpYStjOjxPTu5uBLRJ8nt+hky/MABbQ4
                    1mBXCyUg2tt8p/VnE+AdrDMTmSucZNnz3iOgcsu0V5J9OFFk945rpZyCtJKu+6ZKy2cOJvJDtj3Gx/mgzszGGrb bhhyIItklUKg==
                </td>
            </tr>
            <tr>
                <td> <strong> Sello digital del SAT:</strong></td>
            </tr>
            <tr>
                <td style="max-width: 100%; font-size: 13px; text-align: justify;">
                    FkJI43dvBJoEw/BTBdY5Ggy5kyMc7lHh8UfP5gFY1gdIuoEhn1C1wlCKrYEKVwdAq+Bfa2BBNkq47h7QqqAeuLdtSgdjdxz+eTNJ1y5uuanxwm2qIEQtyYLLua
                    71fWTQQB91rGFPjP8GrEbWVO1nmL1d6tmqoUgqOe7nydyT6ex4fT2DJOYIdFMkh79IUemo7YWip/H5FZZiSJG1/AhtvM2heum/ratERpqXQ6XOAfX0VZ0/ppQv
                    VquqjVHYApXqVWtKDew1oJ+0UaP9Wle9vWlhL60iKyRI6d/8o+pgY+3fz8JaOY/+OKuTiQoTDo7Y8HpRbo7Yay AcJXWu15/XYQ==
                </td>
            </tr>
        </tbody>
    </table>
    <table style="margin-top: 10px; max-width: 100%; font-size: 13px;">
        <tbody>
            <tr>
                <td  rowspan="4">
                    <img src="data:image/png;base64, {!! $qrcode !!}">
                </td>
            </tr>
            <tr>
                <td> <strong> Sello digital del SAT:</strong></td>
            </tr>
            <tr>
                <td style="max-width: 100%; font-size: 13px; text-align: justify;">
                    FkJI43dvBJoEw/BTBdY5Ggy5kyMc7lHh8UfP5gFY1gdIuoEhn1C1wlCKrYEKVwdAq+Bfa2BBNkq47h7QqqAeuLdtSgdjdxz+eTNJ1y5
                    uuanxwm2qIEQtyYLLua71fWTQQB91rGFPjP8GrEbWVO1nmL1d6tmqoUgqOe7nydyT6ex4fT2DJOYIdFMkh79IUemo7YWip/H5FZZiSJ
                    G1/AhtvM2heum/ratERpqXQ6XOAfX0VZ0/ppQvVquqjVHYApXqVWtKDew1oJ+0UaP9Wle9vWlhL60iKyRI6d/8o+pgY+3fz8JaOY/+O
                    KuTiQoTDo7Y8HpRbo7Yay AcJXWu15/XYQ==
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>