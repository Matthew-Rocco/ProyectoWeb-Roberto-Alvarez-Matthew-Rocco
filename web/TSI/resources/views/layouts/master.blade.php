<!doctype html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <title>Proyecto TSI</title>
  </head>
  <body>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <div class="container-fluid">
          <a class="navbar-brand" href="{{route('home')}}">
            <img class="logo" src="{{asset('img/logo.png')}}" alt="logo">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="{{route('home')}}">Componentes</a>
              <a class="nav-link" href="{{route('añadir_componentes')}}">Añadir componentes</a>
              <a class="nav-link" href="{{route('mostrar_componentes')}}">Mostrar componentes</a>
              <a class="nav-link" href="{{route('mi_lista')}}">Mis Listas</a>
              <a class="nav-link" href="{{route('mostrar_tienda')}}">Ver Tiendas</a>
              <a class="nav-link" href="{{route('users')}}">Registrar Usuarios</a>
              <a class="nav-link" href="{{route('mostrar_users')}}">Mostrar Usuarios</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main class="container-fluid">
        @yield('contenido')
    </main>

 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="http://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{asset('js/axios_config.js')}}"></script>
    @yield("javascript")
</html>