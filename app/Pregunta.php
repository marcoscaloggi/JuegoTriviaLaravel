<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pregunta extends Model
{
    // public $table = "preguntas";
    // public $primaryKey = "id";
    // public $timestamps = true;
    public $guarded = [];


    public function categoria()
    {
        return $this->belongsTo("App\Categoria", "categoria_id");
    }

    public function partidas(){
        return $this->belongsToMany("App/partida","pregunta_partida","pregunta_id","partida_id");
    }
    public function getDateFormat()
    {
         return 'Y-m-d H:i:s.u';
    }
}
