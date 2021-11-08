@extends('layouts.master')

@section('contenido')
  <div class="row p-4">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
      <div class="card">
        <div class="card-header colorbg bg-gradient texto">
          <span>Filtrar</span>
        </div>
        <div class="card-body">
          <select class="form-select" id="filtro-cbx">
            <option value="todos">Todos</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-12 mx-auto">
      <table class="table table-hover table-bordered table-striped table-responsive">
        <thead class="colorbg texto">
          <tr>
            <td>Nombre</td>
            <td>Tipo Componente</td>
            <td>Marca</td>
            <td>Modelo</td>
            <td>Descripcion</td>
            <td>Imagen</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody id="tbody-componente">

        </tbody>
      </table>
    </div>
  </div>
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/componentesService.js')}}"></script>
    <script src="{{asset('js/servicios/marcasService.js')}}"></script>
    <script src="{{asset('js/mostrar_componentes.js')}}"></script>
@endsection