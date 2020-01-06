<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index(){
        $usuarios=DB::table('users')->paginate(10);
        $vac=compact('usuarios');
        return view('admin',$vac);
    }

    public function logout(){
        Auth::logout();
        return redirect("/login");
    }
    public function back(){
        return redirect()->route('home');
    }
}
