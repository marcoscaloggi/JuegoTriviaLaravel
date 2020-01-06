


function inicioPag(){
 


  $("#inputimg").change(cambiar);
  


  function cambiar(){
    var user = $("#userid").val;
    var campo = $("#inputimg").val().length;
    if(campo>1){
      // $("#form-img").submit();

      var formData = new FormData();
      var files = $('#inputimg')[0].files[0];
      formData.append('imagen',files);

      $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')     
        }
    }); 

    //  export default {
    //     data(){
    //         return{
    //             array:[]
    //         }
    //     },
    //     mounted(){
    //         axios.get('http://127.0.0.1:8000/Ajax/CambiarFoto').then(response =>(this.array = response.data))
    //     }

    //  }
    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/Ajax/CambiarFoto',
        data: formData,
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (response) {
        console.log(response);
    });
}
}}


document.addEventListener("DOMContentLoaded",inicioPag);
