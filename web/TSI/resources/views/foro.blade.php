@extends('layouts.master')

@section('contenido')
    @auth
        <div class="m-5 text-center">
            <button type="button" id="agregar-foro" class="btn colorbg bg-gradient texto m-4">+ Agregar nuevo hilo de foro</button>
        </div>
    @endauth
    
    <div class="m-5 p-5 text-center" id="cuerpo">
    </div>
    <div class="text-center">
        <button id="subir-btn" class="btn btn-secondary" type="button">Subir</button>
    </div>
@endsection

@section('javascript')
    <script src="https://tholman.com/elevator.js/elevator.js"></script>
    <script>
        window.onload = function subirPagina() {
            let elevator = new Elevator({
                element: document.querySelector("#subir-btn")
            });
        }
    </script>
    <script src="{{ asset('js/servicios/foroService.js') }}"></script>
    <script src="{{ asset('js/foro.js') }}"></script>
@endsection