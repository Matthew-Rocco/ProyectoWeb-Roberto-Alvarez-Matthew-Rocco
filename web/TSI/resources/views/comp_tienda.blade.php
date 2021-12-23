@extends('layouts.master')

@section('contenido')
    <div class="row mt-5 p-4">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-gradient colorbg texto">
                    <span>Añadir Precio</span>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="tienda-select" class="form-label">Seleccionar Tienda</label>
                        <select class="form-select" id="tienda-select">
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="precio-txt" class="form-label">Precio</label>
                        <input type="number" min="0" placeholder="0" id="precio-txt" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="tienda-link" class="form-label">URL de Componente en Tienda</label>
                        <input type="text" class="form-control" id="tienda-link">
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
    <script src="{{ asset('js/servicios/comptiendaService.js')}}"></script>
    <script src="{{ asset('js/servicios/tiendasService.js')}}"></script>
    <script src="{{ asset('js/servicios/componentesService.js')}}"></script>
    <script src="{{asset('js/comp_tienda.js')}}"></script>
@endsection
