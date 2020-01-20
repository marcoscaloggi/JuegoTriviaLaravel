@extends('layouts.main')
@section('titulo_pagina') Admin @endsection
@section('links')
<link rel="stylesheet" href="/css/editar_perfil.css"/>
<script type="text/javascript" src="/js/editar_perfil.js"></script>
@endsection
@section('nombre_contenedor')contenedor @endsection
@section('contenido')

<div style="position:relative">


<div class=buttons-up-right>
        <form action={{ route('admin.view') }} method=get>
            <button class="btn btn-outline-success btn-block my-2">Volver</button>
        </form>
        <form action={{ route('admin.logout') }} method=post>
            <button class="btn btn-outline-dark btn-block my-2">Cerrar Sesión</button>
        </form>
    </div>
    @if(session("mensaje"))
  
        <div class="alert alert-success">
            <ul>
                <li>{{session("mensaje")}}</li>
            </ul>
        </div>
        
        @endif
        @if ( $errors->any() )
<div class="alert alert-danger">
    <ul>
        @foreach($errors->all() as $error)
        <li>{{ $error }}</li>
        @endforeach
    </ul>
</div>
@endif
    <div class='row justify-content-center w-100'> 
         <div class='col-md-8'> 
        <div class='card mt-2'> 
        <div class='card-header'>Editar Usuario</div> 
        <div class='card-body'> 
        <form action={{route('admin.actualizar.user',$usuario->id)}} method="POST" > 
        {{ csrf_field() }}
        {{ method_field('PUT') }}
        <div class='form-group row'> 
        <label for='name' class='col-md-4 col-form-label text-md-right'>Nombre</label> 
        <div class='col-md-6'> 
        <input id='name' type='text' class='form-control' name='name' value= {{$usuario->name}} 
         required > 
        <p id=errorNomb></p> 
        </div> 
        </div> 


        <div class='form-group row'> 
        <label for='surname' class='col-md-4 col-form-label text-md-right'>Apellido</label> 
        <div class='col-md-6'> 
        <input id='surname' type='text' class='form-control' name='surname' value= {{$usuario->surname}} 
        required  > 
        <p id='errorAp'></p> 
        </div> 
        </div> 


        <div class='form-group row'> 
        <label for='email' class='col-md-4 col-form-label text-md-right'>Email</label> 
        <div class='col-md-6'> 
        <input id='email' type='email' class='form-control ' name='email' value = {{$usuario->email}} 
        required> 
        <p id='errorEm'></p> 
        </div></div> 


        <div class='form-group row'> 
        <label for='username' class='col-md-4 col-form-label text-md-right'>Nombre de Usuario</label> 
        <div class='col-md-6'> 
        <input id='username' type='text' class='form-control' name='username' value= {{$usuario->username}}
        required  > 
        <p id='errorUserName'></p> 
        </div> 
         </div> 

         <div class='form-group row'> 
            <label for='tipo' class='col-md-4 col-form-label text-md-right'>Tipo</label> 
            <div class='col-md-6'> 
           <select name="tipo" id="tipoUsuario" class="form-control">
               <option @if ($usuario->tipo=='admin'){{"selected=true"}}@endif value="admin">Administrador</option>
               <option @if ($usuario->tipo=='jugador'){{"selected=true"}}@endif value="jugador">Jugador</option>
           </select>
           <p id='errorTipo'></p>
       
            </div> 
             </div> 

             <div class='form-group row'> 
                <label for='level' class='col-md-4 col-form-label text-md-right'>Level</label> 
                <div class='col-md-6'> 
                <input id='level' type="number" class='form-control' name='level' value= {{$usuario->level}}
                required  > 
                <p id='errorLevel'></p> 
                </div> 
                 </div> 
                 
                 <div class='form-group row'> 
                    <label for='username' class='col-md-4 col-form-label text-md-right'>Experiencia</label> 
                    <div class='col-md-6'> 
                    <input id='experiencia' type='number' class='form-control' name='experiencia' value= {{$usuario->experiencia}}
                    required  > 
                    <p id='errorExperiencia'></p> 
                    </div> 
                     </div> 
       
        <div class='form-group row'> 
        <label for='password' class='col-md-4 col-form-label text-md-right'>contraseña nueva</label> 
        <div class='col-md-6'> 
         <input id='password' type='password' name='password' class='form-control' > 
         <p id='errorCon'></p> 
         </div> 
         </div> 


         <div class='form-group row'> 
        <label for='password-confirm' class='col-md-4 col-form-label text-md-right'>Confirmar contraseña</label> 
         <div class='col-md-6'> 
          <input id='password-confirm' disabled type='password' class='form-control' name='password_confirmation' > 
          <p id='errorConCon'></p> 
          </div> 
        </div> 


        <div class='form-group row'> 
         <label for='pais' class='col-md-4 col-form-label text-md-right'>País</label> 
         <div class='col-md-6'> 
         <select class="form-control" name='pais' id='pais' data-pais={{$usuario->pais}} data-provincia={{$usuario->provincia}}><select> 
        </div> 
         </div> 


         <div class='form-group row'><div class='col-md-6' id=provincias></div> 
         </div> 
         <div class='form-group row mb-0'> 
         <div class='col-md-6 offset-md-4'> 
         <button id='enviarEdicion'  class='btn btn-primary'> 
          Guardar 
         </button>  
         
         </div> 
         </div> 
        </form> 
        </div> 
         </div> 
         </div> 
        </div>


</div>
    @endsection

