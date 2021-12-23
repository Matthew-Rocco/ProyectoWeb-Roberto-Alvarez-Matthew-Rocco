<?php

namespace App\Http\Controllers;

use App\Models\Detallelista;
use Illuminate\Http\Request;

class DetalleListaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getDetalleLista()
    {
        $detalles = Detallelista::all();
        return $detalles;
    }
    
    public function buscarDetallePorIdLista(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $detallelista = DetalleLista::where('cod_lista', '=', $id)->get();
        return $detallelista;
    }
    
    public function crearDetalleLista(Request $request){
        $input = $request->all();
        $detallelista = new Detallelista();
        $detallelista->lista_comp = $input["lista_comp"];
        $detallelista->cod_lista = $input["cod_lista"];
        $detallelista->cod_comp = $input["cod_comp"];

        $detallelista->save();
        return $detallelista;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Detallelista  $detallelista
     * @return \Illuminate\Http\Response
     */
    public function show(Detallelista $detallelista)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Detallelista  $detallelista
     * @return \Illuminate\Http\Response
     */
    public function edit(Detallelista $detallelista)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Detallelista  $detallelista
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Detallelista $detallelista)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Detallelista  $detallelista
     * @return \Illuminate\Http\Response
     */
    public function destroy(Detallelista $detallelista)
    {
        //
    }
}
