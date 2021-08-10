@extends('layouts.master')

@section('contenido')
  <div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
      <div class="card">
        <div class="card-header bg-info bg-gradient">
          <span>Añadir Tienda</span>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="nombretienda-txt" class="form-label">Nombre</label>
            <input type="text" id="nombretienda-txt" class="form-control">
          </div>
          <div class="mb-3">
            <label for="descripciontienda-txt" class="form-label">Descripción</label>
            <textarea id="descripciontienda-txt" class="form-control"></textarea>
          </div>
          <div class="mb-3">
            <label for="linktienda-txt" class="form-label">Link de Tienda</label>
            <input type="text" id="linktienda-txt" class="form-control">
          </div>
        </div>
        <div class="card-footer d-grip gap-1">
          <button id="registrartienda-btn" class="btn btn-success" type="button">Registrar</button>
        </div>
      </div>
    </div>
  </div>
@endsection
@section("javascript")
  <script src="{{asset('js/servicios/tiendasService.js')}}"></script>
  <script src="{{asset('js/tiendas.js')}}"></script>
@endsection