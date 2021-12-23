@extends('layouts.master')

@section('contenido')
    <div class="row p-4">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header colorbg bg-gradient texto">
                    <span>Filtrar por Tipo</span>
                </div>
                <div class="card-body">
                    <select class="form-select" id="tipocomp-select">
                        <option value="todos">Todos</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header colorbg bg-gradient texto">
                    <span>Filtrar por Marca</span>
                </div>
                <div class="card-body">
                    <select class="form-select" id="marca-select">
                        <option value="todos">Todos</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <!--<div class="row mt-5">
                <div class="col-12 col-md-12 col-lg-12 mx-auto">
                    <table class="table table-hover table-bordered table-striped table-responsive">
                        <thead class="colorbg texto">
                            <tr>
                                <td>Nombre</td>
                                <td>Tipo Componente</td>
                                <td>Modelo</td>
                                <td>Marca</td>
                                <td>Descripcion</td>
                                <td>Imagen</td>
                            </tr>
                        </thead>
                        <tbody id="tbody-componente">

                        </tbody>
                    </table>
                </div>
            </div>
            </div>-->

    <div class="row mt-5" id="cuerpo">
        <div class="container text-center">
            <img src="https://cedd.net/img/loading.gif" alt="">
        </div>
    </div>
    <div class="text-center">
        <button id="subir-btn" class="btn btn-secondary" type="button">Subir</button>
    </div>
@endsection

@section('javascript')
    <script src="https://tholman.com/elevator.js/elevator.js"></script>
    <script>
        window.onload = function subirPagina() {
            let elevator = new Elevator({
                element: document.querySelector("#subir-btn")
            });
        }
    </script>
    <script src="{{ asset('js/servicios/componentesService.js') }}"></script>
    <script src="{{ asset('js/servicios/marcasService.js') }}"></script>
    <script src="{{ asset('js/servicios/tiposcompService.js') }}"></script>
    <script src="{{ asset('js/servicios/imagenesService.js') }}"></script>
    <script src="{{ asset('js/mostrar_componentes.js') }}"></script>
    <script src="{{ asset('js/tipos_comp.js') }}"></script>
    <script src="{{ asset('js/marcas.js') }}"></script>
@endsection
