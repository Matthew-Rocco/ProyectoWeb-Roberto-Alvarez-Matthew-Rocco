<?php

namespace App\Http\Controllers;

use App\Models\Caraccomp;
use Illuminate\Http\Request;

class CaracteristicaCompController extends Controller
{
    public function getCaracComp()
    {
        $caracteristicacomp = Caraccomp::all();
        return $caracteristicacomp;
    }
    
    public function buscarCaracPorIdComp(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $caraccomp = Caraccomp::where('cod_comp', '=', $id)->get();
        return $caraccomp;
    }

    public function crearCaracComp(Request $request){
        $input = $request->all();
        $caraccomp = new Caraccomp();
        $caraccomp->caract_comp = $input["caract_comp"];
        $caraccomp->cod_comp = $input["cod_comp"];
        $caraccomp->cod_carac = $input["cod_carac"];
        $caraccomp->valor_carac = $input["valor_carac"];
        $caraccomp->unidad = $input["unidad"];

        $caraccomp->save();
        return $caraccomp;
    }
}
