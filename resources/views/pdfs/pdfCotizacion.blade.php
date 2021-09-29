<!DOCTYPE html>
<div>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<style>
    *{
        font-family: sans-serif;
    }
    .tdLogo {
        width: 40%;
    }
    .tdInfoEmpresa {
        width: 20%;
        text-align: center;
        font-size: 16px ;
    }

    .tdInfoEmpresaContactos {
        width: 20%;
        text-align: right;
        color: #0095d9;
        padding-right: 80px;
        font-size: 17px ;
    }

    .tdInfoNumberCotizacion {
        width: 20%;
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
        font-size: 16px;
        font-weight: bold;
        border: 3px solid #0095d9;
        border-radius: 6px;
        text-align: right;
        color: #000;
    }

    .tableCuerpoItems {
        width: 100%;
        border: 2px solid #0095d9;
        margin-top: 5px;
        font-size: 18px;
        color: #000;
    }

    .tableCuerpoItems_head {
        background-color: #0095d9;
        color: white;
        font-size: 8px;
        font-size: 18px;
    }

    .tableCuerpoItems_head_tr {
        background-color: #0095d9;
        color: white;
        font-size: 18px;
    }

    .tableCuerpoItems_body_tr td {
        border: 1px solid #0095d9;
        text-align: center;
        font-size: 17px;
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
        font-size: 18px;
        color: #000;
    }

    .tableDatosBancarios {
        width: 100%;
        font-size: 10px;
        text-align: center;
        margin-top: 5px;
        Color: #000;
    }

    #PagoMexico {
        width: 50%;
        margin: 5%;
        font-size: 10px;
        text-align: center;
    }

    #pagoEEUU {
        width: 50%;
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
        font-size: 18px;
        margin-top: 100px;
        color: #000;
    }

    .page-break {
        page-break-before: always;
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
        font-size: 17px;
        text-align: justify;
    }
    .tableCabeceraDoc{
        width: 100%;
        color: #000;
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
            <td class="tdInfoEmpresaContactos">
                <span>
                <strong>
                    Tel. 813-186-4994<br />
                    813-186-4995<br />
                    818-748-0707<br />
                    www.accredian.com
                </strong>
                </span>
            </td>
            <td class="tdInfoNumberCotizacion">
                <div>
                    <div class="cotWord">COTIZACIÓN</div>
                    <div class="cotNumber">#{{$data['id']}}</div> 
                </div>
            </td>
        </tr>
    </table>
    <table class="tableCabecera">
        <tbody>
            <tr>
                <td style="width: 6%;"> <strong>  Cliente: </strong></td>
                <td style="width: 30%; text-align: left;" colspan="3">{{$data['has_cliente']['datos_fisicos_requeremientos_facturacion_razon_social']}}</td>
                <td style="width: 4%;"> <strong>  Fecha: </strong> </td>
                <td style="width: 3%; text-align: left;" colspan="3">{{substr($data['created_at'], 0, 10)}}</td>
            </tr>
            <tr>
                <td style="width: 3%;"> <Strong> Dirección Fiscal: </Strong></td>
                <td style="width: 3%; text-align: left" colspan="3">
                    {{$data['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle']}}
                    {{$data['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_numero']}}
                    {{$data['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia']}}
                    {{$data['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad']}}
                    {{$data['has_cliente']['datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado']}}
                </td>
                <td style="width: 3%;"> <strong>  Moneda: </strong></td>
                <td style="width: 3%;text-align: left" colspan="3">{{$data['has_moneda']['clave']}}</td>
            </tr>
            <tr>
                <td style="width: 3%;"> <strong>  Dirección Sucursal: </strong></td>
                <td style="width: 3%; text-align: left" colspan="3">
                @if($data['belongs_to_sucursal_cliente'])
                    {{  array_key_exists("nombre_sucursal",$data['belongs_to_sucursal_cliente']) ? $data['belongs_to_sucursal_cliente']['direccion_sucursal'] : '' }}  
                @endif
                </td>
                <td style="width: 3%;"> <strong> Tipo de Servicio: </strong> </td>
                <td style="width: 3%; text-align: left" colspan="3">{{$data['tipo_de_servicio']}}</td>
            </tr>
            <tr>
                <td style="width: 3%;"> <strong>  Contacto: </strong></td>
                <td style="width: 3%; text-align: left" colspan="3"> {{$data['contacto']}}</td>
                <td style="width: 6%;"> <strong> Tiempo Entrega: </strong></td>
                <td style="width: 3%; text-align: left" colspan="3"> {{$data['has_tiempo_de_entrega']['nombre']}}</td>
            </tr>
            <tr>
                <td style="width: 3%;"> <strong>  Email: </strong></td>
                <td style="width: 3%; text-align: left"> {{$data['contacto_correo']}}</td>
                <td style="width: 3%;"> <strong>  Teléfono: </strong> </td>
                <td style="width: 3%; text-align: left">{{$data['contacto_telefono']}}</td>
                <td style="width: 7%; "> <strong> Codiciones de pago: </strong> </td>
                <td style="width: 6%; text-align: left">{{$data['condicion']}}</td>
                <td style="width: 3%;"></td>
                <td style="width: 3%; text-align: left"></td>
            </tr>
        </tbody>
    </table>
    <table class="tableCuerpoItems" cellspacing=0>
        <thead class="tableCuerpoItems_head">
            
            <tr class="tableCuerpoItems_head_tr">
                <th>#</th>
                <th>Cant</th>
                <th>Serv</th>
                <th>Instrumento</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Serie</th>
                <th>Alcance</th>
                <th>ID</th>
                <th>Acreditación</th>
                <th>Vigencia</th>
                <th>Precio Unitario</th>
                <th>Importe</th>
            </tr>
        
        </thead>
        <tbody>
            @foreach($data['has_partidas'] as $key => $item)
            <tr class="tableCuerpoItems_body_tr">
                <td>{{$key+1}}</td>
                <td>{{$item['cantidad']}}</td>
                <td>{{substr($item['servicio'], 0, 1)}}</td>
                <td>{{$item['has_intrumento']['nombre']}}</td>
                <td>{{$item['marca']}}</td>
                <td>{{$item['modelo']}}</td>
                <td>{{$item['serie']}}</td>
                <td>{{$item['has_intrumento']['alcance']}}</td>
                <td>{{$item['identificacion']}}</td>
                <td>{{$item['has_intrumento']['has_acreditacion']['nombre']}}</td>
                <td>{{$item['vigencia']}} meses</td>
                <td> {{number_format($item['has_intrumento']['precio_venta'], 2, '.', ',')}}</td>
                <td> {{number_format($item['importe'], 2, '.', ',')}}</td>
            </tr>
            @endforeach
        </tbody>
        <tfoot>
            <tr class="tableCuerpoItems_footer_tr">
                <td></td>
                <td></td>
                <td></td>
                <td colspan="5" style="color: #0095d9; font-weight: bold;">Importe con letra ({{$spell}})</td>
                <td></td>
                <td></td>
                <td></td>
                <td style="text-align: right;"><strong>SubTotal:</strong></td>
                <td>  {{number_format($data['sub_total'], 2, '.', ',')}}</td>
            </tr>
            <tr class="tableCuerpoItems_footer_tr">
                <td></td>
                <td></td>
                <td></td>
                <td colspan="5"></td>
                <td></td>
                <td></td>
                <td></td>
                <td style="text-align: right;"><strong>I.V.A. <small>(16%)</small>:</strong></td>
                <td>    {{number_format($data['iva'], 2, '.', ',')}}</td>
            </tr>
            <tr class="tableCuerpoItems_footer_tr">
                <td colspan="6"><small>Serv: &nbsp; &nbsp; &nbsp; C Calibración &nbsp; &nbsp; &nbsp;R Reparación &nbsp; &nbsp; &nbsp;M Mantenimiento &nbsp; &nbsp; &nbsp;V Venta de Equipo</small></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style="text-align: right;"><strong> Total:</strong></td>
                <td>  {{number_format($data['total'], 2, '.', ',')}}</td>
            </tr>
        </tfoot>
    </table>
    <table class="tableNota">
        <tbody>
            <tr>
                <td> NOTA:<br/>
                <p>{{$data['nota_para_la_cotizacion']}}</p>  
                </td>
                
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
                                <td colspan="5" style="background-color: #cecece; font-size: 18px;  text-align: center; ">Para pagos desde México</td>
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
                </td>
                <td id="pagoEEUU">
                    <table cellspacing=0 style="width: 100%;">
                        <thead>
                            <tr>
                                <td colspan="6" style="background-color: #cecece; font-size: 18px;  text-align: center; "> Para pagos en USD desde USA</td>
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
                                <td style="border: none;" >&nbsp;</td>
                                <td style="border: none;" >&nbsp;</td>
                                <td style="border: none;" >&nbsp;</td>
                                <td style="border: none;" >&nbsp;</td>
                                <td style="border: none;" >&nbsp;</td>
                                <td style="border: none;" >&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table class="tablefirma">
        <tbody>
            <tr>
                <td >
                    <table id="firmaEjecutivoDeVenta">
                        <tbody>
                            <tr>
                                <td>
                                    <br/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <br/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <br/>
                                </td>
                            </tr>
                            <tr>
                                <td>{{$data['has_empleado']['nombre_completo']}}</td>
                            </tr>
                            <tr>
                                <td>_________________________________________________</td>
                            </tr>
                            <tr>
                                <td>Ejecutivo(a) de Ventas</td>
                            </tr>
                            <tr>
                                <td>{{$data['has_empleado']['telefono']}}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td>
                    <table id="firmaAceptarCondiciones">
                        <tbody>
                            <tr>
                                <td>Aceptación de Cotización</td>
                            </tr>
                            <tr style="text-align: left;">
                                <td>Cliente:</td>
                                <td></td>
                            </tr>
                            <tr style="text-align: left;">
                                <td>Puesto:</td>
                                <td></td>
                            </tr>
                            <tr style="text-align: left;">
                                <td>Fecha:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>_________________________________________________</td>
                            </tr>
                            <tr>
                                <td>Firma<br />Al firmar acepto los Términos y Condiciones Generales de Accredian</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
        <table class="teminosYcondiciones page-break">
            <tbody>
                <tr>
                    <td style="text-align: center;" colspan="2">TERMINOS Y CONDICIONES GENERALES</td>
                </tr>
                <tr>
                    <td style="padding-right: 12px;">
                        <div>
                            <strong>1. Términos y condiciones de Pago</strong><br />
                            1.1. Para aclaración de crédito o envío de comprobante de pago, favor de contactar al departamento de cobranza en el correo electrónico: facturacionycobranza@accredian.org .<br />
                            1.2. Favor de verificar con el área de cobranza el estatus de adeudo de su empresa para evitar atrasos en el retorno de sus equipos.<br />
                            1.3. Todas las facturas deberán ser pagadas el mismo año de su emisión.<br />
                    </div>
                        <div>
                            <strong>2. Cotización y servicios adicionales</strong><br />
                            2.1. La cotización tiene una validez de 30 días naturales a partir de su fecha de emisión. <br />
                            <strong> 2.2. Servicio Ordinario: </strong> Tiempo de entrega 3 a 5 días hábiles (según servicio) a partir de la recepción de equipos en nuestras instalaciones y según cantidad de equipos a recibir por remesa. No aplica cuando el equipo requiera ajuste mayor, mantenimiento o reparación.<br />
                            <strong> 2.3. Servicio Urgente:</strong> Tiempo de entrega de 24 horas hábiles a partir de la recepción de equipos en nuestras instalaciones, previa disponibilidad de laboratorio. No aplica cuando el equipo requiera ajuste mayor, mantenimiento o reparación.<br />
                            <strong>2.4. Servicios con tiempo de entrega especial (Mayor):</strong> Algunos de nuestros servicios se ofertan con tiempos de entrega especiales (mayores), para los cuales se tendrá que revisar el tiempo indicado en su cotización o en el cuadro de notas.<br />
                            2.5. Todo servicio cancelado por el cliente antes de que este culmine generará un costo de 25% sobre el servicio. Una vez concluido el servicio éste no podrá cancelar y se deberá pagar el 100%. <br />
                            2.6. En caso estar realizando un servicio en instalaciones del cliente y se presente un atraso por causas ajenas a ACCREDIAN, se cobrará un adicional a lo cotizado, el cual estará sujeto a cantidad de días adicionales. <br />
                            2.7. En el costo del servicio de calibración, se incluye solamente el costo del “ajuste usual” y acostumbrado de los equipos, si el instrumento requiere un ajuste mayor para llevar al equipo dentro de especificaciones y tolerancias, así como limpieza, mantenimiento preventivo o reparación se generará un costo adicional, mismo que será informado en una partida adicional. En los casos en los que ACCREDIAN no cuente con los manuales necesarios, el cliente deberá proporcionarlos.<br />
                            2.8. Los costos para la devolución de equipos de ACCREDIAN a instalaciones del cliente por mensajería, deberán ser cubiertos por el cliente. <br />
                            2.9. El costo por la reimpresión de un certificado de calibración es de $100.00 pesos + IVA. Pago 100% contra entrega.
                    </div>
                        <div>
                            <strong>3. Entrega y Recepción de Equipos en Instalaciones de ACCREDIAN</strong><br />
                            3.1. La recepción de sus equipos en nuestras instalaciones, la emisión de orden de compra o pedido a favor de ACCREDIAN da por hecho que nuestros términos y condiciones han sido aceptados en su totalidad. <br />
                            3.2. En caso de recibir en nuestras instalaciones equipos que cuenten con una cotización vigente, se dará por entendido que dicha cotización se está aceptando en su totalidad, esto siempre y cuando no se indique lo contrario al momento de recibir los equipos o antes de. <br />
                            3.3. Se recomienda que sus instrumentos estén acompañados por el manual de operación y accesorios como: fuente de poder, cables, conexiones, baterías, líquidos o soluciones, etc. Para no extender el tiempo de entrega en caso de necesitarse. <br />
                            3.4. El equipo será entregado o enviado al cliente en las mismas o mejores condiciones de empaque en las cuales fue recibido en ACCREDIAN, por lo cual, se recomienda que inspeccione las condiciones de empaque para envío de sus equipos a nuestras instalaciones. <br />
                            3.5. Se recomienda que la transportación de sus equipos se realice mediante entrega personal en ACCREDIAN o servicios de mensajería especializados cuando aplique. <br />
                    </div>

                    </td>
                    <td style="padding-left: 12px;">
                        <div>
                            <strong>4. Ejecución de Servicios en Instalaciones del Cliente</strong><br />
                            4.1. Todo servicio de calibración en instalaciones del cliente será programado siempre y cuando se haya recibido una orden de compra, pedido o pago.<br />
                            4.2. Los certificados de calibración no son elaborados ni entregados en instalaciones del cliente, estos serían entregado entre 5 y 8 días hábiles después del servicio vía electrónica.<br />
                            4.3. Los instrumentos deberán ser montados y entregados al personal de ACCREDIAN por parte del cliente, en condiciones de limpieza y funcionamiento adecuados para su calibración. <br />
                            4.4. El cliente deberá proporcionar un contacto técnico para las operaciones de logística, acceso a las instalaciones, liberación, desmontaje y montaje de instrumentos, así como su programa de calibración interno tomando en cuenta el tiempo necesario para poder realizar el servicio.<br />
                            4.5. Para la ejecución del servicio se requiere alimentación de 127 Vca cerca del área en donde se realizará el servicio.<br />
                            4.6. ACCREDIAN considera el uso de los siguientes accesorios de protección personal: casco, botas, lentes, vestimenta de algodón, manga larga y guantes de látex, en caso de requerirse equipo especial adicional de limpieza y/o protección para acceso a las instalaciones, éste deberá ser proporcionados por el cliente.<br />
                            4.7. Para algunos servicios el cliente deberá facilitar un área de trabajo con condiciones ambientales controladas, así como mesa de trabajo, suministro eléctrico, iluminación y limpieza adecuado, solo algunos servicios de calibración de instrumentación ordinaria o de baja exactitud se podrán realizar directamente en proceso o línea, de acuerdo con las condiciones de montaje y facilidad de acceso ya que el servicio tiene el alcance para calibrar a una altura no mayor de 1 metro del piso.<br />
                        </div>
                        <div>
                            <strong>5. Responsabilidades durante la realización de los servicios.</strong><br />
                            5.1. En caso de que sus equipos requieran ser conectados a un suministro eléctrico, serán conectados a una alimentación eléctrica con neutro y tierras independientes. La instalación eléctrica de ACCREDIAN cumple con los requisitos de las NOM-001-SEDE-2012. En caso de que los equipos del cliente requieran ser conectados a una alimentación diferente a la de ACCREDIAN, es responsabilidad del cliente informarlo debidamente. Favor de poner atención especial para equipos de fabricación europea. <br />
                            5.2. ACCREDIAN no se hace responsable en caso de siniestro ocurrido a los equipos durante su transportación hacia o desde ACCREDIAN, ya que nuestra responsabilidad se limita únicamente a los instrumentos recibidos en nuestras instalaciones. <br />
                            5.3. ACCREDIAN no se hace responsable en caso de daños debido a vicios ocultos de los instrumentos durante la realización de los servicios. La responsabilidad de ACCREDIAN es en daños por causantes de inadecuada operación y manejo de instrumentos, con límite de responsabilidad obligada en el dispuesto del valor del costo de reparación o en su caso la sustitución de este. <br />
                            5.4. ACCREDIAN no se hace responsable del daño de equipos debido a causas de fuerza mayor. <br />
                            5.5. ACCREDIAN no tiene responsabilidad alguna de equipos que ya fueron liberados y siguen en instalaciones de ACCREDIAN.
                        </div>
                        <div>
                            <strong>6. Protocolo de atención para quejas y/o reclamaciones.</strong><br />
                            6.1. Toda queja y/o reclamación deberá ser presentada por escrito al correo jonathan.coronado@accredian.org. <br />
                            6.2. Para los casos de supuestos daños y/o extravío de equipo, el cliente cuenta con 1 día hábil a partir de la recepción de estos, para ingresar su queja y/o reclamación y que ésta sea atendida.<br />
                            6.3. Para los casos de supuestos errores en los resultados de servicios metrológicos (calibración, caracterización, etc.), el cliente cuenta con 5 días hábiles a partir de la recepción de sus equipos para ingresar su queja y/o reclamación, y que ésta sea atendida.
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
</body>
</div>