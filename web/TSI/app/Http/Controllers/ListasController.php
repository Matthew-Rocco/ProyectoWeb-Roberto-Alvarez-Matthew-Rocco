<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lista;
class ListasController extends Controller
{
    public function getListas(){
        return Lista::all();
    }

    public function crearLista(Request $request){
        $input = $request->all();
        $correo_usuario = $input["correo_usuario"];
        $titulo_lista = $input["titulo_lista"];
        $fecha = $input["fecha"];
        
        $lista = new Lista();
        $lista->correo_usuario = $correo_usuario;
        $lista->titulo_lista = $titulo_lista;
        $lista->fecha = $fecha;

        $lista->save();
        return $lista;
    }

    public function eliminarLista(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $lista = Lista::findOrFail($id);
        $lista->delete();
        return "ok";
    }


    public function actualizarLista(Request $request){
        $input = $request->all();
        
        $id = $input["id"];
        $lista= Lista::findOrFail($id);
        $titulo_lista = $input["titulo_lista"];
        
        $lista->titulo_lista = $titulo_lista;

        $lista->save();
        return $lista;
    }
    public function buscarListaPorId(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $lista = Lista::findOrFail($id);
        return $lista;
    }

    public function buscarListaPorCorreo(Request $request){
        $input = $request->all();
        $correo_usuario = $input["correo_usuario"];
        $lista = Lista::where('correo_usuario', '=', $correo_usuario)->get();
        return $lista;
    }

    
}
