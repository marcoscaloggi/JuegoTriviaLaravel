<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Categoria;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\User;
use Illuminate\Support\Facades\Hash;


class pantallaPerfilAjaxController extends Controller


{
    public function index()
    {
    }
    public function cambiarfoto(Request $req)
    {

        $tipo= $req->file('foto')->getMimeType();
        $rules=[
            "foto" => "min:10|max:50000|mimes:jpeg,jpg,jpe,png",
        ];
        $validate=validator::make($req->all(),$rules);

if($validate->fails())
{
    // $this->errors = $validate->messages();
    echo json_encode("Archivo invalido, por favor elija otro");
    

}

        $ruta = $req->file('foto')->store('public');
        $nombreArchivo = basename($ruta);
        $user = Auth::user();

        $user->foto_perfil = $nombreArchivo;
        $user->save();
    
      echo json_encode($nombreArchivo);
      
    }
    public function listaCategorias()
    {
        $categorias = Categoria::all();
        return $categorias;
    }

    public function TopCategoria(Request $req)
    {


        $top = DB::table('partidas')
            ->join('users', 'users.id', '=', 'usuario_id')
            ->select(DB::raw('sum(puntos) as puntos,users.username'))
            ->where('categoria_id', '=', $req['id'])
            ->groupBy('username')
            ->orderBy('puntos', 'desc')
            ->limit(10)
            ->get();

        return $top;
    }
    
    public function logout()
    {
        Auth::logout();
        return redirect("/login");
    }

    public function editarUsuario(Request $req,$id)
    {
        //return json_encode($req->all());
        $usuario = User::findOrFail($id);

$rules=[
        'name' => 'required|string|min:3|max:100',
        'surname' => 'required|string|min:3|max:100',
	    'username' => 'required|string|min:3|max:100',
        'email' => 'required|email|max:100|unique:users,email,'.$id,
        'pais' => 'required|string|max:100',
        'provincia' => 'sometimes|nullable|string|max:100',
        'oldpassword' => 'nullable|string|min:8|max:100',
        'confirmationPassword' => 'nullable|string|min:8|max:100',
        'newPassword' => 'nullable|string|min:8|max:100',

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

    if(strlen($req->OldPassword)>7 && strlen($req->newPassword)>7 && strlen($req->confirmationPassword)>7){
        if( Hash::check($req->Oldpassword,$usuario->password)){
            if($req->confirmationPassword==$req->newPassword){
                $passwordEncrypted= Hash::make($req->newPassword);
                $usuario->password= $passwordEncrypted;
            }
            else{
            return json_encode(["error"=>"Contraseñas no coinciden" ]);
            }
        }
        else{
            return json_encode(["error"=>"Tu contraseña actual es incorrecta. contraseña ingresada: ".$req->OldPassword]);
        }
    }

    $usuario->name=$req->name;
    $usuario->username=$req->username;
    $usuario->surname=$req->surname;
    $usuario->email=$req->email;
    $usuario->pais=$req->pais;
    $usuario->provincia=$req->provincia;
  
    
    $usuario->save();
    
    

    $mensaje= json_encode(["ok"=>"Edición realizada correctamente"]);
    return $mensaje;
}


}