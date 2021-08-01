@extends('layouts.master')

@section('contenido')
  <div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
      <div class="card">
        <div class="card-header bg-info bg-gradient">
          <span>Actualizar Componente</span>
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
            <label for="precio-txt" class="form-label">Precio</label>
            <input type="number" class="form-control" id="precio-txt">
          </div>
          <div class="mb-3">
            <label for="descripcion-txt" class="form-label">Descripción</label>
            <textarea id="descripcion-txt" class="form-control"></textarea>
          </div>
          <div class="mb-3">
            <label for="link-txt" class="form-label">Link del componente</label>
            <input type="text" id="link-txt" class="form-control">
          </div>
        </div>
        <div class="card-footer d-grip gap-1">
          <button id="actualizar-btn" class="btn btn-success" type="button">Actualizar</button>
        </div>
      </div>
    </div>
  </div>
@endsection
@section("javascript")
  <script src="{{asset('js/servicios/componentesService.js')}}"></script>
  <script src="{{asset('js/servicios/marcasService.js')}}"></script>
  <script src="{{asset('js/actualizar_componentes.js')}}"></script>
@endsection