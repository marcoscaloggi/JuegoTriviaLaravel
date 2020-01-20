document.addEventListener("DOMContentLoaded", iniciarPagina);
var fila;
function iniciarPagina() {
    let formulario = document.getElementById("crear-pregunta");
    var botonPregunta = document.querySelector("#crearPregunta")
    let formularioCategoria = document.querySelector("#crear-categoria");
    var BotonEditar = document.querySelectorAll(".editarPregunta");
    var EditarCategoria = document.querySelectorAll(".editarCategoria");
    var BorrarCategoria = document.querySelectorAll(".EliminarCategoria");
    var categoria = document.querySelector("#categorias");
    let inputsCategoria = formularioCategoria.querySelectorAll("input");
    let inputs = document.querySelector("#crear-pregunta").querySelectorAll
    ("input");
    let selectEstado= document.querySelector("#selectEstado");
    var BotonEliminar = document.querySelectorAll(".EliminarPregunta");
document.querySelector("#crearCategoria").addEventListener("click",()=>{
    crearCategoria(this,inputsCategoria,formularioCategoria);
});

    botonPregunta.addEventListener("click", () => { crearPregunta(this, inputs, formulario) });
    document.querySelector("#ActualizarPartida").addEventListener("click", () => { ActualizarPregunta(inputs, categoria, fila, formulario) });
    document.querySelector("#CancelarEdicionPartida").addEventListener("click", () => { OcultarEdicionPregunta(formulario) });

document.querySelector("#ActualizarCategoria").addEventListener("click",()=>{
    ActualizarCategoria(inputsCategoria,fila,formularioCategoria,selectEstado);
});

document.querySelector('#CancelarEdicionCategoria').addEventListener("click",function(){
    formularioCategoria.setAttribute("style","display:none");

})

    for (let i = 0; i < BorrarCategoria.length; i++) {
        EditarCategoria[i].addEventListener("click", function () { cargarEdicionCategoria(inputsCategoria, this, formularioCategoria) });
        BorrarCategoria[i].addEventListener("click", function () { EliminarCategoria(this) });

    }


    for (let i = 0; i < BotonEditar.length; i++) {
        BotonEditar[i].addEventListener("click", function () { cargarEdicionPregunta(inputs, this, categoria) });
        BotonEliminar[i].addEventListener("click", function () { EliminarPregunta(this) });

    }
}
function cargarEdicionCategoria(inputs, boton, form) {
   let valorCategoria=document.querySelector("#selectEstado");
    fila = boton.parentNode.parentNode;
console.log(inputs);
console.log(form);


    inputs[0].value = fila.cells[1].innerText;
  
    for (let i = 0; i < valorCategoria.options.length; i++) {
        if (valorCategoria.options[i].value == fila.cells[2].innerText) {
            valorCategoria.options.selectedIndex = i;
            break;
        }
    }
    form.setAttribute('style', 'display:block');

}
function EliminarCategoria(boton) {
    Swal.fire({
        title: 'Estas seguro?',
        text: "Tú no podrás revertir esto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar!'
    }).then((result) => {
        if (result.value) {


            boton.parentNode.submit();

        }
    })
}
function OcultarEdicionPregunta(formulario) {
    formulario.setAttribute("style", "display:none");
}
function crearPregunta(boton, inputs, formulario) {
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";

    formulario.setAttribute("style", "display:block");
    formulario.querySelector("H3").innerHTML = 'Crear Pregunta'

}
function crearCategoria(boton, inputs, formulario) {
    inputs[0].value = "";
    formulario.setAttribute("style", "display:block");
    formulario.querySelector("H3").innerHTML = 'Crear Categoria';

}
function EliminarPregunta(boton) {

    Swal.fire({
        title: 'Estas seguro?',
        text: "Tú no podrás revertir esto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar!'
    }).then((result) => {
        if (result.value) {


            boton.parentNode.submit();

        }
    })
}


