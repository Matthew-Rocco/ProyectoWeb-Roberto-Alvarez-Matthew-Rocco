@extends('layouts.master')

@section('contenido')
    <!DOCTYPE html>
    <html>

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{ asset('css/estilo_registrar.css') }}">
    </head>

    <body>
        <form action="iniciar_sesion" method="POST">
            @csrf
            <div class="imgcontainer">
                <img src="{{ asset('img/usuario.png') }}" alt="Avatar" class="avatar">
            </div>
            <div>
                <h1 class="text-center font-bold">INICIAR SESIÓN</h1>
            </div>
            <div class="container">
                
                <label for="email"><b>Correo</b></label>
                <input type="text" placeholder="Ingresar Correo" id="email" name="email" value="{{ old('email') }}"
                    required>

                @error('email')
                    <p class="text-danger text-xs mt-1">{{$message}}</p>
                @enderror

                <label for="password"><b>Contraseña</b></label>
                <input type="password" placeholder="Ingresar Contraseña" id="password" name="password" required>

                @error('password')
                    <p class="text-danger text-xs mt-1">La contraseña debe tener como mínimo 8 caracteres</p>
                @enderror


                <button class="bg-success btn rounded-3 text-white" type="submit" id="registrar-btn">Iniciar Sesión</button>

            </div>
        </form>
    </body>

    </html>

@endsection
