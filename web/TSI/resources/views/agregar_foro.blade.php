@extends('layouts.master')

@section('contenido')
    <div class="row mt-5 p-4">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-gradient colorbg texto">
                    <span>Crear Foro</span>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="titulo-txt" class="form-label">Titulo</label>
                        <input type="text" id="titulo-txt" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="categoria-select" class="form-label">Categoria / Consulta</label>
                        <select class="form-select" id="categoria-select">
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="descripcion-txt" class="form-label">Descripción</label>
                        <textarea id="descripcion-txt" class="form-control"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="imagen" class="form-label">URL Imagen</label>
                        <input type="text" class="form-control" id="imagen">
                    </div>
                    <input type="text" class="form-control d-none" id="correo_usuario"
                        value="{{ auth()->user()->email }}">
                </div>
                <div class="card-footer d-grip gap-1">
                    <button id="crear-btn" class="btn btn-success" type="button" href=>Crear</button>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('javascript')
    <script src="{{ asset('js/servicios/foroService.js') }}"></script>
    <script src="{{ asset('js/servicios/imagenesService.js') }}"></script>
    <script src="{{ asset('js/servicios/categoriaService.js') }}"></script>
    <script src="{{ asset('js/foro_agregar.js') }}"></script>
    <script src="{{ asset('js/categoria.js') }}"></script>
@endsection
