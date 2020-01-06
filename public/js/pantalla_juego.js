var preguntas,usuarioId,partidaId,categoriaId,puntos,vida,objRuleta,winningSegment,distnaciaXm,distnaciaY,ctx;

function inicioPag() {
     preguntas = document.getElementById("datosJuego").dataset.preguntas;
     usuarioId = document.getElementById("datosJuego").dataset.userId;
     partidaId = document.getElementById("datosJuego").dataset.partidaId;
     categoriaId = document.getElementById("datosJuego").dataset.categoria;
     puntos = document.getElementById("datosJuego").dataset.puntos;
     vidas = document.getElementById("datosJuego").dataset.vidas;

     objRuleta;
     winningSegment;
     distnaciaX = 150;
     distnaciaY = 50;
     ctx;

    document
        .getElementById("btnGirarRuleta")
        .addEventListener("click", GirarRuleta);
    function GirarRuleta() {
        objRuleta.startAnimation();
        this.disabled = true;
    }

    function DibujarRuleta(ArregloElementos) {
        objRuleta = new Winwheel({
            canvasId: "canvas",
            numSegments: ArregloElementos.length,
            outerRadius: 250,
            innerRadius: 80,
            textOrientation: "curved", // Set orientation. horizontal, vertical, curved.
            textDirection: "normal", // Set direction. normal (default) or reversed.
            textFontFamily: "Courier",
            textFontSize: 30,
            textFontWeight: 800,
            segments: ArregloElementos,
            animation: {
                type: "spinToStop", // Type of animation.
                duration: 5, // How long the animation is to take in seconds.
                spins: 8,
                'callbackFinished' : 'Mensaje()'
            }
        });
    }

  
    function leerElementos() {
        //txtListaElementos=$('#ListaElementos').val().trim();
        //var Elementos = txtListaElementos.split('\n');
        var Elementos = ["X2", "X1", "X2", "X1", "X4", "X1", "/2", "X1"];
        var colores = [
            "green",
            "yellow",
            "green",
            "yellow",
            "green",
            "yellow",
            "red",
            "yellow"
        ];
        var ElementosRuleta = [];
        var contador = 0;
        Elementos.forEach(function(valor) {
            ElementosRuleta.push({
                fillStyle: colores[contador],
                textStrokeStyle: "#b6c7c7",
                text: valor
            });
            contador++;
        });

        DibujarRuleta(ElementosRuleta);
    }

    leerElementos();

    //var audio = new Audio("alarma.mp3"); // Create audio object and load desired file.
    function SonidoFinal() {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }
    
}
document.addEventListener("DOMContentLoaded", inicioPag);
function Mensaje() {
       
    winningSegment = objRuleta.getIndicatedSegment();
    // SonidoFinal();
    swal.fire({
        title: " ¡ " + winningSegment.text + " !",

        showCancelButton: false,
        confirmButtonColor: "#e74c3c",
        confirmButtonText: "Ok"
    }).then(result => {
        if (result.value) {
            //Lo que pasa despues que le da ok al cartel, me tiene que llevar a la pagina de preguntas
            document
                .getElementById("pantalla")
                .classList.toggle("mostrar-pregunta");
            let tiempo = 10;
            let time;
            time = setInterval(function() {
                if (tiempo >= 0) {
                    document.getElementById("tiempo").innerHTML = tiempo;
                    tiempo--;
                } else {
                    clearInterval(time);
                }
            }, 1000);
        }
        objRuleta.stopAnimation(false);
        objRuleta.rotationAngle = 0;
        objRuleta.draw();
        cargarPregunta(categoriaId,preguntas,partidaId);
        //bigButton.disabled = false;
    });
}

function cargarPregunta(categoria, preguntas,partida) {
   
   
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        }
    });

    $.ajax({
        type: "POST",
        data: { 'categoria': categoria, 'preguntas': preguntas,'partida':partida },
        url: "/partida/buscar/pregunta",
        success: function(data) {
            console.log(data[0]);
            cargarNombreCategoria();
            asignarPreguntas(data[0]);

        }
    });
}
function cargarNombreCategoria(nombreCategoria) {}
function asignarPreguntas(pregunta){
    var listadoRespuestas = document.getElementById('respuestas');
    console.log(listadoRespuestas);
     
var respuestaCorrecta= Math.floor(Math.random() * (4 - 0)) + 0;

}