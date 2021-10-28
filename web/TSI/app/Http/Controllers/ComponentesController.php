<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Componente;
class ComponentesController extends Controller
{
    public function getTipoComp(){
        $tipoComp = array();
        $tipoComp[] = "Gabinete";
        $tipoComp[] = "Placa Madre";
        $tipoComp[] = "Procesador";
        $tipoComp[] = "Tarjeta de Video";
        $tipoComp[] = "Almacenamiento";
        $tipoComp[] = "Fuente de Poder";
        $tipoComp[] = "Memoria RAM";
        $tipoComp[] = "Cooler";

        return $tipoComp;
    }

    public function getComponentes(){
        $componentes = Componente::all();
        return $componentes;
    }

    public function filtrarComponentes(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $componentes = Componente::where("tipocomp", $filtro)->get();
        return $componentes;
    }

    public function crearComponentes(Request $request){
        $input = $request->all();
        $componente = new Componente();
        $componente->tipocomp = $input["tipocomp"];
        $componente->nombre = $input["nombre"];
        $componente->descripcion = $input["descripcion"];
        $componente->valoracion = $input["valoracion"];
        $componente->imagen = $input["imagen"];

        /*if($archivo = $request->file('imagen')){
            $nombre=$archivo->getClientOriginalName();
            $archivo->move('img',$nombre);
            $componente->imagen = $nombre;
        }*/

        $componente->save();
        return $componente;
    }

    public function eliminarComponentes(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $componente = Componente::findOrFail($id);
        $componente->delete();
        return "ok";
    }

    public function buscarPorId(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $componente = Componente::findOrFail($id);
        return $componente;
    }

    public function actualizarComponente(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $componente = Componente::findOrFail($id);
        $componente->tipocomp = $input["tipocomp"];
        $componente->nombre = $input["nombre"];
        $componente->precio = $input["precio"];
        $componente->descripcion = $input["descripcion"];
        $componente->valoracion = $input["valoracion"];
        $componente->imagen = $input["imagen"];
        
        $componente->save();
        return $componente;
    }
};
