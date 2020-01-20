

        <div class="contenedor-tabla">
          <table class="table table-dark text-center my-0">
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Pregunta</th>
                      <th scope="col">Respuesta Coorecta</th>
                      <th scope="col">Incorrecta 1</th>
                      <th scope="col">Incorrecta 2</th>
                      <th scope="col">incorrecta 3</th>
                      <th scope="col">Categoria</th>
                   
                    </tr>
                  </thead>
                  <tbody class="tabla-cuerpo">
                      @foreach ($preguntas as $pregunta)
                      <tr>
                              <td>{{$pregunta->id}}</td>
                              <td>{{$pregunta->pregunta}}</td>
                              <td>{{$pregunta->respuesta_correcta}}</td>
                              <td>{{$pregunta->incorrecta_1}}</td>
                              <td>{{$pregunta->incorrecta_2}}</td>
                              <td>{{$pregunta->incorrecta_3}}</td>
                              <td>{{$pregunta->categoria->nombre}}</td>
                              <td  class="d-flex">
                                  
                                  <button class="btn btn-warning m-1 editarPregunta">Editar</button>
                                  
                                  <form action={{route('admin.pregunta.borrar',["id"=>$pregunta->id])}} method="post">
                                    @csrf
                                    
                                      <button  type="button" class=" EliminarPregunta btn btn-danger m-1">Eliminar</button>
                                  </form>
                                  
                                
                              </td>
      
                      </tr>
                      @endforeach
                  
                    
                  </tbody>
                </table>
                {{ $preguntas->links() }}
              </div>
               