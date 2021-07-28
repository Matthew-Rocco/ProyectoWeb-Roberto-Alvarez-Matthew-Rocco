@extends('layouts.master')

@section('contenido')
  <div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
      <table class="table table-hover table-bordered table-striped table-responsive">
        <thead class="bg-info">
          <tr>
            <td>Nombre</td>
            <td>Tipo Componente</td>
            <td>Precio</td>
            <td>Descripcion</td>
            <td>Link</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody id="tbody-componente">

        </tbody>
      </table>
    </div>
  </div>
@endsection