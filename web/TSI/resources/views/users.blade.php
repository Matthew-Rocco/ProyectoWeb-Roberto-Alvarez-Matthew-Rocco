@extends('layouts.master')

@section('contenido')
  <div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
      <div class="card">
        <div class="card-header bg-info bg-gradient">
          <span>Añadir Usuario</span>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="name-txt" class="form-label">Nombre</label>
            <input type="text" id="name-txt" class="form-control">
          </div>
          <div class="mb-3">
            <label for="email-txt" class="form-label">Email</label>
            <input type="text" id="email-txt" class="form-control">
          </div>
          <div class="mb-3">
            <label for="password-txt" class="form-label">Contraseña</label>
            <input type="text" id="password-txt" class="form-control">
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
  <script src="{{asset('js/servicios/usersService.js')}}"></script>
  <script src="{{asset('js/añadir_users.js')}}"></script>
@endsection