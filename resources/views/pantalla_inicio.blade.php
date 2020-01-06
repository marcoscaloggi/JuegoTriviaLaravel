@extends('layouts.main')
<?php

// require_once "funciones.php";
// require_once "Base_de_Datos/insertar_datos.php";
// require_once "Clases/autoload.php";
// llenar_BD($pdo);

// $misCookies = Autenticador::verificarCookies();


// if ($_POST==false) {

//   $inicio=Autenticador::verificarSesion($pdo);

//   if($inicio==1){
//     header("Location:pantalla-perfil.php");
//   }
// }
// if(isset($_COOKIE['btn-registro'])==false){
//     setcookie('btn-registro','inicio',time()+(60*60*24),"/");

// }



// if ($_POST) {

//   if(count($_POST)==2||count($_POST)==3){


//     $errores = $validador -> validarLogin($_POST,$pdo);
//     if (count($errores) == 0) {


//       $usuario = BaseMYSQL::buscarPorUser($_POST["nombreUser"],$pdo,'Usuarios');


//       Autenticador::seteoUsuario($usuario,$_POST);

//       header("Location:pantalla-perfil.php");

//     }else{

//     }
//     }

//     if(count($_POST)==6){
//       $errores = $validador->validarRegistro($_POST,$pdo);

//       if (count($errores) == 0) {


//             $avatar = "imagen-usuario.png";
//             $usuario = ArmarUsuario::armarUser($_POST, $avatar);
//             BaseMYSQL::guardarUsuario($pdo,$usuario);
//             $id=BaseMYSQL::buscarId($usuario -> getNombre_usuario());
//             $usuario -> setId($id);
//             Autenticador::seteoUsuario($usuario, $_POST);
//             header("Location:pantalla-perfil.php");
//             exit;
//           }}
// }
// Autenticador::verificarSesion($pdo);

 ?>
    @section('titulo_pagina') Juego Trivia - Inicio @endsection
    @section('links')
     <script type="text/javascript" src="/js/pantalla_inicio.js"></script>
      <link rel="stylesheet" href="/css/pantalla_inicio.css">
    @endsection
    @section('nombre_contenedor')container-fluid @endsection
    @section('contenido')
    <div class="contenedor-pantalla">

      <div class="contenedor-btn-mobile">
        <input id=cambioLoginRegistro type="button" name="button"value="Registrarse" >


        <div class="contenedor-circulos">
          <i class="fas fa-circle circulo-1"></i>
          <i class="fas fa-circle circulo-2"></i>
        </div>


        </div>
    <section class="contenedor-login-registro">




      <article class="article-login">
        <div class="login-contenedor">
          <h2>Inicio Sesion</h2>
          
          <form class="" action="/" method="post">
            {{ csrf_field() }}

            <div class="login-input">

              <div class="input-contenedor">
                <i class="far fa-user icon icono-medida"></i>
              <input class="{{$errors->has('nombre_usuario')?'border-danger':''}}"type="text" name="nombre_usuario" placeholder="nombre de usuario" value="{{old('nombre_usuario')}}">
             
              </div>
                 {!! $errors->first('nombre_usuario','<span class="d-block alert alert-primary">:message</span>') !!}

            <div class="input-contenedor">
                <i class="fas fa-key icon icono-medida"></i>
                <input class=" {{$errors->has('contraseña')?'border-danger':''}}"type="password" name="contraseña" placeholder="contraseña" value="">
               
              </div>
              {!! $errors->first('contraseña','<span class="d-block alert alert-primary">:message</span>') !!}


            </div>

            <div class="login-recordar">
              <input type="checkbox" name="recordar" value="S" class="">
              <label class="text-blanco">Recordame</label>
            </div>

                <input type="submit" value="Ingresar" class="boton-formulario btn-login">
          </form>
        </div>
      </article>
      <article class="article-registro">
        <div class="contenedor-titulo-registro">
          <h2>Registrarse</h2>
        </div>
        <form class="" action="pantalla_inicio.php" method="post">
          <div class="contenedor-form-registro">
            <div class="input-contenedor ancho-input-registro">
                  <i class="fas fa-users icon icono-medida"></i>
                  <input type="text" name="nombre" placeholder="nombre">
            </div>
            <?php if(isset($errores[0]) && count($_POST)==6): ?>
            <span class="alert alert-danger 0"><?= $errores[0]  ?></span>
            <?php endif;  ?>
            <div class="input-contenedor ancho-input-registro">
                  <i class="fas fa-users icon icono-medida"></i>
                  <input type="text" name=apellido placeholder="apellido" value="">
            </div>
            <?php if(isset($errores[1]) && count($_POST)==6): ?>
            <span class="alert alert-danger 1"><?= $errores[1]  ?></span>
            <?php endif;  ?>


            <div class="input-contenedor ancho-input-registro">
                  <i class="far fa-user icon icono-medida"></i>
                  <input type="text" name="nombreUser" placeholder="nombre de usuario">
            </div>
            <?php if(isset($errores[2]) && count($_POST)==6): ?>
            <span class="alert alert-danger 2"><?= $errores[2]  ?></span>
            <?php endif;  ?>


            <div class="input-contenedor ancho-input-registro">
                <i class="far fa-envelope icon icono-medida"></i>
                <input type="text" name="email" placeholder="correo electronico" value="">
            </div>
            <?php if(isset($errores[3]) && count($_POST)==6): ?>
            <span class="alert alert-danger 3"><?= $errores[3]  ?></span>
            <?php endif;  ?>
            <?php if(isset($errores[6]) && count($_POST)==6): ?>
            <span class="alert alert-danger 6"><?= $errores[6]  ?></span>
            <?php endif;  ?>

            <div class="input-contenedor ancho-input-registro">
                <i class="fas fa-key icon icono-medida"></i>
                <input type="password" name="contrasenia" placeholder="contraseña">
            </div>
            <?php if(isset($errores[4]) && count($_POST)==6): ?>
            <span class="alert alert-danger 4"><?= $errores[4]  ?></span>
            <?php endif;  ?>

            <div class="input-contenedor ancho-input-registro">
                <i class="fas fa-key icon icono-medida"></i>
                <input type="password" name="recontras" placeholder="confirmar contraseña">
            </div>
            <?php if(isset($errores[5]) && count($_POST)==6): ?>
            <span class="alert alert-danger 5"><?= $errores[5]  ?></span>
            <?php endif;  ?>

          </div>
          <div class="aceptar-terminos">

            <label class="text-blanco">
              <input type="checkbox" class="">
               Acepto los <a class="link text-blanco " href="">Términos y Condiciones</a> de Uso de JUEGOTRIVIA.
            </label>

          </div>
          <div class="contenedor-btn-Registro">
            <input type="submit"  value="Registrarse" class="boton-formulario btn-Registro">
          </div>
        </form>

      </article>
    </section>
  </div>
    @endsection
  
 
    

     
      


     
    
 
