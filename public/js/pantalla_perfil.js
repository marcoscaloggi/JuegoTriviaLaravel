var posicion_categ;
var cant_categ;
var categorias;

function inicioPag(){
listaCategorias();
document.getElementById('flecha_avanzar').addEventListener('click', flechaAvanzar);
document.getElementById('flecha_retroceder').addEventListener('click',flechaRetroceder);
$("#inputimg").change(cambiarFoto);



function listaCategorias(){
  $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

 
  
$.ajax({

  type:'POST',
  url:"/ajax/listaCategorias",
  success:function(data){
  cant_categ = data.length-1;
  categorias= data;
  posicion_categ=0;
  
  asignarCategoria(categorias[posicion_categ]['nombre'],categorias[posicion_categ]['color'],categorias[posicion_categ]['id']);

  }

});

}

function flechaAvanzar(){
if(posicion_categ<cant_categ){
posicion_categ++;
asignarCategoria(categorias[posicion_categ]['nombre'],categorias[posicion_categ]['color'],categorias[posicion_categ]['id']);

}
else{
  posicion_categ=0;
  asignarCategoria(categorias[posicion_categ]['nombre'],categorias[posicion_categ]['color'],categorias[posicion_categ]['id']);
}
}
function flechaRetroceder(){
  if(posicion_categ>0){
    posicion_categ--;
    asignarCategoria(categorias[posicion_categ]['nombre'],categorias[posicion_categ]['color'],categorias[posicion_categ]['id']);
    
    }
    else{
      posicion_categ=cant_categ;
      asignarCategoria(categorias[posicion_categ]['nombre'],categorias[posicion_categ]['color'],categorias[posicion_categ]['id']);
    }
}
function cambiarFoto(){
  


  var campo = $("#inputimg").val().length;
  
  
  if(campo>1){
   

    var formData = new FormData();
    var files = $('#inputimg')[0].files[0];
    formData.append('imagen',files);


    $.ajaxSetup({
      headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
  });
    

    $.ajax({
      type: 'post',
      data: formData,
      url: '/Ajax/CambiarFoto',
        processData: false,
        contentType: false,
      
  
  
  success:function(response){
    console.log(response);
    
    $(".img-usuario").attr("src","/storage/"+response);
  }
});
  }
}
function asignarCategoria(nombre,color,id){
  document.getElementById('nombre_categoria').innerHTML = nombre; 

  document.getElementById('categoria_tabla').style.background=color;
  console.log("nombre: "+nombre+" color: "+color+" id: "+id);
  document.getElementById("body_tabla_ranking").innerHTML="";
cargarRankig(id);
}
function cargarRankig(id){
  $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

 
  
$.ajax({

  type:'POST',
  data: {'id':id},
  url:"/ajax/RankingCategorias",
  success:function(data){
 console.log(data);
 
 data.forEach(function(elemento,index,array){
   let pos= index+1;
 document.getElementById("body_tabla_ranking").insertAdjacentHTML('beforeend','<tr><th>'+pos+'</th>'+'<th>'+elemento['username']+'</th>'+'<th>'+elemento['puntos']+'</th></tr>');
});

  }

});
}
  
 }


document.addEventListener("DOMContentLoaded",inicioPag);
