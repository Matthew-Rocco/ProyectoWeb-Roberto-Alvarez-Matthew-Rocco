<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tienda;
class TiendasController extends Controller
{

    public function getTienda(){
        $tienda = Tienda::all();
        return $tienda;

    }
    
    public function crearTienda(Request $request){
        $input = $request->all();
        $tienda = new Tienda();
        $tienda->nombretienda = $input["nombretienda"];
        $tienda->descripciontienda = $input["descripciontienda"];
        $tienda->linktienda = $input["linktienda"];

        $tienda->save();
        return $tienda;
    }

    public function eliminarTienda(Request $request){
        $input = $request->all();
        $tienda->delete();
        return "ok";
    }

    public function actualizarTienda(Request $request){
        $input = $request->all();
        $tienda->nombretienda = $input["nombretienda"];
        $tienda->descripciontienda = $input["descripciontienda"];
        $tienda->linktienda = $input["linktienda"];
        $tienda->save();
        return $tienda;
    }
};