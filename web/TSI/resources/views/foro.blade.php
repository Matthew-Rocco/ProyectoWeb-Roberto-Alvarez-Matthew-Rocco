@extends('layouts.master')

@section('contenido')
    @auth
        <div class="m-5 text-center">
            <button type="button" class="btn colorbg bg-gradient texto m-4">+ Agregar nuevo hilo de foro</button>
        </div>
    @endauth

    @guest
        <div class="m-5 p-5 text-center">
        </div>
    @endguest
    
    <div class="m-5 p-5 text-center">
        <h1 class="m-5 pb-5">El foro esta vacío</h1>
    </div>
@endsection