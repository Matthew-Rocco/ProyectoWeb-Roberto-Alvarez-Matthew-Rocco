@extends('layouts.master')

@section('contenido')
  <div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
      <div class="card">
        <div class="card-header text-center bg-info bg-gradient">
          <span>Crear Lista</span>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="titulo-txt" class="form-label">Titulo de la Lista</label>
            <input type="text" id="titulo-txt" class="form-control">
          </div>
          <div class="mb-3">
            <label for="gabinete-select" class="form-label">Gabinete</label>
            <select class="form-select" id="gabinete-select">

            </select>
          </div>
          <div class="mb-3">
            <label for="placamadre-select" class="form-label">Placa Madre</label>
            <select class="form-select" id="placamadre-select">

            </select>
          </div>
          <div class="mb-3">
            <label for="procesador-select" class="form-label">Procesador</label>
            <select class="form-select" id="procesador-select">

            </select>
          </div>
          <div class="mb-3">
            <label for="tarjetavideo-select" class="form-label">Tarjeta de Video</label>
            <select class="form-select" id="tarjetavideo-select">

            </select>
          </div>
          <div class="mb-3">
            <label for="almacenamiento-select" class="form-label">Almacenamiento</label>
            <select class="form-select" id="almacenamiento-select">

            </select>
          </div>
          <div class="mb-3">
            <label for="fuentepoder-select" class="form-label">Fuente de Poder</label>
            <select class="form-select" id="fuentepoder-select">

            </select>
          </div>
          <div class="mb-3">
            <label for="ram-select" class="form-label">Memoria RAM</label>
            <select class="form-select" id="ram-select">

            </select>
          </div>
          <div class="mb-3">
            <label for="cooler-select" class="form-label">Cooler</label>
            <select class="form-select" id="cooler-select">

            </select>
          </div>
        </div>
        <div class="card-footer d-grip gap-1 bg-info">
          <button id="registrar-btn" class="btn btn-success " type="button">Registrar</button>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-6 mx-auto">
      <div class="card">
        <div class="card-header text-center bg-info">
          <span>Mis Listas</span>
        </div>
        <div class="card-body">
          <table class="table table-hover table-bordered table-striped table-responsive">
            <thead class="bg-info text-center">
            </thead>
            <tbody id="tbody-listas">
            </tbody>
          </table>
        </div>
        <div class="card footer">
          <button id="subir-btn" class="btn btn-secondary" type="button">Subir</button>
        </div>
      </div>
    </div>
  </div>
  <div class="d-none">
    <div class="row mt-5 molde-actualizar">
      <div class="col-12 mx-auto">
        <div class="card">
          <div class="card-header text-center bg-info bg-gradient">
            <span>Actualizar Lista</span>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="titulo-txt" class="form-label">Titulo de la Lista</label>
              <input type="text" class="form-control titulo-txt">
            </div>
            <div class="mb-3">
              <label for="gabinete-txt" class="form-label">Gabinete:</label>
              <label class="form-label gabinete-txt"></label>
            </div>
            <div class="mb-3">
              <label for="placamadre-txt" class="form-label">Placa Madre:</label>
              <label class="form-label placamadre-txt"></label>
            </div>
            <div class="mb-3">
              <label for="procesador-txt" class="form-label">Procesador:</label>
              <label class="form-label procesador-txt"></label>
            </div>
            <div class="mb-3">
              <label for="tarjetavideo-txt" class="form-label">Tarjeta de Video:</label>
              <label class="form-label tarjetavideo-txt"></label>
            </div>
            <div class="mb-3">
              <label for="almacenamiento-txt" class="form-label">Almacenamiento:</label>
              <label class="form-label almacenamiento-txt"></label>
            </div>
            <div class="mb-3">
              <label for="fuentepoder-txt" class="form-label">Fuente de Poder:</label>
              <label class="form-label fuentepoder-txt"></label>
            </div>
            <div class="mb-3">
              <label for="ram-txt" class="form-label">Memoria RAM:</label>
              <label class="form-label ram-txt"></label>
            </div>
            <div class="mb-3">
              <label for="cooler-txt" class="form-label">Cooler:</label>
              <label class="form-label cooler-txt"></label>
            </div>
            <div class="mb-3">
              <label for="precio-txt" class="form-label">Precio:</label>
              <label class="form-label precio-txt"></label>
            </div>
          </div>
          <div class="card-footer d-grip gap-1 bg-info">
            <button class="btn btn-primary actualizar-btn" type="button">Actualizar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
@endsection

@section("javascript")
  <script src="https://tholman.com/elevator.js/elevator.js" ></script>
  <script>
    window.onload = function subirPagina() {
      let elevator = new Elevator({
        element: document.querySelector("#subir-btn")
      });
    }
  </script>
  <script src="{{asset('js/servicios/componentesService.js')}}"></script>
  <script src="{{asset('js/servicios/listasService.js')}}"></script>
  <script src="{{asset('js/servicios/marcasService.js')}}"></script>
  <script src="{{asset('js/servicios/tiposcompService.js')}}"></script>
  <script src="{{asset('js/mi_lista.js')}}"></script>
@endsection