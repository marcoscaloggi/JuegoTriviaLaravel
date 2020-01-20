<div class="contenedor-tabla">
  <table class="table table-dark text-center my-0">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th scope="col">Nombre Usuario</th>
              <th scope="col">Foto de Perfil</th>
              <th scope="col">pais</th>
              <th scope="col">provincia</th>
              <th scope="col">Experiencia</th>
              <th scope="col">Level</th>
              <th scope="col">Tipo</th>
              <th scope="col">Editar/Eliminar</th>





            </tr>
          </thead>
          <tbody class="tabla-cuerpo">
              @foreach ($usuarios as $usuario)
              <tr>
                      <td>{{$usuario->id}}</td>
                      <td>{{$usuario->name}}</td>
                      <td>{{$usuario->surname}}</td>
                      <td>{{$usuario->email}}</td>
                      <td>{{$usuario->username}}</td>
                      <td>{{$usuario->foto_perfil}}</td>

                      <td>{{$usuario->pais}}</td>
                      <td>{{$usuario->provincia}}</td>
                      <td>{{$usuario->experiencia}}</td>
                      <td>{{$usuario->level}}</td>
                      <td>
                          <select class="rounded-pill p-2 cambioTipo" name="" id="cambioTipo">
                              <option @if ($usuario->tipo=='admin'){{"selected=true"}}@endif value="admin">Administrador</option>
                              <option @if ($usuario->tipo=='jugador'){{"selected=true"}}@endif value="jugador">Jugador</option>
                          </select>
                          
                      </td>
                      <td  class="d-flex">
                          
                          <a href={{route('admin.edit.user', ['id' => $usuario->id])}}  class="btn btn-warning m-1">Editar</a>
                          
                      <form action="{{route('admin.borrar.usuario',["id"=>$usuario->id])}}" method="post">
                        @csrf
                              <button  type="button" class="BorrarUsuario btn btn-danger m-1">Eliminar</button>
                          </form>
                          
                        
                      </td>

              </tr>
              @endforeach
          
            
          </tbody>
        </table>
      </div>