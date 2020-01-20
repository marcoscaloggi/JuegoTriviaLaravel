<?php

namespace App\Http\Controllers;

use App\Partida;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Routing\Route;
class PantallaJuegoController extends Controller
{
    public function __construct(Request $req)
    { 
        $this->middleware('auth');
       $this->middleware('partida',['only' => ['index']]);
  
    
    }
    public function index($id,$Partida)
    {
        
        $datosPartida = Partida::find($Partida);
        $user = Auth::user();

       
        // $jsonUser=@json($user);
        // $jsonPreguntas=@json($preguntas);
        $jsonPartida = [];
        $preguntas = $datosPartida->preguntas;
        foreach ($preguntas as $key => $value) {
            array_push($jsonPartida , $value->id);
        }
        $jsonPartida=json_encode($jsonPartida);
   

        $vista = compact('datosPartida', 'user', 'preguntas', 'jsonPartida');

        return view('pantalla_juego', $vista);
    }
    public function volver()
    {
        return redirect()->route('home');
    }
}
