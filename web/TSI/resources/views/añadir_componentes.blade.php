@extends('layouts.master')

@section('contenido')
    <div class="row mt-5 p-4">
        <div class="col-12 col-md-6 col-lg-5 ms-sm-5 mx-auto">
            <div class="card">
                <div class="card-header bg-gradient colorbg texto">
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
                        <label for="marca-select" class="form-label">Marca</label>
                        <select class="form-select" id="marca-select">
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="modelo-txt" class="form-label">Modelo</label>
                        <input type="text" class="form-control" id="modelo-txt">
                    </div>
                    <div class="mb-3">
                        <label for="descripcion-txt" class="form-label">Descripción</label>
                        <textarea id="descripcion-txt" class="form-control"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="imagen" class="form-label">URL Imagen</label>
                        <input type="text" class="form-control" id="imagen">
                    </div>
                    <input type="text" class="form-control d-none" id="correo_usuario"
                        value="{{ auth()->user()->email }}">
                </div>
                <div class="card-footer d-grip gap-1">
                    <button id="registrar-btn" class="btn btn-success" type="button" href=>Registrar</button>
                </div>
            </div>
        </div>

        <div class="col col-md col-lg ">
            <div class="row">
                <div class="col-12 col-md-8 col-lg-8 mx-auto">
                    <div class="card">
                        <div class="card-header bg-gradient colorbg texto">
                            <span>Caracteristicas</span>
                        </div>
                        <div class="card-body" id="carac">
                            <div>
                                <!-- Comienza -->
                                <div class="mb-3">
                                    <label for="fforma-txt" class="form-label">Factor de Forma</label>
                                    <input type="text" class="form-control" id="fforma-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="bahias-txt" class="form-label">Bahias</label>
                                    <input type="text" class="form-control" id="bahias-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="ventinc-txt" class="form-label">Ventiladores Incorporados</label>
                                    <input type="number" placeholder="0" min="0"  class="form-control" id="ventinc-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="espvent-txt" class="form-label">Espacios para Ventilador</label>
                                    <input type="text" class="form-control" id="espvent-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="fuentepi-txt" class="form-label">Fuente de Poder Incluida</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="fuentep-radio" id="si">
                                        <label class="form-check-label" for="si"> Si </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="fuentep-radio" id="no" checked>
                                        <label class="form-check-label" for="no"> No </label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="dim-txt" class="form-label">Dimensiones</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="text" placeholder="HxLxA" class="form-control" id="dim-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">mm</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="dim-txt" class="form-label">Peso</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0"  class="form-control" id="peso-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label for="peso-txt" class="form-label">kg</label>
                                        </div>
                                    </div>
                                </div>
                                <!-- Termina -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('javascript')
    <script src="{{ asset('js/servicios/componentesService.js') }}"></script>
    <script src="{{ asset('js/servicios/imagenesService.js') }}"></script>
    <script src="{{ asset('js/servicios/tiposcompService.js') }}"></script>
    <script src="{{ asset('js/servicios/marcasService.js') }}"></script>
    <script src="{{ asset('js/servicios/caraccompService.js') }}"></script>
    <script src="{{ asset('js/añadir_componentes.js') }}"></script>
    <script src="{{ asset('js/caracteristicas.js') }}"></script>
    <script src="{{ asset('js/carac_comp.js') }}"></script>
    <script src="{{ asset('js/tipos_comp.js') }}"></script>
    <script src="{{ asset('js/marcas.js') }}"></script>
@endsection
