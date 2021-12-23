@extends('layouts.master')

@section('contenido')
    <div class="row p-4">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header colorbg bg-gradient texto text-center">
                    <span>Crear y agregar:</span>
                </div>
                <div class="card-body text-center">
                    <button class="btn colorbg texto">+ Crear</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row p-4">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header colorbg bg-gradient texto text-center">
                    <span>Agregar:</span>
                </div>
                <div class="card-body text-center" id="listas">
                </div>
            </div>
        </div>
    </div>
    
@endsection

@section('javascript')
    <script src="{{ asset('js/servicios/componentesService.js') }}"></script>
    <script src="{{ asset('js/servicios/listasService.js') }}"></script>
    <script src="{{ asset('js/servicios/marcasService.js') }}"></script>
    <script src="{{ asset('js/servicios/tiposcompService.js') }}"></script>
@endsection
