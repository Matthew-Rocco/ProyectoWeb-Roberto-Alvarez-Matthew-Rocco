@extends('layouts.master')

@section('contenido')
    <div class="row p-4">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header colorbg bg-gradient texto text-center">
                    <span>Crear Lista:</span>
                </div>
                <div class="card-body text-center">
                    <button class="btn colorbg texto" id="agregar-btn">+ Crear</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row p-4">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header colorbg bg-gradient texto text-center">
                    <span>Ver Lista:</span>
                </div>
                <div class="card-body text-center" id="listas">
                </div>
            </div>
        </div>
        
        <input type="text" class="form-control d-none" id="correo_usuario"
        value="{{ auth()->user()->email }}">
    </div>
    
@endsection

@section('javascript')
    <script src="{{ asset('js/servicios/componentesService.js') }}"></script>
    <script src="{{ asset('js/servicios/caraccompService.js') }}"></script>
    <script src="{{ asset('js/servicios/listasService.js') }}"></script>
    <script src="{{ asset('js/servicios/marcasService.js') }}"></script>
    <script src="{{ asset('js/servicios/tiposcompService.js') }}"></script>
    <script src="{{ asset('js/lista.js') }}"></script>
@endsection
