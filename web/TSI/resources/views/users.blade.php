@extends('layouts.master')

@section('contenido')
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 20px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}
.iniciobtn{
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

.avatar {
  width: 100px;
  border-radius: 50%;
}

.container {
  padding: 100px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>
</head>
<body>
<form action="{{route('home')}}" method="post">
  <div class="imgcontainer">
    <img src="{{asset('img/logo.png')}}" alt="Avatar" class="avatar">
  </div>

  <div class="container">
    <label for="uname"><b>Usuario</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Contraseña</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Recordarme
    </label>
  </div>

  <div class="container" style="background-color:#ffffff">
    <button type="button" class="cancelbtn">Cancelar</button>
    <span class="psw">Olvido <a href="#">la contraseña?</a></span>
    <li><a class="nav-link active" aria-current="page" href="{{route('home')}}">Inicio</a></li>
  </div>
</form>

</body>
</html>



@endsection