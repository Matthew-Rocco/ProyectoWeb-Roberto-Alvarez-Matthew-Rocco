@extends('layouts.master')

@section('contenido')
    <div class="row mt-5 p-4">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-gradient colorbg texto">
                    <span>Añadir Valoracion</span>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="puntos-txt" class="form-label">Puntos (0-10)</label>
                        <input type="number" min="0" placeholder="0" id="puntos-txt" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="comentario-txt" class="form-label">Comentario</label>
                        <textarea id="comentario-txt" class="form-control"></textarea>
                    </div>
                </div>
                <div class="card-footer d-grip gap-1">
                    <button id="registrar-btn" class="btn btn-success" type="button" href="home">Guardar</button>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('javascript')
    <script src="{{ asset('js/servicios/valoracionService.js')}}"></script>
    <script src="{{ asset('js/servicios/tiendasService.js')}}"></script>
    <script src="{{ asset('js/servicios/componentesService.js')}}"></script>
    <script src="{{asset('js/valoracion.js')}}"></script>
@endsection
