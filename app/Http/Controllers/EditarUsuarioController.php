<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
class EditarUsuarioController extends Controller
{
   public function index($id){
        $usuario=User::findOrFail($id);
        $vista= compact('usuario');
        return view('editar_perfil',$vista);

   }
   public function update(Request $req,$id){
    $usuario = User::findOrFail($id);
    $newPassword= $req->password;
 //dd($req->except(['_token','_method']));
$rules=[
        'name' => 'required|string|min:3|max:100',
        'surname' => 'required|string|min:3|max:100',
	'username' => 'required|string|min:3|max:100',
        'email' => 'required|email|max:100|unique:users,email,'.$id,
        'pais' => 'required|string|max:100',
        'provincia' => 'sometimes|nullable|string|max:100',
        'experiencia' => 'integer|max:999999',
        'level' =>  'integer|max:10000' ,
        'tipo' =>  'string|max:100',
        'password' => 'nullable|string|min:8|max:100',
        'password_confirmation' => 'sometimes|nullable|string|min:8|max:100',
];

$mensajes=[
'required'=>':attribute es necesario',
'string'=>':attribute tiene que ser una cadena de texto',
'min'=>':attribute tiene un largo minimo de :min',
'max'=>':attribute tiene un largo maximo de :max',
'email'=>'no es un email',
'unique'=>'el :attribute ya esta registrado',
'numeric'=>':attribute tiene que ser un numero entero',
];

 $validate=validator::make($req->all(),$rules,$mensajes);

if($validate->fails())
{
    // $this->errors = $validate->messages();
    return redirect()->route('admin.edit.user',$id)->withErrors($validate)
    ->withInput();

}

    if(strlen($newPassword)>=8){
            $passwordEncrypted= bcrypt($newPassword);
            $usuario->password= $passwordEncrypted;
    }

    $usuario->name=$req->name;
    $usuario->username=$req->username;
    $usuario->surname=$req->surname;
    $usuario->email=$req->email;
    $usuario->tipo= $req->tipo;
    $usuario->level=$req->level;
    $usuario->experiencia=$req->experiencia;
    $usuario->pais=$req->pais;
    $usuario->provincia=$req->selectProvincias;
  
    
    $usuario->save();
    
    


    return redirect()->route('admin.edit.user',$id)->with("mensaje", "Ah sido actualizado correctamente");
   }

  
}
