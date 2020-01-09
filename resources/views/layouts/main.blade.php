<!DOCTYPE html>
<html lang="es" style="position:relative">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('titulo_pagina')</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Fredoka+One&display=swap" rel="stylesheet">
   
    <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap" rel="stylesheet">
    
    <script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    
    <script type="text/javascript" src="/js/sweetalert2.js" ></script>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script src="https://kit.fontawesome.com/0f33fea696.js"></script>

     <link rel="stylesheet" href="/css/fontello.css">
    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/css/footer.css">
    <link rel="stylesheet" href="/css/animate.css">
    <link rel="stylesheet" href="/css/header.css">
    <link rel="stylesheet" href="/css/sweetalert2.css">

    
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    @yield('links')
</head>
<body>
    <div class= @yield('nombre_contenedor') id= @yield('id_contenedor') style="overflow-x:hidden; min-height: 100vh; flex-direction: column; display: flex;">
    
        <header>
            <div class="heredar_height">
                <a href="" class="heredar_height contenedor-logo">
                  <img src="/imagenes/logo-juego.png" alt="" class="heredar_height">
                </a>
                <a href="">
                  <h1 style= "margin: auto 0" > JuegoTrivia.com </h1>
                </a>
          </div>
          </header>
          <div class="top-10vh"></div>

        @yield('contenido')

        <footer>
            <div class="row">
                <article class="columna-footer col-3 no-gutters">
                  <h6>
                    EMPRESA
                  </h6>
                  <ul>
                    <li>
                      <a href="/condiciones-de-uso">Condiciones de uso</a>
                    </li>
                    <li>
                      <a href="/politica-de-privacidad">Política de Privacidad</a>
                    </li>
                    <li>
                      <a href="/privacy-policy-kids">Política de privacid...</a>
                    </li>
                    <li>
                      <a href="/informacion-padres">Información para los padres</a>
                    </li>
                    <li>
                      <a href="/cookie-policy">Cookies</a>
                    </li>
                    <li>
                      <a href="#" id="consent-link">Consentimiento de cookies</a>
                    </li>
                    <li>
                      <a href="">Sobre nosotros</a>
                    </li>
                  </ul>
                </article>
                <article class="columna-footer col-3 no-gutters">
                  <h6>
                    RECURSOS
                  </h6>
                  <ul>
                    <li>
                      <a href="">Anúnciate con nosotros</a>
                    </li>
                    <li>
                      <a href="" >Enviar un juego</a>
                    </li>
                  </ul>
                </article>
            
                <article class="columna-footer col-3 no-gutters">
                  <h6>
                    ASISTENCIA
                  </h6>
                  <ul>
                    <li>
                      <a href="">Ayuda</a>
                    </li>
                  </ul>
                </article>
            
                <article class="columna-footer col-3 no-gutters">
                  <h6>IDIOMAS</h6>
                  <ul>
                    <li><a href="">English</a></li>
                    <li><a href="">British English</a></li>
                    <li><a href="">Deutsch</a></li>
                    <li><a href="">Русский</a></li>
                    <li><a href="">Bahasa Indonesia</a></li>
                    <li><a href="">Italiano</a></li>
                    <li><a href="">Français</a></li>
                  </ul>
                </article>
              </div>
            </footer>
            

    </div>
    <script src = "https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"> </script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    
</body>
</html>