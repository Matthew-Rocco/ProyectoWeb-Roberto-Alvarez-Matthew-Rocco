@extends('layouts.master')

@section('contenido')
    <div class="row p-4">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header colorbg bg-gradient texto">
                    <span>Filtrar por Tipo</span>
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
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header colorbg bg-gradient texto">
                    <span>Filtrar por Marca</span>
                </div>
                <div class="card-body">
                    <select class="form-select" id="filtromarca-cbx">
                        <option value="todos">Todos</option>
                        <option value="1">Kingston</option>
                        <option value="2">Asus</option>
                        <option value="3">Crucial</option>
                        <option value="4">SanDisk</option>
                        <option value="5">Seagate</option>
                        <option value="6">Toshiba</option>
                        <option value="7">WD</option>
                        <option value="8">Transcend</option>
                        <option value="9">Corsair</option>
                        <option value="10">Generica</option>
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
    </div>
@endsection

@section('javascript')
    <script src="{{ asset('js/servicios/componentesService.js') }}"></script>
    <script src="{{ asset('js/servicios/marcasService.js') }}"></script>
    <script src="{{ asset('js/mostrar_componentes.js') }}"></script>
@endsection
