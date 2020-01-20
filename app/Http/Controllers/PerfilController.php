<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Categoria;
use App\Partida;


class PerfilController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $user = Auth::user();

        $jsonUser =[
            'id' => $user->id,
            'name'=> $user->name,
            'surname'=> $user->surname,
            'email'=> $user->email,
            'username'=> $user->username
        ];
        $jsonUser= json_encode($jsonUser);
        $json="";
       for ($i=0; $i <strlen($jsonUser) ; $i++) { 
        $c =substr($jsonUser, $i, 1);
        if($c==" "){$json=$json."+";}else{$json=$json.$c;}
       }

        $categoriasJugables =
            DB::select('SELECT categorias.id, categorias.nombre,categorias.color,categorias.fija
        from categorias
        left join preguntas on categoria_id = categorias.id
        group by categorias.id,categorias.nombre,categorias.color,categorias.fija
        having count(*)>20 or categorias.fija=1
        order by categorias.id');

        $puntajes = DB::select('SELECT categorias.nombre as categoria, sum(puntos) as puntos
       from partidas
       right join categorias on categorias.id = partidas.categoria_id
       where partidas.usuario_id= ?
       group by categorias.id, categorias.nombre
       order by categorias.id', [$user->id]);










        $datos = compact('user', 'categoriasJugables', 'puntajes','json');

        return view('pantalla_perfil', $datos);
    }

    public function crearPartida($user, $categoria)
    {
        $nuevaPartida = new Partida();

        $nuevaPartida->categoria_id = $categoria;
        $nuevaPartida->usuario_id = $user;
        $nuevaPartida->puntos = 0;
        $nuevaPartida->vidas = 3;

        $nuevaPartida->save();

        return redirect()->route('pantallajuego', ['PartidaId' => $nuevaPartida->id,'user'=>$user]);
    }
    
    public function cargarPartida($PartidaId)
    {
        $user = Auth()->user()->id;
        return redirect()->route('pantallajuego', ['PartidaId' => $PartidaId,'user'=>$user]);
    }
}
