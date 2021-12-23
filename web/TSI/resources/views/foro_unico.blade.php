@extends('layouts.master')

@section('contenido')
    
    <div class="row" id="cuerpo">
        <div class="container text-center mt-5 mb-5">
            <img class="mt-5 mb-5" src="https://cedd.net/img/loading.gif" alt="">
        </div>
        
    </div>
    @auth
        <input type="text" class="form-control d-none" id="correo_usuario"
        value="{{ auth()->user()->email }}">
    @endauth
    <input type="text" class="form-control d-none" id="correo_usuario"
    value="">
    
@endsection

@section('javascript')
    <script src="{{ asset('js/servicios/foroService.js') }}"></script>
    <script src="{{ asset('js/servicios/respforoService.js') }}"></script>
    <script src="{{ asset('js/servicios/imagenesService.js') }}"></script>
    <script src="{{ asset('js/servicios/usersService.js') }}"></script>
    <script src="{{ asset('js/foro_unico.js') }}"></script>
@endsection