@extends('layouts.master')

@section('contenido')
    <div class="row pt-4">
        <div class="col-12">
            <div class="card">
                <div class="card-header row bg-info bg-gradient">
                    <div class="col-10 pt-2">
                      <div>
                        <h6>Almacenamiento</h6>
                      </div>
                    </div>
                    <div class="col-2 text-end">
                      <div>
                        <a class="nav-link text-dark" href="{{ route('almacenamiento') }}">Ver más</a>
                      </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card" style="width: 18rem;">
                        <img src="{{asset('img/ssd.jpg')}}" class="card-img-top img-fluid" alt="">
                        <div class="card-body">
                            <p class="card-text">WD® Unidad SSD 120GB Sata3 2.5" Green</p>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-info">
                </div>
            </div>
        </div>
    </div>
@endsection

@section("javascript")
  <script src="https://apps.elfsight.com/p/platform.js" defer></script>
  <div class="elfsight-app-cd22e2fb-ae46-4598-a817-9d897234a01f"></div>
@endsection
