var preguntas,
    usuarioId,
    partidaId,
    categoriaId,
    puntos,
    vidas,
    objRuleta,
    winningSegment,
    distnaciaXm,
    distnaciaY,
    ctx,
    correcta,
    tiempo;

function inicioPag() {
    preguntas = JSON.parse(document.getElementById("datosJuego").dataset.preguntas);
   
    
    usuarioId = document.getElementById("datosJuego").dataset.userId;
    partidaId = document.getElementById("datosJuego").dataset.partidaid;
    categoriaId = document.getElementById("datosJuego").dataset.categoria;
    puntos = parseInt(document.getElementById("datosJuego").dataset.puntos);
    vidas = parseInt(document.getElementById("datosJuego").dataset.vidas);

  
    distnaciaX = 150;
    distnaciaY = 50;
    ctx;

    document
        .getElementById("btnGirarRuleta")
        .addEventListener("click", GirarRuleta);

    document
        .getElementById("respuesta1")
        .addEventListener("click", seleccionRespuesta);
    document
        .getElementById("respuesta2")
        .addEventListener("click", seleccionRespuesta);
    document
        .getElementById("respuesta3")
        .addEventListener("click", seleccionRespuesta);
    document
        .getElementById("respuesta4")
        .addEventListener("click", seleccionRespuesta);

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
                callbackFinished: "Mensaje()"
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
            document.querySelector("#pantalla-preguntas").style.display =
                "block";
            document
                .getElementById("pantalla")
                .classList.toggle("mostrar-pregunta");

            tiempo = 10;

            time = setInterval(function() {
                if (tiempo >= 0) {
                    document.getElementById("tiempo").innerHTML = tiempo;
                    tiempo--;
                } else {
                    clearInterval(time);
                    seleccionRespuesta();
                }
            }, 1000);
        }
        objRuleta.stopAnimation(false);
        objRuleta.rotationAngle = 0;
        objRuleta.draw();
        cargarPregunta(categoriaId, preguntas, partidaId);
        //bigButton.disabled = false;
    });
}

function cargarPregunta(categoria, preguntas, partida) {
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        }
    });

    $.ajax({
        type: "POST",
        data: { categoria: categoria, preguntas: preguntas, partida: partida },
        url: "/partida/buscar/pregunta",
        success: function(data) {
           
            cargarNombreCategoria(data[0]["categoria_id"]);
            asignarPreguntas(data[0]);
        }
    });
}
function cargarNombreCategoria(idCategoria) {
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        }
    });

    $.ajax({
        type: "POST",
        data: { idCategoria: idCategoria },
        url: "/partida/buscar/categoriaPregunta",
        success: function(data) {
       
            var Nombrecategoria = document.querySelector(
                "div.categoriaPregunta > H3"
            );
            Nombrecategoria.innerText = data.nombre;
            Nombrecategoria.style.backgroundColor = data.color;
        }
    });
}
function asignarPreguntas(pregunta) {
    preguntas.push(pregunta['id']);

    var listadoRespuestas = document.querySelectorAll("#respuestas > button");
    var TextoPregunta = pregunta.pregunta;
    var respuestaCorrecta = Math.floor(Math.random() * (4 - 0)) + 0;
    var incorrectas = Array(
        pregunta.incorrecta_1,
        pregunta.incorrecta_2,
        pregunta.incorrecta_3
    );
    var pos = 0;
    correcta = pregunta.respuesta_correcta;
    document.querySelector("#pregunta").innerHTML = TextoPregunta;
    listadoRespuestas[respuestaCorrecta].innerText =
        pregunta.respuesta_correcta;

 

    for (let i = 0; i < 4; i++) {
        if (i == respuestaCorrecta) {
            continue;
        } else {
            listadoRespuestas[i].innerText = incorrectas[pos];
            pos++;
        }
    }
}
function seleccionRespuesta() {
    if (tiempo > 0) {
        clearInterval(time);
        if (this.innerText == correcta) {
            this.style.backgroundColor = "palegreen";
            Respuesta("correcta");
        } else {
            this.style.backgroundColor = "red";
            Respuesta("incorrecta");
        }
    } else {
        Respuesta("tiempo");
    }
}

function Respuesta(respuesta) {
    calcularPuntos(respuesta);
  
    swal.fire({
        title: respuesta,

        showCancelButton: false,
        confirmButtonColor: "#e74c3c",
        confirmButtonText: "Ok"
    }).then(result => {
        if (result.value) {
            // document.querySelectorAll('respuesta').style.backgroundColor =
            //     "white";
            document
                .getElementById("pantalla")
                .classList.toggle("mostrar-pregunta");
            document.querySelector("#pantalla-preguntas").style.display =
                "none";
            document.getElementById("btnGirarRuleta").disabled = false;
            resetearEstiloRespuestas();
            if (respuesta != "correcta") {
    
                actualizarVidas();
            }
                actualizarPartidaDB();
        }
    
    });
    
}
function resetearEstiloRespuestas() {
    var listadoRespuestas = document.querySelectorAll("#respuestas > button");
    for (let i = 0; i < listadoRespuestas.length; i++) {
        listadoRespuestas[i].style.backgroundColor = "white";
    
    }}
    function calcularPuntos(respuesta) {
    
        
        switch (winningSegment.text) {
            case "X1":
                if (respuesta == "correcta") {
                    puntos += 100;
                   

                }

                break;
            case "X2":
                if (respuesta == "correcta") {
                    puntos += 100 * 2;
                   
                }
                break;
            case "X4":
                if (respuesta == "correcta") {
                    puntos += 100 * 4;
                   
                }
                break;
            case "/2":
                if (respuesta == "correcta") {
                    puntos += 100;
                   
                } else {
                    puntos /= 2;
                }
                break;
            default:
          
                break;
        }
      
        document.querySelector("div.contenedor-level > SPAN").innerHTML=puntos+" Pts";
    }
    function actualizarVidas() {
var listaCorazones=document.querySelectorAll(".corazones > IMG");
console.log(listaCorazones);

vidas--;

if(vidas>=0){
for (let i = 0; i < 3; i++) {
    if(i >= vidas){

        listaCorazones[i].setAttribute("src","/imagenes/corazon-gris.png");
        
    }
    
}


}}

function actualizarPartidaDB(){
    console.log("vidas: " + vidas);
    console.log("puntos: " + puntos);
    
   
    
        let token = document.querySelector("#meta").getAttribute('content');
        var formulario = new FormData();
        formulario.append("partidaId",partidaId);
        formulario.append("vidas",vidas);
        formulario.append("puntos",puntos);

        
        fetch(route("juego.ajax.actualizar"),{
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": token
               },

            method: "POST",
            body: formulario
        })
            .then(res => res.json())
            .then(data=>{
              console.log(data);
                
            })
    
    

    if(vidas<0){
    swal.fire({
        title:"Juego Terminado",

        showCancelButton: false,
        confirmButtonColor: "#e74c3c",
        confirmButtonText: "Ok"
    }).then(result => {
        if (result.value) {
            location.href=route('home');
        }
     
       
    });
}
}
