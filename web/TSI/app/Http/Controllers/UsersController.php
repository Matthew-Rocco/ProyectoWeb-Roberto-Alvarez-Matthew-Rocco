<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\ValidationException;
class UsersController extends Controller
{
    public function crear_usuario(){
        return view('/registrar_users');
    }

    public function guardar_usuario(){
        $atributos = request()->validate([
            'name' => 'required|min:3|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'password' => 'required|min:8|max:255'
        ]);

        $atributos['password'] = bcrypt($atributos['password']); 
        //para guardar el password de manera encriptada
        //la otra forma es con un mutator, que esta en user.php

        $user = User::create($atributos);

        auth()->login($user);

        session()->flash('success','Tu cuenta a sido creada.');

        return redirect('/');
    }

    public function iniciar_sesion(){
        return view('/users');
    }

    public function sesion(){
        $atributos = request()->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if(auth()->attempt($atributos)) {
            session()->regenerate();
            
            return redirect('/')->with('success','Bienvenido!');
        }

        throw ValidationException::withMessages([
            'email' => 'No se pueden validar los datos ingresados'
        ]);
    }

    public function cerrar_sesion(){
        auth()->logout();

        return redirect('/')->with('success','Hasta Luego!');
    }


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

    public function getNombre(Request $request){
        $input = $request->all();
        $correo = $input["correo"];
        $user = User::where('email', '=', $correo)->firstOrFail();
        $nombre = $user["name"];
        return $nombre;
    }
};