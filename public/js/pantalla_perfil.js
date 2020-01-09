var posicion_categ;
var cant_categ;
var categorias;

function inicioPag() {
    var usuario = document.querySelector("#data").dataset.user;
    var pais = document.querySelector("#pais").innerText;
    var provincia = document.querySelector("#provincia").innerText;
    console.log(provincia);

    usuario = JSON.parse(usuario);
    console.log(usuario);

    document
        .querySelector("#cerrarEdicion")
        .addEventListener("click", function() {
            document
                .querySelector("#editarUser")
                .setAttribute("class", "editar-user d-none");
        });
    listaCategorias();
    document
        .getElementById("flecha_avanzar")
        .addEventListener("click", flechaAvanzar);
    document
        .getElementById("flecha_retroceder")
        .addEventListener("click", flechaRetroceder);
    document
        .getElementById("modificarUser")
        .addEventListener("click", modificarUser);
    $("#inputimg").change(cambiarFoto);

    function modificarUser() {}

    function listaCategorias() {
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            }
        });

        $.ajax({
            type: "POST",
            url: "/ajax/listaCategorias",
            success: function(data) {
                cant_categ = data.length - 1;
                categorias = data;
                posicion_categ = 0;

                asignarCategoria(
                    categorias[posicion_categ]["nombre"],
                    categorias[posicion_categ]["color"],
                    categorias[posicion_categ]["id"]
                );
            }
        });
    }

    function flechaAvanzar() {
        if (posicion_categ < cant_categ) {
            posicion_categ++;
            asignarCategoria(
                categorias[posicion_categ]["nombre"],
                categorias[posicion_categ]["color"],
                categorias[posicion_categ]["id"]
            );
        } else {
            posicion_categ = 0;
            asignarCategoria(
                categorias[posicion_categ]["nombre"],
                categorias[posicion_categ]["color"],
                categorias[posicion_categ]["id"]
            );
        }
    }
    function flechaRetroceder() {
        if (posicion_categ > 0) {
            posicion_categ--;
            asignarCategoria(
                categorias[posicion_categ]["nombre"],
                categorias[posicion_categ]["color"],
                categorias[posicion_categ]["id"]
            );
        } else {
            posicion_categ = cant_categ;
            asignarCategoria(
                categorias[posicion_categ]["nombre"],
                categorias[posicion_categ]["color"],
                categorias[posicion_categ]["id"]
            );
        }
    }
    function cambiarFoto() {
        var campo = $("#inputimg").val().length;

        if (campo > 1) {
            var formData = new FormData();
            var files = $("#inputimg")[0].files[0];
            formData.append("imagen", files);

            $.ajaxSetup({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                }
            });

            $.ajax({
                type: "post",
                data: formData,
                url: "/Ajax/CambiarFoto",
                processData: false,
                contentType: false,

                success: function(response) {
                    console.log(response);

                    $(".img-usuario").attr("src", "/storage/" + response);
                }
            });
        }
    }
    function asignarCategoria(nombre, color, id) {
        document.getElementById("nombre_categoria").innerHTML = nombre;

        document.getElementById("categoria_tabla").style.background = color;
        console.log("nombre: " + nombre + " color: " + color + " id: " + id);
        document.getElementById("body_tabla_ranking").innerHTML = "";
        cargarRankig(id);
    }
    function cargarRankig(id) {
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            }
        });

        $.ajax({
            type: "POST",
            data: { id: id },
            url: "/ajax/RankingCategorias",
            success: function(data) {
                console.log(data);

                data.forEach(function(elemento, index, array) {
                    let pos = index + 1;
                    document
                        .getElementById("body_tabla_ranking")
                        .insertAdjacentHTML(
                            "beforeend",
                            "<tr><th>" +
                                pos +
                                "</th>" +
                                "<th>" +
                                elemento["username"] +
                                "</th>" +
                                "<th>" +
                                elemento["puntos"] +
                                "</th></tr>"
                        );
                });
            }
        });
    }

    let formulario = document.forms[0];

    let inputs = formulario.elements;
