<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UsersController extends Controller
{

    public function getUsers(){
        $users = User::all();
        return $users;

    }
    
    public function crearUsers(Request $request){
        $input = $request->all();
        $user = new User();
        $user->name = $input["name"];
        $user->email = $input["email"];
        
        $user->password = $input["password"];

        $user->save();
        return $user;
    }

    public function eliminarUsers(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $user = User::findOrFail($id);
        $user->delete();
        return "ok";
    }
    
    public function buscarPorId(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $user = User::findOrFail($id);
        return $componente;
    }

    public function actualizarUsers(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $user = User::findOrFail($id);
        $user->name = $input["name"];
        $user->email = $input["email"];
        $user->password = $input["password"];
        $user->save();
        return $user;
    }
};