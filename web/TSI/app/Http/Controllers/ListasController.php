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
        $userid = $input["userid"];
        $titulo = $input["titulo"];
        $gabinete = $input["gabinete"];
        $placamadre = $input["placamadre"];
        $procesador = $input["procesador"];
        $tarjetavideo = $input["tarjetavideo"];
        $almacenamiento = $input["almacenamiento"];
        $fuentepoder = $input["fuentepoder"];
        $ram = $input["ram"];
        $cooler = $input["cooler"];
        $precio = $input["precio"];
        
        $lista = new Lista();
        $lista->userid = $userid;
        $lista->titulo = $titulo;
        $lista->gabinete = $gabinete;
        $lista->placamadre = $placamadre;
        $lista->procesador = $procesador;
        $lista->tarjetavideo = $tarjetavideo;
        $lista->almacenamiento = $almacenamiento;
        $lista->fuentepoder = $fuentepoder;
        $lista->ram = $ram;
        $lista->cooler = $cooler;
        $lista->precio = $precio;

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
        $titulo = $input["titulo"];
        $gabinete = $input["gabinete"];
        $placamadre = $input["placamadre"];
        $procesador = $input["procesador"];
        $tarjetavideo = $input["tarjetavideo"];
        $almacenamiento = $input["almacenamiento"];
        $fuentepoder = $input["fuentepoder"];
        $ram = $input["ram"];
        $cooler = $input["cooler"];
        $precio = $input["precio"];
        
        $lista = new Lista();
        $lista->titulo = $titulo;
        $lista->gabinete = $gabinete;
        $lista->placamadre = $placamadre;
        $lista->procesador = $procesador;
        $lista->tarjetavideo = $tarjetavideo;
        $lista->almacenamiento = $almacenamiento;
        $lista->fuentepoder = $fuentepoder;
        $lista->ram = $ram;
        $lista->cooler = $cooler;
        $lista->precio = $precio;

        $lista->save();
        return $lista;
    }
    public function buscarListaPorId(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $lista = Lista::findOrFail($id);
        return $lista;
    }
}