console.log(inputs);

    let inputNombre = inputs[1];
    let inputApellido = inputs[2];
    let inputEmail = inputs[3];
    let inputUserName = inputs[4];
    let inputContra = inputs[6];
    let inputConContra = inputs[7];

    let selectPais = document.getElementById("pais");
    let divProvincia = document.getElementById("provincias");
    // let selectMunicipio = document.getElementById('municipio')
    let botonEnvio = inputs[8];
    let errorNomb = document.getElementById("errorNomb");
    let errorUserName = document.getElementById("errorUserName");
    let errorAp = document.getElementById("errorAp");
    let errorEm = document.getElementById("errorEm");
    let errorCon = document.getElementById("errorCon");
    let errorConCon = document.getElementById("errorConCon");

    let emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    let errores = 0;

    formulario.onsubmit = function(e) {
        if (errores >= 0) {
            e.preventDefault();
            console.log("No enviado");
        } else {
            formulario.submit;
        }
    };

    inputNombre.onchange = function() {
        if (inputNombre.value == "" || inputNombre.value.length <= 2) {
            inputNombre.removeAttribute("class");
            inputNombre.setAttribute("class", "form-control is-invalid");
            errores += 1;
            if (errorNomb.textContent == "") {
                let mensNomb = document.createTextNode("Error en el nombre");
                errorNomb.appendChild(mensNomb);
                console.log(errorNomb.textContent);
            }
        } else {
            inputNombre.setAttribute("class", "form-control is-valid");
            errores -= 1;
        }
    };
    inputUserName.onchange = function() {
        if (inputNombre.value == "" || inputNombre.value.length <= 2) {
            inputUserName.removeAttribute("class");
            inputUserName.setAttribute("class", "form-control is-invalid");
            errores += 1;
            if (errorUserName.textContent == "") {
                let mensNomb = document.createTextNode(
                    "Error. nombre de usuario vacio o muy corto"
                );
                errorUserName.appendChild(mensNomb);
                console.log(errorNomb.textContent);
            }
        } else {
            inputUserName.setAttribute("class", "form-control is-valid");
            errores -= 1;
        }
    };

    inputApellido.onchange = function() {
        if (inputApellido.value == "" || inputApellido.value.length <= 3) {
            inputApellido.setAttribute("class", "form-control is-invalid");
            if (errorAp.textContent == "") {
                let errorApellido = document.createTextNode(
                    "Error en el apellido"
                );
                errorAp.appendChild(errorApellido);
            }
            errores += 1;
        } else {
            inputApellido.setAttribute("class", "form-control is-valid");
            errores -= 1;
        }
    };

    inputEmail.onchange = function() {
        if (
            inputEmail.value == "" ||
            emailRegex.test(inputEmail.value) == false
        ) {
            inputEmail.setAttribute("class", "form-control is-invalid");
            if (errorEm.textContent == "") {
                let errorEmail = document.createTextNode("Email ivalido");
                errorEm.appendChild(errorEmail);
            }
            errores += 1;
        } else {
            inputEmail.setAttribute("class", "form-control is-valid");
            errores -= 1;
        }
    };

    inputContra.onchange = function() {
        if (inputContra.value.length < 8) {
            inputContra.setAttribute("class", "form-control is-invalid");
            if (errorCon.textContent == "") {
                let errorPass = document.createTextNode(
                    "La contraseña es muy corta"
                );
                errorCon.appendChild(errorPass);
            }
            errores += 1;
        } else {
            inputContra.setAttribute("class", "form-control is-valid");
            errores -= 1;
        }
    };

    inputConContra.onchange = function() {
        if (
            inputConContra.value.length < 8 ||
            inputConContra.value != inputContra.value
        ) {
            inputConContra.setAttribute("class", "form-control is-invalid");
            if (errorConCon.textContent == "") {
                let errorConPass = document.createTextNode(
                    "Contras no coinciden"
                );
                errorConCon.appendChild(errorConPass);
            }
            errores += 1;
        } else {
            inputConContra.setAttribute("class", "form-control is-valid");
            errores -= 1;
        }
    };

    // Armado de SELECT

    function mostrarPaises() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(function(respuesta) {
                return respuesta.json();
            })
            .then(function(data) {
                // selectProvincia.innerHTML = "<option>Seleccionar</option>";
                for (pais of data) {
                    var optionPais = document.createElement("option");
                    var textoPais = document.createTextNode(pais.name);
                    optionPais.appendChild(textoPais);
                    optionPais.setAttribute("value", pais.name);
                    selectPais.appendChild(optionPais);
                }
            });
    }
    mostrarPaises();

    var provinciaSeleccionada = "nada";

    function paisSelecc() {
        paisSeleccionado = selectPais.options[selectPais.selectedIndex].value;
        return paisSeleccionado;
    }

    function mostrarProvincias(pais) {
        fetch(
            "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre"
        )
            .then(function(respuesta) {
                return respuesta.json();
            })
            .then(function(data) {
                // console.log(data.provincias);
                var labelProvincia = document.createElement("label");
                labelProvincia.innerHTML = "Provinvia";
                labelProvincia.setAttribute(
                    "class",
                    "col-md-4 col-form-label text-md-right"
                );
                labelProvincia.setAttribute("for", "selectProvincias");

                var padre = divProvincia.parentNode;
                padre.insertBefore(labelProvincia, divProvincia);

                var selectProvincias = document.createElement("select");
                selectProvincias.name = "selectProvincias";
                selectProvincias.id = "selectProvincias";
                selectProvincias.setAttribute("class", "form-control");
                divProvincia.appendChild(selectProvincias);

                for (provincia of data.provincias) {
                    var optionProvincia = document.createElement("option");
                    optionProvincia.value = provincia.nombre;
                    optionProvincia.name = provincia;
                    optionProvincia.innerHTML = provincia.nombre;
                    selectProvincias.appendChild(optionProvincia);
                }
            });
    }

    selectPais.addEventListener("change", function() {
        var selectProvincias = document.getElementById("selectProvincias");
        if (divProvincia.firstChild) {
            var padre = divProvincia.parentNode;
            //  console.log(divProvincia.firstChild);
            console.log(padre.firstChild);
            selectProvincias.remove();

            padre.firstChild.remove();
        }
        let codigoPais = paisSelecc();
        if (codigoPais == "Argentina") {
            mostrarProvincias(provinciaSeleccionada);
        }
    });
}

document.addEventListener("DOMContentLoaded", inicioPag);
