<!doctype html>
<html lang="es">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/estilo.css') }}">
    <title>Proyecto TSI</title>
</head>

<body>
    <header>
        <nav class="navbar estilonavbar navbar-expand-lg navbar-light bg-gradient top-0">
            <div class="container-fluid">
                <a class="navbar-brand" href="{{ route('home') }}">
                    <img class="logo" src="{{ asset('img/logo.png') }}" alt="logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse row gx-5" id="navbarNavAltMarkup">
                    <div class="col-10">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" style="color:white" aria-current="page"
                                    href="{{ route('home') }}">Componentes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" style="color:white" href="{{ route('añadir_componentes') }}">Añadir
                                    componentes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" style="color:white" href="{{ route('mostrar_componentes') }}">Mostrar
                                    componentes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" style="color:white" href="{{ route('mi_lista') }}">Mis Listas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" style="color:white" href="{{ route('mostrar_tienda') }}">Ver Tiendas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" style="color:white" href="{{ route('mostrar_users') }}">Ver usuarios</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <img class="login" src="{{ asset('img/usuario.png') }}" alt="usuario">
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="nav-link active text-dark" href="{{ route('users') }}">Iniciar Sesión</a></li>
                            <li><a class="nav-link active text-dark" href="{{ route('registrar_users') }}">Registrarse</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main class="container-fluid">
        @yield('contenido')
    </main>

    <footer class="container-fluid estilofooter mt-5 bottom-0">
        <div class="row p-2 pb-4">
            <div class="col-6">
                <h2 class="titulofooter">Sobre Nosotros</h2>
                <p class="texto">Nuestra misión es ayudar a los consumidores a escoger el producto perfecto
                    para sus necesidades y presupuesto.</p>
                <a class="texto" href="https://www.google.com">Términos y condiciones</a>
            </div>
            <div class="col-6">
                <h2 class="titulofooter">Contacto</h2>
                <p class="texto">¿Problemas con nuestra página?</p>
                <a class="texto" href="https://www.google.com">Contáctanos aquí</a>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <script src="http://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{ asset('js/axios_config.js') }}"></script>
    @yield("javascript")
</body>

</html>
