function inicioPag() {
    var formulario,
        inputs,
        inputNombre,
        inputApellido,
        inputEmail,
        inputTipo,
        inputLevel,
        inputExperiencia,
        inputUserName,
        inputContra,
        inputConContra,
        botonEnvio;

    var errorNomb,
        errorUserName,
        errorAp,
        errorEm,
        errorLevel,
        errorExperiencia,
        errorTipo,
        errorCon,
        errorConCon,
        selectPais,
        divProvincia,
        selectPais,
        divProvincia,
        emailRegex,
        errores;

        var dataPais = document.querySelector("#pais").dataset.pais;
        var dataProvincia = document.querySelector("#pais").dataset.provincia;

    cargarFormulario();

    function cargarFormulario() {
     

        formulario = document.forms[2];
       

        inputs = formulario.elements;


        inputNombre = inputs[2];
        inputApellido = inputs[3];
        inputEmail = inputs[4];
        inputUserName = inputs[5];
       inputTipo = inputs[6],
            inputLevel = inputs[7],
            inputExperiencia = inputs[8],
            inputContra = inputs[9],
            inputConContra = inputs[10],
            botonEnvio = inputs[12];
    

        errorNomb = document.getElementById("errorNomb");
        errorUserName = document.getElementById("errorUserName");
        errorAp = document.getElementById("errorAp");
        errorEm = document.getElementById("errorEm");
        errorExperiencia = document.getElementById("errorExperiencia");
        errorLevel = document.getElementById("errorLevel");
        errorTipo = document.getElementById("errorTipo");

        errorCon = document.getElementById("errorCon");
        errorConCon = document.getElementById("errorConCon");
     

   
        emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        errores = 0;

        mostrarPaises();
      
        selectPais = document.getElementById("pais");

        

        divProvincia = document.getElementById("provincias");
        selectPais = document.getElementById("pais");
        divProvincia = document.getElementById("provincias");


        if (dataPais== "Argentina") {
            mostrarProvincias();

            setTimeout(() => {
                let selectProvincias = document.querySelector(
                    "#selectProvincias"
                );

                let listaProvincias = selectProvincias.options;

                for (let i = 0; i < listaProvincias.length; i++) {
                    if (listaProvincias[i].text == dataProvincia) {
                        selectProvincias.selectedIndex = i;
                        break;
                    }
                }
            }, 600);
        }

        formulario.onsubmit = function(e) {
            e.preventDefault();
            if (errores > 0) {
                console.log("No enviado");
                console.log("errores: " + errores);
            } else {
              formulario.submit();
            }
        };
inputExperiencia.addEventListener("change",function(){
    if(this.value.length==0){this.value=0;}
});
inputLevel.addEventListener("change",function(){
    if(this.value.length==0){this.value=0;}
});
        inputNombre.addEventListener("change", validarNombre);

        inputUserName.addEventListener("change", validarUsername);

        inputApellido.addEventListener("change", validarApellido);

        inputEmail.addEventListener("change", validarEmail);

        inputContra.addEventListener("change", validarPassword);

        inputConContra.addEventListener("change", validarConfirmacionPass);

        selectPais.addEventListener("change", function() {
            let selectProvincias = document.getElementById("selectProvincias");
            if (divProvincia.firstChild) {
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
            errorNomb.firstChild?errorNomb.firstChild.remove():"";
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
            errorAp.firstChild?errorAp.firstChild.remove():"";
        }
    }
    function validarUsername() {
        if (inputUserName.value == "" || inputUserName.value.length <= 2) {
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
            errorUserName.firstChild?errorUserName.firstChild.remove():"";
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
            errorEm.firstChild?errorEm.firstChild.remove():"";
        }
    }
    function validarPassword() {
        
            if (inputContra.value.length < 8 && inputContra.value.length > 0 ) {
                inputContra.setAttribute("class", "form-control is-invalid");
                inputConContra.disabled=true;
                if (errorCon.textContent == "") {
                    let errorPass = document.createTextNode(
                        "La contraseña es muy corta"
                    );
                    errorCon.appendChild(errorPass);
                    errores += 1;
                }
            } else {

                if(inputContra.value.length>=8){
                    inputContra.setAttribute("class", "form-control is-valid");
                    inputConContra.disabled=false;
                }else{
                    inputContra.setAttribute("class", "form-control");
                    inputConContra.value="";
                    inputConContra.setAttribute("class", "form-control");
                    if(errorConCon.firstChild){
                        errorConCon.firstChild.remove();
                        errores > 0 ? (errores -= 1) : "";
                    }else{

                    };

                }
                errores > 0 ? (errores -= 1) : "";
                errorCon.firstChild?errorCon.firstChild.remove():"";
            }
        }
    
    function validarConfirmacionPass() {
        if (inputContra.value.length > 0) {
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
                errores > 0 ? (errores -= 1) :"";
                errorConCon.firstChild?errorConCon.firstChild.remove():"";
            }
        
    }
    }
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
            })
            .then(function(){
                if(dataPais.length>0){
                    
                        var paises = selectPais.options;
            
                        for (let i = 0; i < paises.length; i++) {
                            if (paises[i].text == dataPais) {
                                selectPais.selectedIndex = i;
                                break;
                            }
                        }
                    
                }
            }

            );
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
}

document.addEventListener("DOMContentLoaded", inicioPag);
