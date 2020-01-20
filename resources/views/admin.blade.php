@extends('layouts.main')
@section('titulo_pagina') Admin @endsection
@section('links')
@routes
<meta id = meta name="csrf-token" content="{{ csrf_token() }}">
<link rel="stylesheet" href="/css/pantalla_admin.css"/>
<script type="text/javascript" src="/js/pantalla_admin.js"></script>
@endsection
@section('nombre_contenedor')contenedor @endsection
@section('contenido')
<div class="" id=editarUser></div>
<div>
    <h3> Administrar Usuarios </h2>

<div class="buttons-up-right">
        <form action="{{ route('admin.volver') }}" method="post">
            @csrf
            <button class="btn btn-outline-success btn-block my-2">Volver</button>
        </form>
        <form action="{{ route('admin.logout') }}" method="post">
            <button class="btn btn-outline-dark btn-block my-2">Cerrar Sesión</button>
        </form>
    </div>

<div class="botones pt-3 mb-5">
<a href= '{{route('admin.view')}}' class="btn btn-primary btn-lg" id="btn-users">Usuarios</a>
    <a href= '{{route('admin.view.preguntas')}}' class="btn btn-primary btn-lg" id="btn-preguntas">Preguntas y categorias</a>
 
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
                id="busqueda"
                aria-describedby="basic-addon3"
            />
        </div>
   <div id="tablaUsuarioFetch">
       @include('tablas.tablaUsuario')
       {{ $usuarios->links() }}
     
   </div>
            
    </div>
    <div class="preguntas"></div>
    <div class="categorias"></div>
</div>
    @endsection

