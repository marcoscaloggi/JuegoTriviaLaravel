<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Categoria;
use App\Partida;
use App\PreguntaPartida;
class PantallaJuegoAjaxController extends Controller
{
  public function asignarPregunta(Request $req){
$arrayPreguntas=$req['preguntas'];
$categoriaId=$req['categoria'];
$partidaId=$req['partida'];


if($categoriaId==1){
    $pregunta= DB::select("SELECT * FROM preguntas where id not in (select pregunta_id from pregunta_partida where partida_id = :partidaId) ORDER BY RAND() LIMIT 0, 1",['partidaId'=> $partidaId]);




// si la categoria es general buscamos entre todas las preguntas
}else{
    $pregunta= DB::select("SELECT * FROM preguntas where id not in(select pregunta_id from pregunta_partida where partida_id = :partidaId) and categoria_id=:categoriaId ORDER BY RAND() LIMIT 0, 1",['partidaId'=> $partidaId,'categoriaId'=>$categoriaId]);

    // $pregunta = $pregunta[0];
    // si es otra categoria la filtramos por esta misma
}






return $pregunta;
  }

  public function buscarCategoriaPregunta(Request $req){
$id = $req['idCategoria'];
$categoria = Categoria::find($id);
return $categoria;
  }

  public function guardarRespuesta(Request $req){
      $partidaId = $req['partidaId'];
      $preguntaId= $req['preguntaId'];
      $respuesta = $req['respuesta'];

    // $pregunta= DB::insert("INSERT INTO pregunta_partida values(default,:partidaId,:preguntaId,:respuesta)",["partidaId"=>$partidaId,"preguntaId"=>$preguntaId,"respuesta"=>$respuesta]);
    
    $respuesta = new PreguntaPartida();

    $respuesta->partida_id = $partidaId;
    $respuesta->pregunta_id = $preguntaId;
    $respuesta->respuesta= $respuesta;
    $respuesta->save();

    
  }
  public function ActualizarPartida(Request $req){
    $id=intval($req['partidaId']);
    $vidas=intval($req['vidas']);
    $puntos=intval($req['puntos']);

    $partida = Partida::find($id);

    $partida->vidas = $vidas;
     $partida->puntos = $puntos;

    $partida->save();
    echo json_encode("SAVE");

  }
}
