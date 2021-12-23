<?php

namespace App\Http\Controllers;

use App\Models\Respforo;
use Illuminate\Http\Request;

class RespForosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getRespForo()
    {
        $respforo = Respforo::all();
        return $respforo;
    }
    
    public function crearRespForo(Request $request){
        $input = $request->all();
        $respforo = new Respforo();
        $respforo->cod_foro = $input["cod_foro"];
        $respforo->correo_user = $input["correo_user"];
        $respforo->descripcion = $input["descripcion"];
        $respforo->fecha = $input["fecha"];

        $respforo->save();
        return $respforo;
    }


    public function buscarRespForoPorIdHilo(Request $request){
        $input = $request->all();
        $cod_foro = $input["id"];
        $respforo = Respforo::where('cod_foro', '=', $cod_foro)->get();
        return $respforo;
    }

    public function eliminarRespuesta(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $resp_foro = RespForo::findOrFail($id);
        $resp_foro->delete();
        return "ok";
    }
}
