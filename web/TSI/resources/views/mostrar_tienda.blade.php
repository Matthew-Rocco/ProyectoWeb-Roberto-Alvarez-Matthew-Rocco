@extends('layouts.master')

@section('contenido')
  <div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-12 mx-auto">
      <table class="table table-hover table-bordered table-striped table-responsive">
        <thead class="bg-info">
          <tr>
            <td>Nombre</td>
            <td>Descripcion</td>
            <td>Link</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody id="tbody-tienda">

        </tbody>
      </table>
    </div>
  </div>
  <div>
    <div class="card">
      <div class="card-header row bg-info bg-gradient">
        <div class="col-10 pt-2">
          <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div>
              <a class="nav-link text-dark text-center" href="{{ route('tienda') }}"><b>Añadir Tienda</b></a>
            </div>
          </div>
        </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
          <div class="card-header row bg-info bg-gradient">
            <div class="col-10 pt-2">
              <div>
                <a><b>Actualizar Tienda</b></a>
              </div>
            </div>
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
            <button id="actualizartienda-btn" class="btn btn-info" type="button">Actualizar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection

@section('javascript')
<script src="{{asset('js/servicios/tiendasService.js')}}"></script>
<script src="{{asset('js/mostrar_tienda.js')}}"></script>
@endsection