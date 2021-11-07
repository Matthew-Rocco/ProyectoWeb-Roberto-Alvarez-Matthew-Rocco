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

    public function crearImagen(Request $request){
        $input = $request->all();
        $imagen = new Imagen();
        $imagen->ruta = $input["ruta"];

        $imagen->save();
        return $imagen;
    }

}
