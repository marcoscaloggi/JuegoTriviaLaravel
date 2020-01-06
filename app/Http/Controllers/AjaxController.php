<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Categoria;
use Illuminate\Support\Facades\DB;
class AjaxController extends Controller
{
public function index(){

    }
    public function cambiarfoto(Request $req){
        dd($req);
        $ruta= $req->file('imagen')->store('public');
        $nombreArchivo= basename($ruta);
        $user=Auth::user();

        $user->foto_perfil= $nombreArchivo;
        $user->save();
        return $nombreArchivo;
    }
public function listaCategorias(){
    $categorias= Categoria::all();
return $categorias;
}

public function TopCategoria(Request $req){
 

$top = DB::table('partidas')
->join('users','users.id','=','usuario_id')
->select(DB::raw('sum(puntos) as puntos,users.username'))
->where('categoria_id','=',$req['id'])
->groupBy('username')
->orderBy('puntos','desc')
->limit(10)
->get();

return $top;
}
public function logout(){
    Auth::logout();
    return redirect("/login");
}
}
