<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ComponentesController;
use App\Http\Controllers\ListasController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('tipocomp/get', [ComponentesController::class, "getTipoComp"]);
Route::get('componentes/get',[ComponentesController::class, "getComponentes"]);
Route::get('componentes/filtrar', [ComponentesController::class, "filtrarComponentes"]);

Route::post('componentes/post',[ComponentesController::class, "crearComponentes"]);
Route::post('componentes/actualizar',[ComponentesController::class, "actualizarComponentes"]);
Route::post('componentes/delete',[ComponentesController::class, "eliminarComponentes"]);


Route::get('listas/get', [ListasController::class, "getListas"]);

Route::post('listas/post', [ListasController::class, "crearLista"]);
Route::post('listas/actualizar', [ListasController::class, "actualizarLista"]);
Route::post('listas/delete', [ListasController::class, "eliminarLista"]);
