<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TiposCompController;
use App\Http\Controllers\MarcasController;
use App\Http\Controllers\ComponentesController;
use App\Http\Controllers\CaracteristicaCompController;
use App\Http\Controllers\ListasController;
use App\Http\Controllers\TiendasController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ImagenesController;
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



//marcas
Route::get('marcas/get', [MarcasController::class, "getMarcas"]);

//tiposcomp
Route::get('tiposcomp/get', [TiposCompController::class, "getTipoComp"]);

//Componentes
Route::get('componentes/get',[ComponentesController::class, "getComponentes"]);
Route::get('componentes/filtrar', [ComponentesController::class, "filtrarComponentes"]);
Route::get('componentes/filtrarmarcas', [ComponentesController::class, "filtrarComponentesMarca"]);
Route::get('componentes/buscarPorId', [ComponentesController::class, "buscarPorId"]);

Route::post('componentes/post',[ComponentesController::class, "crearComponentes"]);
Route::post('componentes/actualizar',[ComponentesController::class, "actualizarComponente"]);
Route::post('componentes/delete',[ComponentesController::class, "eliminarComponentes"]);

//Caracteristicas Componentes
Route::get('caraccomp/get',[CaracteristicaCompController::class, "getCaracComp"]);
Route::get('caraccomp/buscarCaracPorIdComp', [CaracteristicaCompController::class, "buscarCaracPorIdComp"]);

Route::post('caraccomp/post',[CaracteristicaCompController::class, "crearCaracComp"]);

//Usuarios
Route::get('users/get',[UsersController::class, "getUsers"]);
Route::get('users/buscarPorId', [UsersController::class, "buscarPorId"]);

Route::post('users/post',[UsersController::class, "crearUsers"]);
Route::post('users/actualizar',[UsersController::class, "actualizarUsers"]);
Route::post('users/delete',[UsersController::class, "eliminarUsers"]);


//Tiendas
Route::get('tienda/get',[TiendasController::class, "getTienda"]);

Route::post('tienda/post',[TiendasController::class, "crearTienda"]);
Route::post('tienda/actualizar',[TiendasController::class, "actualizarTienda"]);
Route::post('tienda/delete',[TiendasController::class, "eliminarTienda"]);

//Listas
Route::get('listas/get', [ListasController::class, "getListas"]);
Route::get('listas/buscarListaPorId', [ListasController::class, "buscarListaPorId"]);

Route::post('listas/post', [ListasController::class, "crearLista"]);
Route::post('listas/actualizar', [ListasController::class, "actualizarLista"]);
Route::post('listas/delete', [ListasController::class, "eliminarLista"]);

//Imagenes
Route::get('imagenes/get',[ImagenesController::class, "getImagenes"]);
Route::get('imagenes/buscarImagenPorIdComp', [ImagenesController::class, "buscarImagenPorIdComp"]);

Route::post('imagenes/post',[ImagenesController::class, "crearImagen"]);