function ActualizarCategoria(inputs,fila,formularioEdit,estado){
    let errores = 0;
    console.log(inputs);

    
    if (inputs[0].value.length >0) {

        let token = document.querySelector("#meta").getAttribute('content');
        var formulario = new FormData();

        formulario.append("nombre", inputs[0].value);
        formulario.append("fijo",estado.options[estado.options.selectedIndex].value);
        console.log(estado.options[estado.options.selectedIndex].value);

        if (formularioEdit.querySelector("H3").innerHTML == 'Editar Categoria') {
            formulario.append("id", fila.cells[0].innerText);

            fetch(route("admin.edit.categoria"), {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRF-TOKEN": token
                },

                method: "POST",
                body: formulario
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.ok) {
                        Swal.fire({
                            icon: 'success',
                            title: data.ok,
                            showClass: {
                                popup: 'animated zoomIn faster '
                            },
                            hideClass: {
                                popup: 'animated fadeOut faster'
                            }
                        }).then(function(){
                              fila.cells[1].innerText = inputs[0].value;
                     
                        fila.cells[2].innerText = estado.options[estado.options.selectedIndex].value;
                        OcultarEdicionPregunta(formularioEdit);
                       
                        })

                      



                    }
                    if (data.error) {
                        Swal.fire({
                            icon: 'error',
                            title: data.error,
                            showClass: {
                                popup: 'animated zoomIn faster '
                            },
                            hideClass: {
                                popup: 'animated fadeOut faster'
                            }
                        })
                    }
                });
        } else {

            fetch(route("admin.crear.categoria"), {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRF-TOKEN": token
                },

                method: "POST",
                body: formulario
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.ok) {
                        Swal.fire({
                            icon: 'success',
                            title: data.ok,
                            showClass: {
                                popup: 'animated zoomIn faster '
                            },
                            hideClass: {
                                popup: 'animated fadeOut faster'
                            }
                        })


                        OcultarEdicionPregunta(formularioEdit);
                        location.reload();



                    }
                    if (data.error) {
                        Swal.fire({
                            icon: 'error',
                            title: data.error,
                            showClass: {
                                popup: 'animated zoomIn faster '
                            },
                            hideClass: {
                                popup: 'animated fadeOut faster'
                            }
                        })
                    }
                });



        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacios o muy cortos',
            showClass: {
                popup: 'animated zoomIn faster '
            },
            hideClass: {
                popup: 'animated fadeOut faster'
            }
        })
    }
}
function ActualizarPregunta(inputs, categoria, fila, formularioEdit) {
    let errores = 0;
    console.log(inputs);

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value.length < 1 ? errores++ : "";
    }
    if (errores == 0) {

        let token = document.querySelector("#meta").getAttribute('content');
        var formulario = new FormData();

        formulario.append("pregunta", inputs[0].value);
        formulario.append("correcta", inputs[1].value);
        formulario.append("incorrecta1", inputs[2].value);
        formulario.append("incorrecta2", inputs[3].value);
        formulario.append("incorrecta3", inputs[4].value);
        formulario.append("categoria", categoria.options[categoria.options.selectedIndex].value);

        if (formularioEdit.querySelector("H3").innerHTML == 'Editar pregunta') {
            formulario.append("id", fila.cells[0].innerText);

            fetch(route("admin.edit.pregunta"), {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRF-TOKEN": token
                },

                method: "POST",
                body: formulario
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.ok) {
                        Swal.fire({
                            icon: 'success',
                            title: data.ok,
                            showClass: {
                                popup: 'animated zoomIn faster '
                            },
                            hideClass: {
                                popup: 'animated fadeOut faster'
                            }
                        })

                        fila.cells[1].innerText = inputs[0].value;
                        fila.cells[2].innerText = inputs[1].value;
                        fila.cells[3].innerText = inputs[2].value;
                        fila.cells[4].innerText = inputs[3].value;
                        fila.cells[5].innerText = inputs[4].value;
                        fila.cells[6].innerText = categoria.options[categoria.options.selectedIndex].text;
                        OcultarEdicionPregunta(formularioEdit);




                    }
                    if (data.error) {
                        Swal.fire({
                            icon: 'error',
                            title: data.error,
                            showClass: {
                                popup: 'animated zoomIn faster '
                            },
                            hideClass: {
                                popup: 'animated fadeOut faster'
                            }
                        })
                    }
                });
        } else {

            fetch(route("admin.crear.pregunta"), {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRF-TOKEN": token
                },

                method: "POST",
                body: formulario
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.ok) {
                        Swal.fire({
                            icon: 'success',
                            title: data.ok,
                            showClass: {
                                popup: 'animated zoomIn faster '
                            },
                            hideClass: {
                                popup: 'animated fadeOut faster'
                            }
                        })


                        OcultarEdicionPregunta(formularioEdit);
                        location.reload();



                    }
                    if (data.error) {
                        Swal.fire({
                            icon: 'error',
                            title: data.error,
                            showClass: {
                                popup: 'animated zoomIn faster '
                            },
                            hideClass: {
                                popup: 'animated fadeOut faster'
                            }
                        })
                    }
                });



        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacios o muy cortos',
            showClass: {
                popup: 'animated zoomIn faster '
            },
            hideClass: {
                popup: 'animated fadeOut faster'
            }
        })
    }
}
function cargarEdicionPregunta(inputs, boton, categoria) {
    let formulario = document.getElementById("crear-pregunta");
    console.log(formulario);

    fila = boton.parentNode.parentNode;


    inputs[0].value = fila.cells[1].innerText;
    inputs[1].value = fila.cells[2].innerText;
    inputs[2].value = fila.cells[3].innerText;
    inputs[3].value = fila.cells[4].innerText;
    inputs[4].value = fila.cells[5].innerText;



    for (let i = 0; i < categoria.options.length; i++) {
        if (categoria.options[i].text == fila.cells[6].innerText) {
            categoria.options.selectedIndex = i;
            break;
        }
    }
    formulario.setAttribute('style', 'display:block');




}