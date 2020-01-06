@extends('layouts.main')
@section('titulo_pagina')Perfil - {{$user->username}}@endsection
@section('links')
<link rel="stylesheet" href="/css/pantalla_perfil.css">
<script type="text/javascript" src="/js/pantalla_perfil.js"></script>


@endsection
@section('nombre_contenedor')contenedor @endsection
@section('contenido')

    <div class="header">
      <input type="checkbox" id=btn-menu name="" value="">
      <label for="btn-menu" class="icon-menu"></label>
      <nav class="navegacion">


        <ul class="barra-responsive">
          <li class="contenedor-foto">
          <img src="/storage/{{$user->foto_perfil}}" alt="" id=img-usuario class="img-usuario">

            <div class="div-agregar-img oculto">
              <form class="" method="post" id=form-img enctype="multipart/form-data">
                
                <label for="inputimg"><img class="icon-foto"></label>
                <input name="foto" id="inputimg" type="file" style="display:none">
              <input type="text" id="iduser"name="user" style="display:none" value="{{$user->foto_perfil}}"> </form> </div> </li> <li class="datos-usuario">
                <ul class="columna">
                  <li class="nombreUser"><span>{{$user->username}}</span></li>
                  <ul class="otrosDatos">
                  <li><span>Level: {{$user->level}}</span></li>
                  <li><span>Exp: {{$user->experiencia}}/9999</span></li>

                  </ul>

                </ul>
          </li>
          <li class="botones-nav">
            <button type="button" class="config"><img class="config-icon" src="/imagenes/config.png"></button>
          <form style="display: contents" action="{{route('Ajax.logout')}}" method="post">
              @csrf
               <button id=logout type="submit" class="cerrarsesion"><img src="/imagenes/salida.png" class="puerta-icon"></button>
            </form>
           
          </li>
        </ul>


      </nav>
    </div>

    <div class="contenedor-pantalla">
      <!-- Notas:
  - Falta el formulario para editar lo datos del Usuario

  -En modo tablet y mobile tengo que desactivar el hover y con javascript agregar onclick en la foto del usuario para que muestre el div que permite cambiar la foto.
  este tiene que tener un setTimeout() para que desaparezca solo

  -Pensar en la logica para subir de nivel y Exp

  -Eliminar los botones de cerrarsesion y congig y pasarle los estilos a los <a> que los contienen
-->

      <section class="section-partidas">
        <article class="article-categorias">
          <h4>Categorias</h4>
          <div class="contenedor-categorias">
@foreach ($categoriasJugables as $categoria)
          <a id='' href= "{{ route('partida.crear', ['user' => $user->id,'categoria'=>$categoria->id]) }}" class="categoria" style="background-color: {{$categoria->color}}"><span>{{$categoria->nombre}}</span></a>
@endforeach
     

            

         
           

           

          </div>
        </article>
        <article class="article-partidas">
          <h4>Partidas</h4>
          <div class="contenedor-partidas">


          
         
@foreach ($user->partidas as $partida)
          <a id='' href= "
          @if($partida->vidas>=0)
            {{ route('partida.cargar', ['PartidaId'=>$partida]) }}
          @else{{''}}
          @endif "
        class="juego" style="background-color:{{$partida->categoria->color}} ">
                
        <span class="estado-partida">@if($partida->vidas<0)
            {{'Finalizado'}}
        @else
            {{'En curso'}}
        @endif 
            
        </span>


        
      <span class="fecha-juego">arreglar esto</span>
                <span class="puntos-juego">{{$partida->puntos}} Pts</span>
                <div class="vidas">
                  @for ($i = 0; $i < 3; $i++)
                    <img src= @if($partida->vidas>$i)
                                {{'/imagenes/corazon.png'}} 
                              @else 
                                {{'/imagenes/corazon-gris.png'}} 
                              @endif 
                            alt="" class="size-icon icon-vida">  
                @endfor
                  
               
                
                </div>
              </a>
@endforeach
            

           

          </div>
        </article>
      </section>
      <section class="section-ranking">

        <input type="checkbox" id=btn-ranking name="" value="">
        <label for="btn-ranking" class="titulo-mis-puntos"><span>Mis puntuaciones</span> </label>

       
        <table class="mis-puntajes">
          <thead class="tabla-ranking">
            <tr>

              <th>Categoria</th>
              <th>Puntos</th>
            </tr>

          </thead>
          <tbody>
            @foreach ($puntajes as $puntaje)
                <tr>
                <th>{{$puntaje->categoria}}</th>
                <th> {{$puntaje->puntos}}</th>
              </tr> 
            @endforeach
             
          
          </tbody>
        </table>
      

        <table style="margin-top:2%;margin-bottom: 15px;width:100%" id=tabla-ranking>

          <thead class="tabla-ranking ">
            <tr>
              <th colspan="3" class="titulo-tabla">
                <button type="button" id=flecha_retroceder class="btn btn-info"><img src="/imagenes/flecha-izquierda.png" class="icon-flecha"></button> Ranking <button type="button" id=flecha_avanzar class="btn btn-info"><img src="/imagenes/flecha-derecha.png" class="icon-flecha"></button>
              </th>

            </tr>
            <tr>
              <th colspan="3" id=categoria_tabla><span id=nombre_categoria></span> </th>
            </tr>
            <tr>
              <th style="width:13%">/</th>
              <th style="width:67%">Usuario</th>
              <th style="width:20%">Puntos</th>
            </tr>
          </thead>

          <tbody id=body_tabla_ranking>

           
          </tbody>
        </table>
      </section>
    </div>
  @endsection