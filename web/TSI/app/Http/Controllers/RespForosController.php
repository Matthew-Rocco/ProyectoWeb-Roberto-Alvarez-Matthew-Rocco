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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * @param  \App\Models\Respforo  $respforo
     * @return \Illuminate\Http\Response
     */
    public function show(Respforo $respforo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Respforo  $respforo
     * @return \Illuminate\Http\Response
     */
    public function edit(Respforo $respforo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Respforo  $respforo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Respforo $respforo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Respforo  $respforo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Respforo $respforo)
    {
        //
    }
}
