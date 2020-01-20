<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;


use App\Partida;
class AutenticarPartida
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $id= $request->route()->parameter('PartidaId'); 
        $user = Auth::user();
   
        $datosPartida = Partida::find($id);

       

       if($datosPartida->vidas<0|| $user->id=!$datosPartida->usuario_id){
         
        return redirect()->route('home');
        }
            return $next($request);
        
    }
}
