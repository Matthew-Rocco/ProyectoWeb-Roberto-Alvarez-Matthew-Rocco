<?php

namespace App\Http\Controllers;

use App\Models\Hiloforo;
use Illuminate\Http\Request;

class HiloForosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getHiloForos()
    {
        $hilo = Hiloforo::all();
        return $hilo;
    }
    
    public function buscarHiloPorId(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $hilo = HiloForo::where('id', '=', $id)->firstOrFail();
        return $hilo;
    }

    public function crearHiloForo(Request $request){
        $input = $request->all();
        $hilo = new Hiloforo();
        $hilo->correo_user = $input["correo_usuario"];
        $hilo->titulo = $input["titulo"];
        $hilo->descripcion = $input["descripcion"];
        $hilo->fecha = $input["fecha"];

        $hilo->save();
        return $hilo;
    }
}
