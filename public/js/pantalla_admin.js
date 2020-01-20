document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {
   
  agregarEventos();
    var inputBusqueda = document.querySelector("#busqueda");
    inputBusqueda.addEventListener("keyup", buscarUsuario);
  



}
function agregarEventos(){
    var BotonEliminar= document.querySelectorAll(".BorrarUsuario")
     var selectTipo = document.querySelectorAll(".cambioTipo");
       for (let i = 0; i < selectTipo.length; i++) {
        selectTipo[i].addEventListener("change", cambiarTipo);
        BotonEliminar[i].addEventListener("click",()=>{BorrrarUsuario(this)})
    }

}
function BorrrarUsuario(boton){
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
            console.log(boton.parentNode);
            
        //boton.parentNode.submit();  

        }
      })
}
function buscarUsuario() {
    let cadena = this.value;
    console.log(cadena);


    let token = document.querySelector("#meta").getAttribute('content');
    var formulario = new FormData();
    formulario.append("cadena", cadena);

    fetch('/perfil/admin/buscar/usuario?texto=' + cadena, {
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-TOKEN": token
        },

        method: "GET",

    })
        .then(res => res.text())
        .then(html => {
            document.getElementById("tablaUsuarioFetch").innerHTML = html;
            agregarEventos();

        })
        .then(function(){ tabla = document.querySelector(".contenedor-tabla"); });

}

function cambiarTipo() {
    console.log("estoy en el cambiotipo");
    
    let id = obtenerId(obtenerFila(obtenerTD(this)));
    let tipo = this.value;
    console.log(tipo);

    envioFetch(id, tipo);

    function obtenerTD(select) {
        return select.parentNode;
    }

    function obtenerFila(celda) {
        return celda.parentNode;
    }
    function obtenerId(fila) {
        return fila.cells[0].innerText;
    }
    function envioFetch(id, tipo) {
        let token = document.querySelector("#meta").getAttribute('content');
        var formulario = new FormData();
        formulario.append("tipo", tipo);

        fetch(route("admin.edit.tipo", { id: id }), {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": token
            },

            method: "POST",
            body: formulario
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: data,
                    showClass: {
                        popup: 'animated zoomIn faster '
                    },
                    hideClass: {
                        popup: 'animated fadeOut faster'
                    }
                })

            })
    }
}
