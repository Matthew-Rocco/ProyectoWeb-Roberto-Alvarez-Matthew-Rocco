<?php

use App\Http\Controllers\UsersController;
use App\Http\Controllers\ComponentesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view("/","mostrar_componentes")->name("mostrar_componentes");
Route::view("/mi_lista","mi_lista")->name("mi_lista");
Route::view("/agregar_lista","agregar_lista")->name("agregar_lista");
Route::view("/tienda","tienda")->name("tienda");
Route::view("/users","users")->name("users");
Route::view("/registrar_users","registrar_users")->name("registrar_users");
Route::view("/mostrar_users","mostrar_users")->name("mostrar_users");
Route::view("/mostrar_tienda","mostrar_tienda")->name("mostrar_tienda");
Route::view("/añadir_componentes","añadir_componentes")->name("añadir_componentes");
Route::view("/mostrar_componentes","mostrar_componentes")->name("mostrar_componentes");
Route::view("/actualizar_componente","actualizar_componente")->name("actualizar_componente");
Route::view("/actualizar_lista","actualizar_lista")->name("actualizar_lista");
Route::view("/almacenamiento","almacenamiento")->name("almacenamiento");
Route::view("/foro","foro")->name("foro");
Route::view("/comp_tienda","comp_tienda")->name("comp_tienda");
Route::view("/valoracion_comp","valoracion_comp")->name("valoracion_comp");
Route::view("/agregar_foro","agregar_foro")->name("agregar_foro");
Route::view("/hilo_foro","foro_unico")->name("foro_unico");
Route::view("/añadir_comentario","añadir_comentario")->name("añadir_comentario");

Route::view("/componente","componente_unico")->name("componente_unico");
//Route::get('componente/{comp}',[ComponentesController::class, "componente"]);

Route::get('registrar_usuarios', [UsersController::class, "crear_usuario"])->middleware('guest');
Route::post('registrar_usuarios', [UsersController::class, "guardar_usuario"])->middleware('guest');

Route::get('iniciar_sesion', [UsersController::class, "iniciar_sesion"])->middleware('guest');
Route::post('iniciar_sesion', [UsersController::class, "sesion"])->middleware('guest');

Route::post('cerrar_sesion', [UsersController::class, "cerrar_sesion"])->middleware('auth');