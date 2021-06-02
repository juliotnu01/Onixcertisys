<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta:viewport name"viewport" content="width=dervice-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <title>Accredian Page</title>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/estilos.css">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <link href="assets/fonts/Montserrat-Bold.ttf" rel="stylesheet">

</head>

<body style="padding: 0px !important;" >
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="{{route('calibracion')}}">
                        <img src="assets/img/LogoBlanco.png" alt="">
                        <!-- imagen accredian -->
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-item dropdown-principal" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="img/grid-3x3-gap-fill.svg" width="16" height="16" fill="currentColor" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                                        <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
                                    </svg>
                                    <!-- <span class="bi bi-grid-3x3-gap-fill"></span> -->
                                    SERVICIOS
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="{{route('calibracion')}}">Calibración</a></li>
                                    <li><a class="dropdown-item" href="{{route('capacitacion')}}">Capacitación</a></li>
                                    <li><a class="dropdown-item" href="{{route('mantenimiento')}}">Mantenimiento y Reparación</a></li>
                                    <li><a class="dropdown-item" href="{{route('venta')}}">Venta Equipos </a></li>
                                    <!-- <li><hr class="dropdown-divider"></li> -->
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CALIBRACION</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{route('capacitacion')}}">CAPACITACIÓN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{route('contacto')}}">CONTACTANOS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <section class="jumbotron img-bg" style="background-image: url(assets/img/fondo-mundo.jpg)">
            <div class="container principal">
                <div class="info">
                    <img src="assets/img/LogoBlanco.png" alt="">
                    <h1>HUB DE METROLOGÍA</h1>
                    <ul>
                        <li>Laboratorio de Calibración Acreditado</li>
                        <li>Centro de Capacitación</li>
                        <li>Programa de Mantenimiento y Reparación Equipos</li>
                        <li>Equipamos tu Laboratorio</li>
                    </ul>
                </div>
                <div class="contacto">
                    <h4>Contáctanos</h4>
                    <p>
                        <svg xmlns="assets/img/telephone-fill.svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                        81-3186-4994 / 81-3186-4995 / 81-8748-0707
                        <br>
                        <svg xmlns="assets/img/whatsapp.svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                        81-1555-4669
                    </p>
                </div>
            </div>
        </section>

        <section id="sectionCalibracion">
            <div>
                <div class="row">
                    <div class="col col-8 ">
                        <div id="contenedorLaboratorio">
                            <h1 style="color: #003177">LABORATORIO DE CALIBRACIÓN<br>ACREDITADO ISO/IEC-17025:2017</h1>
                            <ul style="color: #003177" id="listaCalibracion">
                                <li style="color: #003177; font-size: 20px; lef: "  >Tecnología de Última Generación</li>
                                <li style="color: #003177; font-size: 20px; lef: " >El mas amplio alcance acreditado en Dimensional</li>
                                <li style="color: #003177; font-size: 20px; lef: " >El mas amplio alcance acreditado en Presión con trazabilidad directa al CENAM</li>
                                <li style="color: #003177; font-size: 20px; lef: " >Confiabilidad Acreditada</li>
                                <li style="color: #003177; font-size: 20px; lef: " >Trazabilidad al NIST y CENAM con MRA ante la ILAC</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col col-4 ">
                        <div class="row">
                            <div class="col col-6" style="text-align: right;">
                                <img src="assets/img/ILAC.png" alt="ILAC" width="100" >
                            </div>
                            <div class="col col-6">
                                <img src="assets/img/PJLA.png" alt="PJLA" width="100">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="magnitudes">
                <div class="container">
                    <div class="row">
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno">
                                    <img src="assets/img/magnitudes/dimensional.png" alt="" height="22px" style="transform: translate(-50%, 20%); position: relative; left: 50%;">
                                </div>
                            </div>
                            <div id="itemTitulo">Dimensional</div>
                            <div id="ItemSubTitulo">1.2m/48"</div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno">
                                <img src="assets/img/magnitudes/temperatura.png" alt="" height="22px" style="transform: translate(-50%, 20%); position: relative; left: 50%;">
                                </div>
                            </div>
                            <div id="itemTitulo">Temperatura</div>
                            <div id="ItemSubTitulo">-80°C a 1250°C</div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno">
                                    <img src="assets/img/magnitudes/electrica.png" alt="" height="22px" style="transform: translate(-50%, 20%); position: relative; left: 50%;">
                                </div>
                            </div>
                            <div id="itemTitulo">Eléctrica</div>
                            <div id="ItemSubTitulo">Bajo y alto Voltaje, Corriente, Resistencia y Capacitancia, Simulación -200°C a 1,800°C</div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno">
                                <img src="assets/img/magnitudes/presion.png" alt="" height="22px" style="transform: translate(-50%, 20%); position: relative; left: 50%;">
                                </div>
                            </div>
                            <div id="itemTitulo">Presión</div>
                            <div id="ItemSubTitulo">-12 psi a 30,000 psi</div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno">
                                <img src="assets/img/magnitudes/masa.png" alt="" height="20px" style="transform: translate(-50%, 20%); position: relative; left: 50%;">
                                </div>
                            </div>
                            <div id="itemTitulo">Masa</div>
                            <div id="ItemSubTitulo">Instrumentos para Pesar 5,000kg Pesas 1 a 20kg (M1 - M3)</div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno">
                                <img src="assets/img/magnitudes/partorsional.png" alt="" height="22px" style="transform: translate(-50%, 20%); position: relative; left: 50%;">
                                </div>
                            </div>
                            <div id="itemTitulo">Par Torsial</div>
                            <div id="ItemSubTitulo">16,270 N m <br /> (12,000 Ibs-ft)</div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno">
                                <img src="assets/img/magnitudes/viscosidad.png" alt="" height="22px" style="transform: translate(-50%, 20%); position: relative; left: 50%;">
                                </div>
                            </div>
                            <div id="itemTitulo">Viscosidad</div>
                            <div id="ItemSubTitulo">100 - 25,000 cP @20°C</div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno">
                                <img src="assets/img/magnitudes/quimica.png" alt="" height="22px" style="transform: translate(-50%, 20%); position: relative; left: 50%;">
                                </div>
                            </div>
                            <div id="itemTitulo">Quimica</div>
                            <div id="ItemSubTitulo">4.0 pH / 7.0 pH / 10.0 pH, 99 µS/cm - 1,400 µS/cm - 100,000 µS/cm</div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno">
                                <img src="assets/img/magnitudes/dureza.png" alt="" height="22px" style="transform: translate(-50%, 20%); position: relative; left: 50%;">
                                </div>
                            </div>
                            <div id="itemTitulo">Dureza</div>
                            <div id="ItemSubTitulo">20 - 100 HRB <br /> 20 - 77HRC</div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno"><img src="assets/img/magnitudes/humedad.png" alt="" height="22px" style="transform: translate(-50%, 20%); position: relative; left: 50%;"></div>
                            </div>
                            <div id="itemTitulo">Humedad & Temperatura</div>
                            <div id="ItemSubTitulo"> 0 - 8HR <br /> -20°C a 60°C</div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno">
                                <img src="assets/img/magnitudes/tiempoyfrecuencia.png" alt="" height="20px" style="transform: translate(-50%, 20%); position: relative; left: 50%;">
                                </div>
                            </div>
                            <div id="itemTitulo">Tiempo y Frecuencia</div>
                            <div id="ItemSubTitulo"> 1 - 86-400s <br /> 112 - 28,800 rmp</div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno">
                                <img src="assets/img/magnitudes/fuerza.png" alt="" height="22px" style="transform: translate(-50%, 20%); position: relative; left: 50%;">
                                </div>
                            </div>
                            <div id="itemTitulo">Fuerza</div>
                            <div id="ItemSubTitulo"> 980Kn <br /> (10,000 kgf) </div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno" >
                                <img src="assets/img/magnitudes/volumen.png" alt="" height="22px" style="transform: translate(-50%, 20%); position: relative; left: 50%;">
                                </div>
                            </div>
                            <div id="itemTitulo">Volumen</div>
                            <div id="ItemSubTitulo"> 10 mL a 2 L </div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno" style="background-color: white;"></div>
                            </div>
                            <div id="itemTitulo">Óptica</div>
                            <div id="ItemSubTitulo"></div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno" style="background-color: white;"></div>
                            </div>
                            <div id="itemTitulo">Flujo</div>
                            <div id="ItemSubTitulo"></div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno" style="background-color: white;"></div>
                            </div>
                            <div id="itemTitulo">Densidad</div>
                            <div id="ItemSubTitulo"></div>
                        </div>
                        <div id="itemMag" class="col col-3 ">
                            <div id="circleExterno">
                                <div id="circleInterno" style="background-color: white;"></div>
                            </div>
                            <div id="itemTitulo" >Acústica</div>
                            <div id="ItemSubTitulo"></div>
                        </div>
                        <div id="itemMag" class="col col-12 ">
                            <div id="circleExterno" style="position: relative;left: 1%; width: 25px; height: 25px;">
                                <div id="circleInterno" style="position: relative; left: 46%; width: 15px; height: 15px; background-color: white"></div>
                            </div>
                            <div id="itemTitulo" style="text-align: left; position: relative; top: -25px; left: 31px; ">Magnitudes Subcontratadas Acreditadas</div>
                            <div id="ItemSubTitulo"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="sectionCalibracion">

        </section>
        <section class="jumbotron img-bg" style="background-image: url(assets/img/fondo-mundo.jpg)">
            <div class="container principal">
                <div class="info">
                    <img src="assets/img/LogoBlanco.png" alt="">
                    <h1>LABORATORIO DE CALIBRACÓN</h1>
                    <ul>
                        <li>Tecnología de Última generación</li>
                        <li>El mas amplio alcance acreditado en Dimensional</li>
                        <li>El mas amplio alcance acreditado en Presion con trasabilidad directa al CENAM</li>
                        <li>Confiabilidad Acreditada</li>
                        <li>Trasabilidad al NIST y CENAM con MRA ante la ILAC</li>
                    </ul>
                </div>
                <div class="contacto">
                    <h4>Cotizaciones</h4>
                    <p>
                        <svg xmlns="assets/img/telephone-fill.svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                        81-3186-4994 / 81-3186-4995 / 81-8748-0707
                        <br>
                        <svg xmlns="assets/img/whatsapp.svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                        81-1555-4669
                    </p>
                </div>
            </div>
        </section>
        <a href="https://api.whatsapp.com/send?phone=528115554669" class="float" target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
        </a>
        <footer class="footer pt-150 gray-bg" style="background: white;">
            <div class="contfooter>
                <div class="row rowfooter">
                    <div class="col-xl-12 colfooter">
                        <div class="footer-links text-center">
                            <a href="index.html" class="logo"><img src="assets/img/Logo.png" alt="Logo acrredian"> </a>
                        </div>
                    </div>
                </div>
                <div class="copyright-area text-center">
                    <p class="mb-0">© Accredian, S. DE R.L. DE C.V.</p>
                </div>
            </div>
        </footer>
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
</body>

</html>