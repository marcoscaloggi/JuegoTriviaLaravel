@extends('layouts.main') @section('titulo_pagina') Pantalla Juego @endsection
@section('links')

<link rel="stylesheet" href="/css/pantalla_juego.css" />
<script src="/js/pantalla_juego.js"></script>
<script src="/js/TweenMax.min.js"></script>
<script src="/js/Winwheel.min.js"></script>

@endsection @section('nombre_contenedor')"contenedor"@endsection
@section('contenido')

<div class="contenedor-pantallas mostrar-ruleta " id=pantalla>
   
    <article class="boton-foto" style="z-index:500">
        <input id="FotoPerfil" type="checkbox" />
        <label for="FotoPerfil" id="contenedor-foto"
            ><img src="/storage/{{$user->foto_perfil}}" alt=""
        /></label>
        <div class="menu-ocultable">
            <div>
                <span>Usuario: {{$user->username}}</span>
                <span>Level: {{$user->level}}</span>
                <span>Experiencia: {{$user->experiencia}}</span>
            </div>

            <button type="button" id="btn-CerrarSesion">
                Cerrar Sesion
            </button>
        </div>
    </article>
<section id=datosJuego class="pantalla-ruleta" data-partidaId={{$datosPartida->id}} data-categoria={{$datosPartida->categoria->id}}     data-preguntas={{$jsonPartida}} data-puntos={{ $datosPartida->puntos}} data-vidas={{$datosPartida->vidas}} data-userId={{$user->id}}>
       
        <div class="nombre-categoria">
            <h3 style="background-color:{{$datosPartida->categoria->color}}">
                {{$datosPartida->categoria->nombre}}
            </h3>
        </div>
<div class="ruleta">
        <article class="datos-partida">
            <div class="contenedor-vidas">
                <div class="corazones">
                    @for($i = 0; $i < 3; $i++)
                    <img src='@if($datosPartida->vidas>$i)
                    {{ "/imagenes/corazon.png" }}
                    @else
                    {{ "/imagenes/corazon-gris.png" }}

                    @endif'> @endfor
                </div>
            </div>

            <div class="contenedor-level">
                <span>{{$datosPartida->puntos}} Pts</span>
            </div>
        </article>

        <article>
            <div class="contenedor-ruleta">
                <img src="/imagenes/puntero.png" class="puntero" />
                <canvas id="canvas" height="600" width="600"> </canvas>
                <button id='btnGirarRuleta'
                    type="button"
                    class="btn btn-success btn-lg"
                   >
                    
                    Jugar

                </button>
            
            </div>
        </article>
        <a
            href="{{ route('volver') }}"
            class="btn btn-danger btn-volver btn-lg"
            style="margin: 0.8em"
            >Exit</a
        >
      </div>
    </section>

    <section id=pantalla-preguntas class="pantalla-preguntas">
      <div class="categoriaPregunta">
        <h3>Nombre Categoria de la pregunta y el color</h3></div>
        <div class="contenedor-temporizador">  
          <div class="temporizador">
            <span id=tiempo>30</span>
            <!-- Reloj de 30 segundos en la esquina superior derecha -->
        </div>
      </div>
      
        <div class="contenedorPregunta">
            <p class="pregunta" id=pregunta>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore error nisi aperiam itaque ratione quasi in officiis culpa recusandae, harum ut magnam eius sequi velit similique quia doloribus facilis voluptate.</p>
        </div>
            <div id=respuestas class="contenedorRespuestas">
                <button type="button" class="my-2 respuesta btn btn-light btn-outline-info" id="respuesta1">Respuesta 1</button>
                <button type="button" class="my-2 respuesta btn btn-light btn-outline-info" id="respuesta2">Respuesta 2</button>
                <button type="button" class="my-2 respuesta btn btn-light btn-outline-info" id="respuesta3">Respuesta 3</button type="button">
                <button type="button" class="my-2 respuesta btn btn-light btn-outline-info" id="respuesta4">Respuesta 4</button>
            </div>
        
    </section>
</div>
@endsection
