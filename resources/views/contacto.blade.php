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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
        <link href="assets/fonts/Montserrat-Regular.ttf" rel="stylesheet">
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
    <section class="jumbotron img-bg img-mty" style="background-image: url(assets/img/mty-fondo.jpeg)">
        <div class="container-fluid">
            <div class="logo">
                <div class="logo-fondo">
                    <img class="" src="assets/img/Logo.png" alt="">
                </div>
            </div>
            <div class="contacto contacto-mty">
                <div class="contacto-fondo">
                    <h4>Contáctanos</h4>
                    <div class="items">
                        <div class="contacto-item">
                            <svg xmlns="assets/iconos/telephone-fill.svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <p>81-3186-4994 / 81-3186-4995 / 81-8748-0707 </p>
                        </div>
                        <div class="contacto-item">
                            <svg xmlns="assets/iconos/whatsapp.svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                            </svg>
                            <p>81-1555-4669</p>
                        </div>
                        <!-- <div class="contacto-item">
                            <svg xmlns="assets/iconos/envelope-fill.svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                            </svg>
                            <p>claudia.martinez@accredian.org</p>
                        </div> -->
                        <div class="contacto-item">
                            <svg xmlns="assets/iconos/geo-alt-fill.svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                            <p>Calle 24 #600, Residencial Las Puentes<br>3er Sector, San Nicolas de los Garza, N.L. MX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- <section class="jumbotron img-bg" style="background-image: url(assets/img/mty-fondo.jpeg); ">
        <div class="container principal">

            <div class="info" style="background: white; border-radius: 80px 80px 80px 80px; width: 560px;">
                <img src="img/login-logo.png" alt="" style="position: relative; left: 35px;">
            </div>
            <div class="contacto">
            </div>
            <div id="contactanos">
                <h4>Contáctanos</h4>
                <div> <img src="assets/iconos/telephone-fill.svg" alt=""> 81-3186-4994/81-3186-4995 / 81-8748007</div>
                <div><img src="assets/iconos/whatsapp.svg" alt=""> 81-1555-4669</div>
                <div> <img src="assets/iconos/geo-alt-fill.svg" alt=""> Calle 24 #600, Residencial Las Puentes <br /> 3er Sector, San Nicolas de los Garza, N.L. Mx</div>
            </div>
        </div>
    </section> -->

    <section class="container-fluid">
        <div class="row">
            <img class="img-form col-3" src="assets/img/magnitudes-fondo.png" alt="">
            <form class="formulario col-9" action="mailto:griselda.garcia@bqsenergy.com" method="POST" enctype="text/plain" id="form-correo">
                <!-- <div class="formulario col-9"> -->
                    <div class="row">
                        <div class="col-6">
                            <p>Correo Electronico</p>
                            <input class="form-control" type="email" name="Correo Electronico">
                        </div>
                        <div class="col-6">
                            <p>Empresa</p>
                            <input class="form-control" type="text" name="Empresa">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p>Mensaje</p>
                            <textarea class="form-control" name="Mensaje" id="" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="row btn-enviar">
                        <input type="submit" value="Enviar">
                    </div>
                <!-- </div> -->
            </form>
        </div>
    </section>

    <!-- <section id="sectionContacto">
        <div class="row">
            <div class="col col-3 " height="100%">
                <img src="assets/img/magnitudes-fondo.png" alt="Magnitudes" width="60%">
            </div>
            <div class="col col-9">
                <form method="POST" action="{{route('send.mail.contacto')}}">
                @csrf
                    <div class="row" style="    padding: 100px;">
                        <div class="col col-6">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Correo Electronico</label>
                                <input type="email" class="form-control" id="inputs" placeholder="" name="correo">
                            </div>
                        </div>
                        <div class="col col-6">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Empresa</label>
                                <input type="text" class="form-control" id="inputs" placeholder="" name="empresa">
                            </div>
                        </div>
                        <div class="col col-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mensaje</label>
                                <textarea class="form-control" id="inputs2" rows="3" placeholder="" name="descripcion"></textarea>
                            </div>
                        </div>
                        <div class="col col-12">
                            <button id="SolicitarTemario" type="submit">Enviar</button>
                        </div>
                        <div class="col col-12">
                            @if(Session::has('message'))
                            <div class="alert alert-primary" role="alert">
                                {{ Session::get('message') }}
                            </div>
                            @endif
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section> -->

    <a href="https://api.whatsapp.com/send?phone=528115554669" class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
    </a>

    <!-- ============================= FOOTER ============================= -->
    <footer class="footer pt-150 gray-bg">
        <div class="contfooter container-fluid">
            <div class="row rowfooter">
                <div class="col-xl-12 colfooter">
                    <div class="footer-links text-center">
                        <a href="{{route('calibracion')}}" class="logo">
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