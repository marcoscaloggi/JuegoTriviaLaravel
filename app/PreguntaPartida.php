<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PreguntaPartida extends Model
{
    public $table = "pregunta_partida";
    // public $primaryKey = "id";
    // public $timestamps = true;
    public $guarded = [];

    public function getDateFormat()
    {
         return 'Y-m-d H:i:s.u';
    }
}
