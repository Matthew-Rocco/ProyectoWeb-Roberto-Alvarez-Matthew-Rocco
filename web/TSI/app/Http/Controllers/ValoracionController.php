<?php

namespace App\Http\Controllers;

use App\Models\Valoracion;
use Illuminate\Http\Request;

class ValoracionController extends Controller
{
    public function getValoracion()
    {
        $valoracion = Valoracion::all();
        return $valoracion;
    }

    public function crearValoracion(Request $request){
        $input = $request->all();
        $valoracion = new Valoracion;
        $valoracion->valoracion_user = $input["valoracion_user"];
        $valoracion->cod_comp = $input["cod_comp"];
        $valoracion->correo_user = $input["correo_user"];
        $valoracion->descripcion = $input["descripcion"];
        $valoracion->puntos = $input["puntos"];
        $valoracion->fecha = $input["fecha"];

        $valoracion->save();
        return $valoracion;
    }

    public function buscarValoracionPorIdComp(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $valoracion = Valoracion::where('cod_comp', '=', $id)->get();
        return $valoracion;
    }
}
