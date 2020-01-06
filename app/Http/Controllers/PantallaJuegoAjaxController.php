<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
}
