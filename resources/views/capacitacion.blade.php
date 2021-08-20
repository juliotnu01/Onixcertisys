<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=dervice-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <title>Accredian Page</title>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/estilos.css">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <link href="assets/fonts/Montserrat-Bold.ttf" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
        <link href="assets/fonts/Montserrat-Regular.ttf" rel="stylesheet">
        <link rel="stylesheet" href="assets\css\estilos-mediaquery.css">
</head>

<body>

    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="{{route('calibracion')}}">
                    <img src="assets/img/LogoBlanco.png" alt="">
                </a>
                <button class="navbar-toggler menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <!-- <span class="navbar-toggler-icon"></span> -->
                    <svg xmlns="assets/iconos/list.svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-item dropdown-principal separar-letra" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="assets/iconos/grid-3x3-gap-fill.svg" width="16" height="16" fill="currentColor" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
                                </svg>
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
                            <a class="nav-link separar-letra" href="{{route('calibracion')}}">CALIBRACIÓN</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link separar-letra" href="{{route('capacitacion')}}">CAPACITACIÓN</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link separar-letra" href="{{route('contacto')}}">CONTÁCTANOS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
        
    <!-- primera seccion -->
    <section class="jumbotron">
        <div class="img-bg" style="background-image: url(assets/img/fondo-mundo.jpg)">
            <div class="container principal">
                <div class="info info-cap">
                    <img src="assets/img/LogoBlanco.png" alt="">
                    <h1>CENTRO DE CAPACITACIÓN EN METROLOGÍA Y CALIDAD</h1>
                    <ul>
                        <li>Metrología</li>
                        <li>Laboratorio ISO/IEC 17025:2017</li>
                        <li>Automotriz IATF 16949</li>
                        <li>Calidad ISO-9001</li>
                        <li>Ambiental ISO-14001</li>
                    </ul>
                </div>
                <div class="contacto contacto-cap">
                    <h4>Contáctanos</h4>
                    <div class="items">
                        <div class="contacto-item">
                            <svg xmlns="assets/iconos/telephone-fill.svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <p>81-3186-4994 / 81-3186-4995 / 81-8748-0707</p>
                        </div>
                        <div class="contacto-item">
                            <svg xmlns="assets/iconos/whatsapp.svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                            </svg>
                            <p>81-1555-4669</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container-fluid tipos-cursos">
        <!-- <div class="t-cursos"> -->
            <h2>Cursos</h2>
            <ul>
                <li>Privados en tu Empresa</li>
                <li>Públicos Presenciales</li>
                <li>Online/ Livestream</li>
            </ul>
        <!-- </div> -->
    </section>

    <!-- <section id="sectionCursos">
        <div class="container">
            <div class="row" style="font-size: 30px;">
                <div class="col col-12">
                    <p>
                        Cursos:
                    </p>
                </div>
            </div>
            <div class="row" style="text-align: center; font-size: 30px;">
                <div class="col col-4">
                    <ul>
                        <li style="    list-style-position: inside;">
                            Privados en tu Empresa
                        </li>
                    </ul>
                </div>
                <div class="col col-4">
                    <ul>
                        <li style="    list-style-position: inside;">
                            Públicos Presenciales
                        </li>
                    </ul>
                </div>
                <div class="col col-4">
                    <ul>
                        <li style="    list-style-position: inside;">
                            Online/ Livestream
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section> -->

    <section class="container-fluid catalogo-cursos">
        <div class="row cursos-row">
            <div class="col col-3 cursos-col">
                <img src="assets/img/magnitudes.png" alt="Magnitudes">
            </div>
            <div class="col col-9 cursos-col cursos-col2">
                <h2 class="cursos-marginb">CATÁLOGO DE CURSOS</h2>
                <div class="row cursos-marginb2">
                    <h4 class="col col-8">Curso</h4>
                    <h4 class="col col-4">Duración</h4>
                </div>
                <div class="row cursos-sec">
                    <div class="titulo-sec">
                        <img src="assets/img/logo solo-cutout.png" alt="">
                        <h3>METROLOGÍA</h3>
                    </div>
                    <div class="row cont-sec">
                        <ul class="col col-8 col1">
                            <li>Básico de Metrología</li>
                            <li>Taller de Gestión de Riesgos Metrológicos</li>
                            <li>Taller de Intervalos de Calibración (Métodos OIMLD 10)</li>
                            <li>Interpretación de los Certificados de Calibración</li>
                            <li>Estimación de la Incertidumbre de las Mediciones</li>
                            <li>Uso, Manejo y Cuidados de Instrumentos de Medición</li>
                            <li>Calibración y Verificación de Instrumentos de Medición</li>
                        </ul>
                        <ul class="col col-4">
                            <li>1 día</li>
                            <li>1 día</li>
                            <li>1 día</li>
                            <li>1 día</li>
                            <li>3 días</li>
                            <li>2 días</li>
                            <li>3 días</li>
                        </ul>
                    </div>
                </div>
                <div class="row cursos-sec">
                    <div class="titulo-sec">
                        <img src="assets/img/logo solo-cutout.png" alt="">
                        <h3>LABORATORIOS ISO/IEC 17025:2017</h3>
                    </div>
                    <div class="row cont-sec">
                        <ul class="col col-8 col1">
                            <li>Norma ISO/IEC 17025:2017</li>
                            <li>Auditor Interno ISO/IEC 17025:2017</li>
                        </ul>
                        <ul class="col col-4">
                            <li>2 días</li>
                            <li>3 días</li>
                        </ul>
                    </div>
                </div>
                <div class="row cursos-sec">
                    <div class="titulo-sec">
                        <img src="assets/img/logo solo-cutout.png" alt="">
                        <h3>AUTOMOTRIZ IATF-16949</h3>
                    </div>
                    <div class="row cont-sec">
                        <ul class="col col-8 col1">
                            <li>Norma IATF-16949</li>
                            <li>Auditor Interno IATF-16949</li>
                            <li>Core Tools Fundamentos</li>
                            <li>Core Tools Taller</li>
                            <li>Taller de APQP/CP/PPAP</li>
                            <li>Taller de AMEF-VDA</li>
                            <li>Taller SPC</li>
                            <li>Taller MSA</li>
                        </ul>
                        <ul class="col col-4">
                            <li>2 días</li>
                            <li>3 días</li>
                            <li>1 día</li>
                            <li>1 día</li>
                            <li>3 días</li>
                            <li>2 días</li>
                            <li>2 días</li>
                            <li>3 días</li>
                        </ul>
                    </div>
                </div>
                <div class="row cursos-sec">
                    <div class="titulo-sec">
                        <img src="assets/img/logo solo-cutout.png" alt="">
                        <h3>CALIDAD ISO-9001</h3>
                    </div>
                    <div class="row cont-sec">
                        <ul class="col col-8 col1">
                            <li>Norma ISO-9001</li>
                            <li>Auditor Interno ISO-9001</li>
                        </ul>
                        <ul class="col col-4">
                            <li>2 días</li>
                            <li>3 días</li>
                        </ul>
                    </div>
                </div>
                <div class="row cursos-sec">
                    <div class="titulo-sec">
                        <img src="assets/img/logo solo-cutout.png" alt="">
                        <h3>AMBIENTAL ISO-14001</h3>
                    </div>
                    <div class="row cont-sec">
                        <ul class="col col-8 col1">
                            <li>Norma ISO-14001</li>
                            <li>Auditor Interno ISO-14001</li>
                        </ul>
                        <ul class="col col-4">
                            <li>2 días</li>
                            <li>3 días</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- <section id="sectionCatalogosDeCursos">
        <div class="row">
            <div class="col col-3 " height="100%">
                <img src="assets/img/magnitudes.png" alt="Magnitudes" width="60%">
            </div>
            <div class="col col-9">
                <table id="tablaCursos">
                    <thead>
                        <th>
                            <tr>
                                <td colspan="2" id="titulosTablaCursos" style="letter-spacing: 3px; font-size: 30px;"> 
                                    <p>CATÁLOGO DE CURSOS</p>      
                                </td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold;">
                                    Curso
                                </td>
                                <td style="font-weight: bold;">
                                    Duración
                                </td>
                            </tr>
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="2" id="titulosTablaCursos">
                                    <img src="assets/img/logo solo-cutout.png" alt="" width="20" style="position: relative; top: 55%; left: -3%;">
                                    <p>METROLOGÍA</p>
                                </td>
                        </tr>
                        <tr>
                            <td width="800">Básico de Metrología</td>
                            <td>1 días</td>
                        </tr>
                        <tr>
                            <td>Taller de Gestión de Riesgos Metrológicos</td>
                            <td>1 días</td>
                        </tr>
                        <tr>
                            <td>Taller de Intervalos de Calibración (Métodos OIMLD 10)</td>
                            <td>1 días</td>
                        </tr>
                        <tr>
                            <td>Interpretación de los Certificados de Calibración</td>
                            <td>1 días</td>
                        </tr>
                        <tr>
                            <td>Estimación de la Incertidumbre de las Mediciones</td>
                            <td>3 días</td>
                        </tr>
                        <tr>
                            <td>Uso, Manejo y Cuidados de Instrumentos de Medición</td>
                            <td>2 días</td>
                        </tr>
                        <tr>
                            <td>Calibraicon y Verificación de Instrumentos de Medición</td>
                            <td>3 días</td>
                        </tr>
                        <tr>
                            <td colspan="2" id="titulosTablaCursos">
                            <img src="assets/img/logo solo-cutout.png" alt="" width="20" style="position: relative; top: 55%; left: -3%;">
                                <p>    
                            LABORATORIOS ISO/IEC-17025
                            </p>
                        </td>
                        </tr>
                        <tr>
                            <td>Norma ISO/IEC-17025 </td>
                            <td>2 días</td>
                        </tr>
                        <tr>
                            <td>Auditor Interno ISO/IEC-17025 </td>
                            <td>3 días</td>
                        </tr>
                        <tr>
                            <td colspan="2" id="titulosTablaCursos">
                                <img src="assets/img/logo solo-cutout.png" alt="" width="20" style="position: relative; top: 55%; left: -3%;">
                                <p>
                                    AUTOMOTRIZ IATF-16949
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Norma IATF-16949</td>
                            <td>2 días</td>
                        </tr>
                        <tr>
                            <td>Auditor Interno IATF-16949</td>
                            <td>3 días</td>
                        </tr>
                        <tr>
                            <td>Core Tools Fundamentos</td>
                            <td>1 días</td>
                        </tr>
                        <tr>
                            <td>Core Tools Taller</td>
                            <td>1 días</td>
                        </tr>
                        <tr>
                            <td>Taller de APQP/CP/PPAP</td>
                            <td>3 días</td>
                        </tr>
                        <tr>
                            <td>Taller de AMEF-VDA</td>
                            <td>2 días</td>
                        </tr>
                        <tr>
                            <td>Taller SPC</td>
                            <td>2 días</td>
                        </tr>
                        <tr>
                            <td>Taller MSA</td>
                            <td>3 días</td>
                        </tr>
                        <tr>
                            <td colspan="2" id="titulosTablaCursos" >
                                    <img src="assets/img/logo solo-cutout.png" alt="" width="20" style="position: relative; top: 55%; left: -3%;">
                                    <p>CALIDAD ISO-9001 </p>
                                </td>
                        </tr>
                        <tr>
                            <td>Norma ISO-9001 </td>
                            <td>2 días</td>
                        </tr>
                        <tr>
                            <td>Auditor Interno ISO-9001</td>
                            <td>3 días</td>
                        </tr>
                        <tr>
                            <td colspan="2" id="titulosTablaCursos"> 
                                <img src="assets/img/logo solo-cutout.png" alt="" width="20" style="position: relative; top: 55%; left: -3%;">
                                <p>
                                    AMBIENTAL ISO-14001
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Norma ISO-14001 </td>
                            <td>2 días</td>
                        </tr>
                        <tr>
                            <td>Auditor Interno ISO-14001</td>
                            <td>3 días</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section> -->

    <!-- Seccion solicitar Temario o Cotizacion -->
    <!-- <section id="cotizacionDeCurso">
        <div class="container">
            <div class="row" id="rowBotononesCotizacionDeCurso">
                <div class="col col-6">
                    <button id="SolicitarTemario">Solicitar Temario(s)</button>
                </div>
                <div class="col col-6">
                    <button id="solicitarCotizacion">Solicitar Cotización</button>
                </div>
            </div>
            <div class="row" id="rowTableCotizacionDecurso">
                <div class="col col-12">
                    <table id="tableCotizacionDeCurso">
                        <thead>
                            <tr>
                                <th>
                                    Curso
                                </th>
                                <th>
                                    Modalidad
                                </th>
                                <th>
                                    Participantes
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <input id="inputCotizaicon" type="text"> </td>
                                <td> <input id="inputCotizaiconM" type="text"> </td>
                                <td> <input id="inputCotizaiconP" type="text"> </td>
                            </tr>
                            <tr>
                                <td> <input id="inputCotizaicon" type="text"> </td>
                                <td> <input id="inputCotizaiconM" type="text"> </td>
                                <td> <input id="inputCotizaiconP" type="text"> </td>
                            </tr>
                            <tr>
                                <td> <input id="inputCotizaicon" type="text"> </td>
                                <td> <input id="inputCotizaiconM" type="text"> </td>
                                <td> <input id="inputCotizaiconP" type="text"> </td>
                            </tr>
                            <tr>
                                <td> <input id="inputCotizaicon" type="text"> </td>
                                <td> <input id="inputCotizaiconM" type="text"> </td>
                                <td> <input id="inputCotizaiconP" type="text"> </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section> -->

    <section class="jumbotron">
        <div class="img-bg" style="background-image: url(assets/img/fondo-mundo.jpg)">
            <div class="container principal">
                <div class="info info-cap">
                    <img src="assets/img/LogoBlanco.png" alt="">
                    <h1>CENTRO DE CAPACITACIÓN EN METROLOGÍA Y CALIDAD</h1>
                    <ul>
                        <li>Instructores de Primer Nivel</li>
                        <li>Amplio Catálogo de Cursos</li>
                        <li>Múltiples Modalidades de Impartición</li>
                        <li>Costo Competitivo</li>
                    </ul>
                </div>
                <div class="contacto contacto-cap2">
                    <p class="p-experiencia">Nuestra experiencia practica a tu alcance</p>
                    <h4>Contáctanos</h4>
                    <div class="items">
                        <div class="contacto-item">
                            <svg xmlns="assets/iconos/telephone-fill.svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <p>81-3186-4994 / 81-3186-4995 / 81-8748-0707</p>
                        </div>
                        <div class="contacto-item">
                            <svg xmlns="assets/iconos/whatsapp.svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                            </svg>
                            <p>81-1555-4669</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <a href="https://api.whatsapp.com/send?phone=528115554669" class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
    </a>
    
    <!-- ============================= FOOTER ============================= -->
    <footer class="footer pt-150 gray-bg">
        <div class="contfooter container-fluid">
            <div class="row rowfooter">
                <div class="col-xl-12 colfooter">
                    <div class="footer-links text-center">
                        <a href="{{route('calibracion')}}">
                            <img src="assets/img/Logo.png" alt="Logo Acrredian"> 
                        </a>
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