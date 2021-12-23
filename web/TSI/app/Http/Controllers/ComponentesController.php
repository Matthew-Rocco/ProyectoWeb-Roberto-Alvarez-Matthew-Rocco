<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Componente;
class ComponentesController extends Controller
{
    public function getComponentes(){
        $componentes = Componente::all();
        return $componentes;
    }

    public function filtrarComponentes(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $componentes = Componente::where("cod_tipo_comp", $filtro)->get();
        return $componentes;
    }
    
    public function filtrarComponentesMarca(Request $request){
        $input = $request->all();
        $filtromarca = $input["filtro"];
        $componentes = Componente::where("cod_marca", $filtromarca)->get();
        return $componentes;
    }

    public function crearComponentes(Request $request){
        $input = $request->all();
        $componente = new Componente();
        $componente->cod_tipo_comp = $input["tipocomp"];
        $componente->nombre = $input["nombre"];
        $componente->descripcion = $input["descripcion"];
        $componente->cod_marca = $input["marca"];
        $componente->modelo = $input["modelo"];
        //$componente->url_imagen = $input["url_imagen"];
        //$componente->cod_imagen = $input["cod_imagen"];
        $componente->correo_usuario = $input["correo_usuario"];

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
        $componente->cod_tipo_comp = $input["cod_tipo_comp"];
        $componente->nombre = $input["nombre"];
        $componente->modelo = $input["modelo"];
        $componente->descripcion = $input["descripcion"];
        $componente->cod_marca = $input["cod_marca"];
        //$componente->url_imagen = $input["url_imagen"];
        
        $componente->save();
        return $componente;
    }

    /*public function componente(){
        return view('/componente_unico');
    }*/
};
