<?php

namespace App\Http\Controllers;
use App\Models\Imagen;

use Illuminate\Http\Request;

class ImagenesController extends Controller
{
    public function getImagenes(){
        $imagenes = Imagen::all();
        return $imagenes;
    }
    
    public function buscarImagenPorIdComp(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $imagen = Imagen::where('cod_comp', '=', $id)->firstOrFail();
        return $imagen;
    }

    public function crearImagen(Request $request){
        $input = $request->all();
        $imagen = new Imagen();
        $imagen->ruta = $input["ruta"];
        $imagen->cod_hilo_foro = $input["cod_hilo_foro"];
        $imagen->cod_resp_foro = $input["cod_resp_foro"];
        $imagen->cod_comp = $input["cod_comp"];

        $imagen->save();
        return $imagen;
    }

}
