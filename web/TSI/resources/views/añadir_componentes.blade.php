@extends('layouts.master')

@section('contenido')
  <div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
      <div class="card">
        <div class="card-header bg-info bg-gradient">
          <span>Añadir Componente</span>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="tipocomp-select" class="form-label">Tipo de Componente</label>
            <select class="form-select" id="tipocomp-select">
              
            </select>
          </div>
          <div class="mb-3">
            <label for="nombre-txt" class="form-label">Nombre</label>
            <input type="text" id="nombre-txt" class="form-control">
          </div>
          <div class="mb-3">
            <label for="valoracion-txt" class="form-label">Valoracion</label>
            <input type="number" class="form-control" id="valoracion-txt">
          </div>
          <div class="mb-3">
            <label for="descripcion-txt" class="form-label">Descripción</label>
            <textarea id="descripcion-txt" class="form-control"></textarea>
          </div>
          <div class="mb-3">
            <label for="imagen" class="form-label">Subir Imagen</label>
            <input type="file" class="form-control" id="imagen">
          </div>
        </div>
        <div class="card-footer d-grip gap-1">
          <button id="registrar-btn" class="btn btn-success" type="button">Registrar</button>
        </div>
      </div>
    </div>
  </div>
@endsection
@section("javascript")
  <script src="{{asset('js/servicios/componentesService.js')}}"></script>
  <script src="{{asset('js/servicios/marcasService.js')}}"></script>
  <script src="{{asset('js/añadir_componentes.js')}}"></script>
@endsection