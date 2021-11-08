@extends('layouts.master')

@section('contenido')
    <div class="row mt-5 p-4">
        <div class="col-12 col-md-3 col-lg-3 mx-auto">
            <div class="card">
                <div class="card-header colorbg texto bg-gradient">
                    <span>Actualizar Componente</span>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="tipo-actualizar" class="form-label">Tipo de Componente</label>
                        <select class="form-select" id="tipo-actualizar">
                            <option value="1">Gabinete</option>
                            <option value="2">Placa Madre</option>
                            <option value="3">Procesador</option>
                            <option value="4">Tarjeta de Video</option>
                            <option value="5">Almacenamiento</option>
                            <option value="6">Fuente de Poder</option>
                            <option value="7">Memoria RAM</option>
                            <option value="8">Cooler</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="nombre-txt" class="form-label">Nombre</label>
                        <input type="text" id="nombre-txt" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="modelo-txt" class="form-label">Modelo</label>
                        <input type="text" id="modelo-txt" class="form-control">
                    </div>
                    <label for="marca-select" class="form-label">Marca</label>
                    <select class="form-select" id="marca-select">
                        <option value="1">Kingston</option>
                        <option value="2">Asus</option>
                        <option value="3">Crucial</option>
                        <option value="4">Sandisk</option>
                        <option value="5">Seagate</option>
                        <option value="6">Toshiba</option>
                        <option value="7">WD</option>
                        <option value="8">Transcend</option>
                        <option value="9">Corsair</option>
                        <option value="10">Generica</option>
                    </select>
                    <div class="mb-3">
                        <label for="descripcion-txt" class="form-label">Descripción</label>
                        <textarea id="descripcion-txt" class="form-control"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="url_imagen" class="form-label">URL Imagen</label>
                        <input type="text" id="url_imagen" class="form-control">
                    </div>
                </div>
                <div class="card-footer d-grip gap-1">
                    <button id="actualizar-btn" class="btn btn-info" type="button">Actualizar</button>
                </div>
            </div>
        </div>
        <div class="col col-md-9 col-lg-9">
            <div class="row mt-2">
                <div class="col-12 col-md-6 col-lg-5 mx-auto">
                    <div class="card">
                        <div class="card-header colorbg bg-gradient texto">
                            <span>Filtrar</span>
                        </div>
                        <div class="card-body">
                            <select class="form-select" id="filtro-cbx">
                                <option value="todos">Todos</option>
                                <option value="1">Gabinete</option>
                                <option value="2">Placa Madre</option>
                                <option value="3">Procesador</option>
                                <option value="4">Tarjeta de Video</option>
                                <option value="5">Almacenamiento</option>
                                <option value="6">Fuente de Poder</option>
                                <option value="7">Memoria RAM</option>
                                <option value="8">Cooler</option>
                            </select>
                            <input type="text" class="form-control d-none" id="correo_usuario" value="{{auth()->user()->email}}">
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
                                <td>Modelo</td>
                                <td>Marca</td>  
                                <td>Descripcion</td>
                                <td>Url Imagen</td>
                                <td>Acciones</td>
                            </tr>
                        </thead>
                        <tbody id="tbody-componente">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('javascript')
    <script src="{{ asset('js/servicios/componentesService.js') }}"></script>
    <script src="{{ asset('js/servicios/marcasService.js') }}"></script>
    <script src="{{ asset('js/actualizar_componentes.js') }}"></script>
@endsection
