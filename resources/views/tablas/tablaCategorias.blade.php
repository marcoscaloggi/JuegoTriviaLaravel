<div class="contenedor-tabla divCategorias">
    <table class="table table-dark text-center my-0">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">nombre</th>
                <th scope="col">fija</th>
                <th scope="col">color</th>
              </tr>
            </thead>
            <tbody class="tabla-cuerpo">
                @foreach ($categorias as $categoria)
                <tr>
                        <td>{{$categoria->id}}</td>
                        <td>{{$categoria->nombre}}</td>
                        <td>{{$categoria->fija}}</td>
                        <td style=" background: {{$categoria->color}}"></td>
                       
                        <td  class="d-flex">
                            
                            <button class="btn btn-warning m-1 editarCategoria">Editar</button>
                            
                            <form action={{route('admin.borrar.categoria',["id"=>$categoria->id])}} method="post">
                              @csrf
                              
                                <button  type="button" class=" EliminarCategoria btn btn-danger m-1">Eliminar</button>
                            </form>
                            
                          
                        </td>

                </tr>
                @endforeach
            
              
            </tbody>
          </table>
        
        </div>