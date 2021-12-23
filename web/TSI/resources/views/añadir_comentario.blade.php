@extends('layouts.master')

@section('contenido')
    <div class="row mt-5 p-4">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-gradient colorbg texto">
                    <span>Añadir Comentario</span>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="descripcion-txt" class="form-label">Descripcion</label>
                        <textarea id="descripcion-txt" class="form-control"></textarea>
                    </div>
                </div>
                <div class="card-footer d-grip gap-1">
                    <button id="registrar-btn" class="btn btn-success" type="button">Guardar</button>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('javascript')
@endsection
