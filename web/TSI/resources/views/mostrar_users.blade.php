@extends('layouts.master')

@section('contenido')
  <div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-12 mx-auto">
      <table class="table table-hover table-bordered table-striped table-responsive">
        <thead class="bg-info">
          <tr>
            <td>Nombre</td>
            <td>Email</td>
            <td>Password</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody id="tbody-user">

        </tbody>
      </table>
    </div>
  </div>
  <div>
    <div class="row mt-5">
      <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
          <div class="card-header row bg-info bg-gradient">
            <div class="col-10 pt-2">
              <div>
                <a><b>Actualizar Usuario</b></a>
              </div>
            </div>
        </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="name-txt" class="form-label">Nombre</label>
              <input type="text" id="name-txt" class="form-control">
            </div>
            <div class="mb-3">
              <label for="email-txt" class="form-label">Email</label>
              <textarea id="email-txt" class="form-control"></textarea>
            </div>
            <div class="mb-3">
              <label for="password-txt" class="form-label">Password</label>
              <input type="text" id="password-txt" class="form-control">
            </div>
          </div>
          <div class="card-footer d-grip gap-1">
            <button id="actualizar-btn" class="btn btn-info" type="button">Actualizar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection

@section('javascript')
<script src="{{asset('js/servicios/usersService.js')}}"></script>
<script src="{{asset('js/mostrar_users.js')}}"></script>
@endsection