<?php

namespace App\Http\Controllers;

use App\Models\Categoriaforo;
use Illuminate\Http\Request;

class CategoriaForosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCategoriaForo()
    {
        $categoria = CategoriaForo::all();
        return $categoria;
    }

    public function buscarCategoriaPorIdHilo(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $categoria = Categoriaforo::where('cod_comp', '=', $id)->get();
        return $categoria;
    }

    public function crearCategoriaForo(Request $request){
        $input = $request->all();
        $categoria = new Categoriaforo();
        $categoria->cat_foro = $input["cat_foro"];
        $categoria->cod_foro = $input["cod_foro"];
        $categoria->cod_categoria = $input["cod_categoria"];

        $categoria->save();
        return $categoria;
    }
}
