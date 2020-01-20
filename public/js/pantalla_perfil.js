var posicion_categ;
var cant_categ;
var categorias;
var formulario,
    inputs,
    inputNombre,
    inputApellido,
    inputEmail,
    inputUserName,
    inputOldContra,
    inputContra,
    inputConContra,
    botonEnvio;

var errorNomb,
    errorUserName,
    errorAp,
    errorEm,
    errorOldPassword,
    errorCon,
    errorConCon,
    selectPais,
    timer,
    divProvincia,
    selectPais,
    emailRegex,
    errores;


function inicioPag() {
    var botonEditarUser = document.querySelector("#modificarUser");
    var usuario = document.querySelector("#data").dataset.user;
    var dataPais;
    //console.log(pais);

    var dataProvincia;
console.log(usuario);
function formateo(cadena){
    
    
var formateo="";
for (let i = 0; i < cadena.length; i++) {

    if (cadena.charAt(i)=="+") {
        formateo= formateo+" ";
    }else{
        formateo= formateo+cadena.charAt(i);

    }
}
return formateo;  
    
    

}



    usuario = JSON.parse(usuario);
    console.log(usuario.name);
    
usuario.name= formateo(usuario.name);
usuario.username= formateo(usuario.username);
usuario.surname= formateo(usuario.surname);
usuario.email= formateo(usuario.email);
console.log(usuario);




    var formularioRegistro = document.querySelector("#editarUser");


    botonEditarUser.addEventListener("click", cargarFormulario);

    function cargarFormulario() {
        dataPais = document.querySelector("#datoPais").innerText;
        dataProvincia = document.querySelector("#provincia").innerText;
        formularioRegistro.setAttribute("class", "editar-user");
        formularioRegistro.innerHTML =
            "<div class='row justify-content-center w-100'>" +
            " <div class='col-md-8'>" +
            "<div class='card'>" +
            "<div class='card-header'>Editar Usurio</div>" +
            "<div class='card-body'>" +
            "<form >" +
            "<div class='form-group row'>" +
            "<label for='name' class='col-md-4 col-form-label text-md-right'>Nombre</label>" +
            "<div class='col-md-6'>" +
            "<input id='name' type='text' class='form-control' name='name' value=" +
            usuario.name +
            " required autofocus>" +
            "<p id=errorNomb></p>" +
            "</div>" +
            "</div>" +
            "<div class='form-group row'>" +
            "<label for='surname' class='col-md-4 col-form-label text-md-right'>Apellido</label>" +
            "<div class='col-md-6'>" +
            "<input id='surname' type='text' class='form-control' name='surname' value=" +
            usuario.surname +
            "required  autofocus>" +
            "<p id='errorAp'></p>" +
            "</div>" +
            "</div>" +
            "<div class='form-group row'>" +
            "<label for='email' class='col-md-4 col-form-label text-md-right'>Email</label>" +
            "<div class='col-md-6'>" +
            "<input id='email' type='email' class='form-control ' name='email' value = " +
            usuario.email +
            "required>" +
            "<p id='errorEm'></p>" +
            "</div></div>" +
            "<div class='form-group row'>" +
            "<label for='username' class='col-md-4 col-form-label text-md-right'>Nombre de Usuario</label>" +
            "<div class='col-md-6'>" +
            "<input id='username' type='text' class='form-control' name='username' value=" +
            +"required  autofocus>" +
            "<p id='errorUserName'></p>" +
            "</div>" +
            " </div>" +
            "<div class='form-group row'>" +
            "<label for='oldPassword' class='col-md-4 col-form-label text-md-right'>contraseña actual</label>" +
            "<div class='col-md-6'>" +
            "<input id='oldPassword' type='password' class='form-control' name='oldPassword'>" +
            "<p id='errorOldPassword'></p>" +
            "</div>" +
            " </div>" +
            "<div class='form-group row'>" +
            "<label for='password' class='col-md-4 col-form-label text-md-right'>contraseña nueva</label>" +
            "<div class='col-md-6'>" +
            " <input id='password' type='password' name='password' class='form-control' disabled>" +
            " <p id='errorCon'></p>" +
            " </div>" +
            " </div>" +
            " <div class='form-group row'>" +
            "<label for='password-confirm' class='col-md-4 col-form-label text-md-right'>Confirmar contraseña</label>" +
            " <div class='col-md-6'>" +
            "  <input id='password-confirm' type='password' class='form-control' name='password_confirmation' disabled>" +
            "  <p id='errorConCon'></p>" +
            "  </div>" +
            "</div>" +
            "<div class='form-group row'>" +
            " <label for='pais' class='col-md-4 col-form-label text-md-right'>País</label>" +
            " <div class='col-md-6'>" +
            " <select id='pais' class='form-control' name='pais'><select>" +
            "</div>" +
            " </div>" +
            " <div class='form-group row'><div class='col-md-6' id=provincias></div>" +
            " </div>" +
            " <div class='form-group row mb-0'>" +
            " <div class='col-md-6 offset-md-4'>" +
            " <button id='enviarEdicion' type='button' class='btn btn-primary'>" +
            "  Guardar" +
            " </button> " +
            " <button id=cerrarEdicion type='button' class='btn btn-danger'>Cancelar" +
            " </button>" +
            " </div>" +
            " </div>" +
            "</form>" +
            "</div>" +
            " </div>" +
            " </div>" +
            "</div>";

        //console.log(pais);
        formulario = document.forms[0];
        inputs = formulario.elements;

        //console.log(pais);
        inputNombre = inputs[0];
        inputApellido = inputs[1];
        inputEmail = inputs[2];
        inputUserName = inputs[3];
        inputOldContra = inputs[4];


        inputContra = inputs[5];
        inputConContra = inputs[6];
        botonEnvio = inputs[8];
        //console.log(pais);
        botonEnvio.addEventListener("click", envioFetch);
        inputNombre.value = usuario.name;
        inputApellido.value = usuario.surname;
        inputEmail.value = usuario.email;
        inputUserName.value = usuario.username;
        //console.log(pais);
        formularioRegistro = document.querySelector("#editarUser");
        errorNomb = document.getElementById("errorNomb");
        errorUserName = document.getElementById("errorUserName");
        errorAp = document.getElementById("errorAp");
        errorEm = document.getElementById("errorEm");
        errorOldPassword = document.getElementById("errorOldPassword");
        errorCon = document.getElementById("errorCon");
        errorConCon = document.getElementById("errorConCon");
        //console.log(pais);

        //  var selectMunicipio = document.getElementById('municipio')
        emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        errores = 0;
        mostrarPaises();
        //console.log(pais);



        selectPais = document.getElementById("pais");
        divProvincia = document.getElementById("provincias");

        document
            .querySelector("#cerrarEdicion")
            .addEventListener("click", function () {
                formularioRegistro.setAttribute("class", "d-none");
                formularioRegistro.innerHTML = "";
            });




        function envioFetch() {
            console.log(errores);
            if (errores > 0) {
                console.log("No enviado");

            } else {
                console.log("Estoy en la consulta");

                let token = document.querySelector("#meta").getAttribute('content');
                var formulario = new FormData();
                selectProvincias = document.querySelector("#selectProvincias");



                formulario.append("name", inputNombre.value);
                formulario.append("surname", inputApellido.value);
                formulario.append("username", inputUserName.value);
                formulario.append("email", inputEmail.value);
                formulario.append("pais", selectPais.value);
                selectProvincias ? formulario.append("provincia", selectProvincias.value) : "",
                    formulario.append("OldPassword", inputOldContra.value);
                formulario.append("newPassword", inputContra.value);
                formulario.append("confirmationPassword", inputConContra.value);


                fetch(route("perfil.editar.user", { id: usuario.id }), {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "X-CSRF-TOKEN": token
                    },

                    method: "POST",
                    body: formulario
                })
                    .then(res => res.json())
                    .then(data => {
                       
                        if (data.ok) {
                            document.querySelector("#datoPais").innerHTML = selectPais.value;
                            document.querySelector("#provincia").innerHTML=selectProvincias?selectProvincias.value:"";
                            formularioRegistro.setAttribute("class", "d-none");
                            formularioRegistro.innerHTML = "";
                            Swal.fire({
                                icon: 'success',
                                title: data.ok,
                                showClass: {
                                    popup: 'animated zoomIn faster '
                                },
                                hideClass: {
                                    popup: 'animated fadeOut faster'
                                }
                            }).then((result)=>{
                                if(result.value){
                                    location.reload();
                                }
                            });
                        }
                        if (data.error) {
                            formularioRegistro.setAttribute("class", "d-none");
                            formularioRegistro.innerHTML = "";
                            Swal.fire({
                                icon: 'error',
                                title: data.error,
                                showClass: {
                                    popup: 'animated zoomIn faster '
                                },
                                hideClass: {
                                    popup: 'animated fadeOut faster'
                                }
                            }).then((result) => {
                                if (result.value) {
                                    cargarFormulario();
                                }
                            })

                        }

                    })
            }
        }

        inputNombre.addEventListener("change", validarNombre);

        inputUserName.addEventListener("change", validarUsername);

        inputApellido.addEventListener("change", validarApellido);

        inputEmail.addEventListener("change", validarEmail);

        inputOldContra.addEventListener("change", validarOldPassword);
        inputOldContra.addEventListener("keyup", habilitarCambioPass);
        inputContra.addEventListener("change", validarPassword);

        inputConContra.addEventListener("change", validarConfirmacionPass);
        //CAMBIOS
        selectPais.addEventListener("change", function () {

            if (divProvincia.firstChild) {
                selectProvincias = document.getElementById("selectProvincias");
                var padre = divProvincia.parentNode;
                //  console.log(divProvincia.firstChild);

                selectProvincias.remove();

                padre.firstChild.remove();
            }
            let codigoPais = paisSelecc();
            if (codigoPais == "Argentina") {
                mostrarProvincias();
            }
        });
    }

    listaCategorias();
    document
        .getElementById("flecha_avanzar")
        .addEventListener("click", flechaAvanzar);
    document
        .getElementById("flecha_retroceder")
        .addEventListener("click", flechaRetroceder);

    $("#inputimg").change(cambiarFoto);

    function listaCategorias() {
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            }
        });

        $.ajax({
            type: "post",
            url: "/ajax/listaCategorias",
            success: function (data) {
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




            let token = document.querySelector("#meta").getAttribute('content');
            var formulario = new FormData();
            formulario.append("foto", document.querySelector("#inputimg").files[0]);
            formulario.append("id", usuario.id);



            fetch(route("Ajax.Foto.Cambiar"), {
                headers: {

                    "X-CSRF-TOKEN": token
                },

                method: "POST",
                body: formulario
            })
                .then(res => res.json())
                .then(data => {
                    // let ruta=data.substr(121);
                    console.log(data);

                    document.querySelector("#img-usuario").setAttribute("src", "/storage/" + data);
                })

        }
    }
    function asignarCategoria(nombre, color, id) {
        document.getElementById("nombre_categoria").innerHTML = nombre;

        document.getElementById("categoria_tabla").style.background = color;

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
            success: function (data) {
                data.forEach(function (elemento, index, array) {
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

    function validarNombre() {
        if (inputNombre.value == "" || inputNombre.value.length <= 2) {
            inputNombre.removeAttribute("class");
            inputNombre.setAttribute("class", "form-control is-invalid");

            if (errorNomb.textContent == "") {
                errores += 1;
                let mensNomb = document.createTextNode(
                    "Campo nombre vacío o muy corto"
                );
                errorNomb.appendChild(mensNomb);
            }
        } else {
            inputNombre.setAttribute("class", "form-control is-valid");
            errorNomb.firstChild.remove();
            errores > 0 ? (errores -= 1) : console.log("errores es 0");
        }
    }
    function validarApellido() {
        if (inputApellido.value == "" || inputApellido.value.length <= 3) {
            inputApellido.setAttribute("class", "form-control is-invalid");
            if (errorAp.textContent == "") {
                let errorApellido = document.createTextNode(
                    "Campo apellido vacío o muy corto"
                );
                errorAp.appendChild(errorApellido);
                errores += 1;
            }
        } else {
            inputApellido.setAttribute("class", "form-control is-valid");
            errores > 0 ? (errores -= 1) : console.log("errores es 0");
            errorAp.firstChild.remove();
        }
    }
    function validarUsername() {
        if (inputNombre.value == "" || inputNombre.value.length <= 2) {
            inputUserName.removeAttribute("class");
            inputUserName.setAttribute("class", "form-control is-invalid");

            if (errorUserName.textContent == "") {
                errores += 1;
                let mensNomb = document.createTextNode(
                    "Error. nombre de usuario vacio o muy corto"
                );
                errorUserName.appendChild(mensNomb);
            }
        } else {
            inputUserName.setAttribute("class", "form-control is-valid");
            errores > 0 ? (errores -= 1) : console.log("errores es 0");
            errorUserName.firstChild.remove();
        }
    }
    function validarEmail() {
        if (
            inputEmail.value == "" ||
            emailRegex.test(inputEmail.value) == false
        ) {
            inputEmail.setAttribute("class", "form-control is-invalid");
            if (errorEm.textContent == "") {
                let errorEmail = document.createTextNode("Email ivalido");
                errorEm.appendChild(errorEmail);
                errores += 1;
            }
        } else {
            inputEmail.setAttribute("class", "form-control is-valid");
            errores > 0 ? (errores -= 1) : console.log("errores es 0");
            errorEm.firstChild.remove();
        }
    }
    function validarPassword() {
        console.log(inputOldContra.value.length);

        if (inputOldContra.value.length > 0) {

            if (inputContra.value.length < 8) {
                inputContra.setAttribute("class", "form-control is-invalid");
                if (errorCon.textContent == "") {
                    let errorPass = document.createTextNode(
                        "La contraseña es muy corta"
                    );
                    errorCon.appendChild(errorPass);
                    errores += 1;
                }
            } else {
                inputContra.setAttribute("class", "form-control is-valid");
                errores > 0 ? (errores -= 1) : console.log("errores es 0");
                errorCon.firstChild ? errorCon.firstChild.remove() : "";
            }
        }
    }
    function validarConfirmacionPass() {
        if (inputOldContra.value.length > 0) {
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
                    errores += 1;
                }
            } else {
                inputConContra.setAttribute("class", "form-control is-valid");
                errores > 0 ? (errores -= 1) : console.log("errores es 0");
                errorConCon.firstChild.removeChild();
            }
        }
    }
    function validarOldPassword() {
        console.log(this);
        //Se fija que el campo tenga contenido, ya que si esta vacio no deberia tomarse como error
        if (this.value.length < 8 && this.value.length > 0) {
            this.setAttribute("class", "form-control is-invalid"); //marca el error en el input
            //Deshabilita el campo de nueva contraseña ya que, si esta vacio, 
            //es porque no quiere cambiar la contraseña.
            inputConContra.disabled = true;
            if (errorOldPassword.textContent == "") { //Se fija si el campo no habia tenido errores hasta ahora
                let errorPass = document.createTextNode(
                    "La contraseña es muy corta"
                );
                errorOldPassword.appendChild(errorPass);
                errores += 1;
            }
        } else { //en caso de que el campo de que el campo este vacio o sea de longitud 8 

            if (this.value.length >= 8) { //pregunta si el campo esta escrito
                this.setAttribute("class", "form-control is-valid");  //marca como correcto el input
                inputContra.disabled = false; // habilita el campo para poner la nueva contraseña
            } else {  // caso de que el campo este vacio , lo formatea
                this.setAttribute("class", "form-control");
                inputConContra.value = ""; //
                inputConContra.setAttribute("class", "form-control");
                if (errorConCon.firstChild) { // caso de que el camp tuviese algun error, lo elimina
                    errorConCon.firstChild.remove();
                    errores > 0 ? (errores -= 1) : "";
                }
                inputContra.value = ""; //
                inputContra.setAttribute("class", "form-control");
                if (errorCon.firstChild) { // caso de que el camp tuviese algun error, lo elimina
                    errorCon.firstChild.remove();
                    errores > 0 ? (errores -= 1) : "";
                }

            }
            errores > 0 ? (errores -= 1) : ""; // si los errores estaban en 0, no descuenta nada
            errorOldPassword.firstChild ? errorOldPassword.firstChild.remove() : "";
        }
    }

    function habilitarCambioPass() {
        if (inputOldContra.value.length > 7) {
            inputContra.disabled = false;
            inputConContra.disabled = false;
        } else {
            inputContra.disabled = true;
            inputConContra.disabled = true;
        }
    }

    function mostrarPaises() {
        selectPais = document.getElementById("pais");
        fetch("https://restcountries.eu/rest/v2/all")
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (data) {
                // selectProvincia.innerHTML = "<option>Seleccionar</option>";
                for (pais of data) {
                    var optionPais = document.createElement("option");
                    var textoPais = document.createTextNode(pais.name);
                    optionPais.appendChild(textoPais);
                    optionPais.setAttribute("value", pais.name);
                    selectPais.appendChild(optionPais);
                }
            }).then(function () {
                var paises = selectPais.options;

                for (let i = 0; i < paises.length; i++) {
                    if (paises[i].text == dataPais) {
                        selectPais.selectedIndex = i;
                        break;
                    }
                }

                if (dataProvincia != "") {
                    mostrarProvincias();
                }
            });


    }

    var provinciaSeleccionada;

    function paisSelecc() {
        paisSeleccionado = selectPais.options[selectPais.selectedIndex].value;
        return paisSeleccionado;
    }

    function mostrarProvincias() {
        fetch(
            "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre"
        )
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (data) {
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
            }).then(function () {

                selectProvincias = document.querySelector(
                    "#selectProvincias"
                );
                let listaProvincias = selectProvincias.options;
                for (let i = 0; i < listaProvincias.length; i++) {
                    if (listaProvincias[i].text == dataProvincia) {
                        selectProvincias.selectedIndex = i;
                        break;
                    }
                }
            });

    }
}


document.addEventListener("DOMContentLoaded", inicioPag);
