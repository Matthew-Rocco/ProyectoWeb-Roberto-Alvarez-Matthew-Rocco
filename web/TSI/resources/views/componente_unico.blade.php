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
    <script src="{{ asset('js/servicios/componentesService.js') }}"></script>
    <script src="{{ asset('js/servicios/valoracionService.js')}}"></script>
    <script src="{{ asset('js/servicios/marcasService.js') }}"></script>
    <script src="{{asset('js/servicios/tiposcompService.js')}}"></script>
    <script src="{{asset('js/servicios/caraccompService.js')}}"></script>
    <script src="{{asset('js/servicios/caracteristicasService.js')}}"></script>
    <script src="{{asset('js/servicios/listasService.js')}}"></script>
    <script src="{{ asset('js/servicios/tiendasService.js')}}"></script>
    <script src="{{asset('js/servicios/comptiendaService.js')}}"></script>
    <script src="{{asset('js/servicios/imagenesService.js')}}"></script>
    <script src="{{ asset('js/componente_unico.js') }}"></script>
    <script src="{{asset('js/marcas.js')}}"></script>
@endsection