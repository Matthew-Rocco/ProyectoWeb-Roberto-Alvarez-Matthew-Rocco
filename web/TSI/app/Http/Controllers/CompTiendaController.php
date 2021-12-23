<?php

namespace App\Http\Controllers;

use App\Models\Comptienda;
use Illuminate\Http\Request;

class CompTiendaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCompTienda()
    {
        $comptienda = Comptienda::all();
        return $comptienda;
    }
    
    public function crearCompTienda(Request $request){
        $input = $request->all();
        $comptienda = new Comptienda();
        $comptienda->cod_comp_tienda = $input["cod_comp_tienda"];
        $comptienda->cod_comp = $input["cod_comp"];
        $comptienda->cod_tienda = $input["cod_tienda"];
        $comptienda->correo_usuario = $input["correo_usuario"];
        $comptienda->precio_comp = $input["precio_comp"];
        $comptienda->link_comp = $input["link_comp"];

        $comptienda->save();
        return $comptienda;
    }


    public function buscarCompTiendaPorIdComp(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $comptienda = Comptienda::where('cod_comp', '=', $id)->get();
        return $comptienda;
    }
}
