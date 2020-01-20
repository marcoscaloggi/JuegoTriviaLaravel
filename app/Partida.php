<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partida extends Model
{
     public $table = "partidas";
    // public $primaryKey = "id";
    // public $timestamps = true;
    public $guarded = [];


public function categoria(){
    return $this->belongsTo("App\Categoria","categoria_id");
}
public function preguntas(){
    return $this->belongsToMany("App\Pregunta","pregunta_partida","partida_id","pregunta_id");
}
public function usuario(){
    return $this->belongsTo("App\User","usuario_id");
}
public function getDateFormat()
{
     return 'Y-m-d H:i:s.u';
}
}
