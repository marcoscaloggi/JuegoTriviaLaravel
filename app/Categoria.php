<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
     // public $table = "categorias";
    // public $primaryKey = "id";
    // public $timestamps = true;
    public $guarded = [];


public function partidas(){
    return $this->hasMany("App/Partida","categoria_id");
}
public function preguntas(){
    return $this-> hasMany("App/Pregunta","categoria_id");
}
}

