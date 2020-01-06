@extends('layouts.main')
@section('titulo_pagina') Admin @endsection
@section('links')
<link rel="stylesheet" href="/css/pantalla_admin.css"/>
<script type="text/javascript" src="/js/pantalla_admin.js"></script>
@endsection
@section('nombre_contenedor')contenedor @endsection
@section('contenido')
<div class="buttons-up-right">
        <form action="{{ route('admin.volver') }}" method="post">
            <button class="btn btn-dark btn-block my-2">Volver</button>
        </form>
        <form action="{{ route('admin.logout') }}" method="post">
            <button class="btn btn-danger btn-block my-2">Cerrar Sesión</button>
        </form>
    </div>

<div class="botones pt-3 mb-5">
    <button class="btn btn-primary btn-lg" id="btn-users">Usuarios</button>
    <button class="btn btn-primary btn-lg" id="btn-preguntas">Preguntas</button>
    <button class="btn btn-primary btn-lg" id="btn-partidas">Categorias</button>
</div>
<div class="users">
   
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">
                    Buscar</span
                >
            </div>
            <input
                type="text"
                class="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
            />
        </div>
        <table class="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nombre Usuario</th>
                    <th scope="col">Foto de Perfil</th>
                    <th scope="col">contraseña</th>
                    <th scope="col">Experiencia</th>
                    <th scope="col">Level</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Editar/Eliminar</th>





                  </tr>
                </thead>
                <tbody>
                    @foreach ($usuarios as $usuario)
                    <tr>
                            <td>{{$usuario->id}}</td>
                            <td>{{$usuario->name}}</td>
                            <td>{{$usuario->surname}}</td>
                            <td>{{$usuario->email}}</td>
                            <td>{{$usuario->username}}</td>
                            <td>{{$usuario->foto_perfil}}</td>
                            <td>{{$usuario->password}}</td>
                            <td>{{$usuario->experiencia}}</td>
                            <td>{{$usuario->level}}</td>
                            <td>
                                <select name="" id="" value=$usuario->tipo><option value="jugador">jugador</option>
                                    <option value="admin">admin</option></select>
                                
                            </td>
                            <td></td>

                    </tr>
                    @endforeach
                
                  
                </tbody>
              </table>
              
            
    </div>
    <div class="preguntas"></div>
    <div class="categorias"></div>

    @endsection
</div>
