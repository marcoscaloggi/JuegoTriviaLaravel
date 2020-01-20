@extends('layouts.main')
@section('titulo_pagina') Admin @endsection
@section('links')
@routes
<meta id = meta name="csrf-token" content="{{ csrf_token() }}">
<link rel="stylesheet" href="/css/pantalla_admin_preguntas.css"/>
<script type="text/javascript" src="/js/pantalla_admin_preguntas.js"></script>
@endsection
@section('nombre_contenedor')contenedor @endsection
@section('contenido')
<div class="" id=editarUser></div>
<div>
    <h3> Administrar preguntas y categorias </h2>

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
       
        <div id="crear-pregunta" class="text-center py-2 mb-3">
            <div class='row'>
                <h3 class='col-11 mx-auto mb-2  text-white' for="">Editar pregunta</h3>
            </div>
                <div class='row'>
                    <label class='col-4' for="">Pregunta</label>
                    <input class='form-control col-6 mb-2' type="text">
                </div>
                <div class='row'>
                    <label class='col-4' for="">Respuesta correcta</label>
                    <input class='form-control col-6 mb-2' type="text">
                </div>
                <div class='row'>
                    <label class='col-4' for="">incorrecta 1</label>
                    <input class='form-control col-6 mb-2' type="text">
                </div>
                <div class='row'>
                    <label class='col-4' for="">incorrecta 2</label>
                    <input class='form-control col-6 mb-2' type="text">
                </div>
                <div class='row'>
                    <label class='col-4' for="">incorrecta 3</label>
                    <input class='form-control col-6 mb-2' type="text">
                </div>
                <div class='row'>
                    <label class='col-4' for="categorias">Categorias</label>
                    <select class='form-control col-6 mb-2' name="categorias" id="categorias">
                        @foreach($categorias as $categoria)
                     
                            <option value={{$categoria->id}}>{{$categoria->nombre}}</option>
                        @endforeach
                    </select>
                </div>
                <div class='row'>
                    <div style="margin:auto">                    
                        <input class="btn btn-success" type="button" value="Guardar" id=ActualizarPartida>
                        <input class="btn btn-danger"type="button" value="Cancelar" id=CancelarEdicionPartida>
                    </div>

                </div>
        </div>
    
   <div id="tablaUsuarioFetch">
       <h2>Preguntas</h2><button class="btn btn-success"id="crearPregunta">+ Pregunta</button>
       @include('tablas.tablaPreguntas')
    
     
   </div>
          <div id="tablaCategorias">
              <h2>Categorias</h2><button class="btn btn-success"id="crearCategoria">+ Categoria</button>

              <div id="crear-categoria" style="display:none"class="text-center py-2 mb-3">
                <div class='row'>
                    <h3 class='col-11 mx-auto mb-2  text-white' for="">Editar Categoria</h3>
                </div>
                    <div class='row'>
                        <label class='col-4' for="">Nombre</label>
                        <input class='form-control col-6 mb-2' type="text">
                    </div>
                    <div class='row'>
                        <label class='col-4' for="">Estado</label>
                        <select class="col-6 form-control" name="" id="selectEstado">
                            <option value=0>Habilitado</option>
                            <option value=2>Deshabilitado</option>

                        </select>
                    </div>
                   
                    <div class='row'>
                        <div style="margin:auto">                    
                            <input class="m-2 btn btn-success" type="button" value="Guardar" id=ActualizarCategoria>
                            <input class="m-2 btn btn-danger"type="button" value="Cancelar" id=CancelarEdicionCategoria>
                        </div>
    
                    </div>
            </div>
              @include('tablas.tablaCategorias')
        </div>  
    </div>
    
</div>
    @endsection

