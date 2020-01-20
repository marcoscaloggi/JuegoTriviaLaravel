<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Pregunta;
use App\Categoria;
use Illuminate\Support\Facades\Validator;
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
    public function cambiarTipo(request $req,$id){
        
        $usuario= User::findOrFail($id);
        $usuario->tipo = $req->tipo;
        $usuario->save();
        echo json_encode("Cambio de tipo de usuario efectuado correctamente");
    }
    public function editarPregunta(request $req){
     
$pregunta= Pregunta::find($req->id);

$rules=[
    'pregunta' => 'string',
    'correcta' => 'string',
    'incorrecta1' => 'string',
    'incorrecta2' => 'string',
    'icorrecta3' => 'string',
    'categoria' => 'required'];

$validate=validator::make($req->all(),$rules);

if($validate->fails())
{
    return json_encode(["error"=>"Error. por favor verifique los campos"]);
    

}

$pregunta->respuesta_correcta = $req->correcta;
$pregunta->pregunta = $req->pregunta;
$pregunta->incorrecta_1 = $req->incorrecta1;
$pregunta->incorrecta_2 = $req->incorrecta2;
$pregunta->incorrecta_3 = $req->incorrecta3;
$pregunta->categoria_id = $req->categoria;

$pregunta->save();

return json_encode(["ok"=>"Pregunta actualizada"]);



    }
    public function crearCategoria(request $req){
     
        $categoria= new Categoria();
        
        $rules=[
            'nombre' => 'required|string',
            'fijo' => 'required',
            ];
        
        $validate=validator::make($req->all(),$rules);
        
        if($validate->fails())
        {
            return json_encode(["error"=>"Error. por favor verifique los campos"]);
        }
        
        $categoria->nombre= $req->nombre;
        $categoria->fija = $req->fijo;
        $categoria->color = sprintf('#%06X', mt_rand(0, 0xFFFFFF));
        
        $categoria->save();
        
        return json_encode(["ok"=>"Categoria Guardada"]);
        
        
        
            }
            public function editarCategoria(request $req){
 
                $categoria=Categoria::find($req->id);
        
                $rules=[
                    'nombre' => 'required|string',
                    'fijo' => 'required',
                    ];
                
                $validate=validator::make($req->all(),$rules);
                
                if($validate->fails())
                {
                    return json_encode(["error"=>"Error. por favor verifique los campos"]);
                }
                
                $categoria->nombre= $req->nombre;
                $categoria->fija = $req->fijo;
               
               
                
                $categoria->save();
                
                return json_encode(["ok"=>"Categoria Guardada"]);
            }

            public function crearPregunta(request $req){
     
                $pregunta= new Pregunta;
                
                $rules=[
                    'pregunta' => 'string',
                    'correcta' => 'string',
                    'incorrecta1' => 'string',
                    'incorrecta2' => 'string',
                    'icorrecta3' => 'string',
                    'categoria' => 'required'];
                
                $validate=validator::make($req->all(),$rules);
                
                if($validate->fails())
                {
                    return json_encode(["error"=>"Error. por favor verifique los campos"]);
                    
                
                }
                
                $pregunta->respuesta_correcta = $req->correcta;
                $pregunta->pregunta = $req->pregunta;
                $pregunta->incorrecta_1 = $req->incorrecta1;
                $pregunta->incorrecta_2 = $req->incorrecta2;
                $pregunta->incorrecta_3 = $req->incorrecta3;
                $pregunta->categoria_id = $req->categoria;
                
                $pregunta->save();
                
                return json_encode(["ok"=>"Pregunta Guardada"]);
                
                
                
                    }

public function borrarUsuario(request $req,$id){
$usuario = User::find($id);
$usuario->delete();
}

public function borrarPregunta(request $req,$id){
    $pregunta= Pregunta::find($id);
    $pregunta->delete();
    return redirect()->back();
}
public function borrarCategoria(request $req,$id){
    $categoria= Categoria::find($id);
    $categoria->delete();
    return redirect()->back();
}
    public function buscador(Request $request){
        $t = $request->texto;
      
            if(strlen($t)>0){
                $t= "%".$t."%";
    
        $search = $t;
        $usuarios = User::from('users as u')->where(function ($query) use ($search) {
              $query = $query->orWhere('u.name','like',$search);
              $query = $query->orWhere('u.username','like',$search);
              $query = $query->orWhere('u.surname','like',$search);
              $query = $query->orWhere('u.experiencia','like',$search);
              $query = $query->orWhere('u.level','like',$search);
              $query = $query->orWhere('u.tipo','like',$search);
              $query = $query->orWhere('u.pais','like',$search);
              $query = $query->orWhere('u.provincia','like',$search);
              $query = $query->orWhere('u.email','like',$search);
              $query = $query->orWhere('u.id','like',$search);
            
            })->paginate(20);
           
               return view("tablas.tablaUsuario",compact("usuarios"));

            }else{
                $usuarios=user::all();
                return view("tablas.tablaUsuario",compact("usuarios"));

            }        
    }
    public function showPreguntas(){
        $preguntas=Pregunta::paginate(10);

        $categorias=Categoria::all();
        $vac = compact('preguntas','categorias');
 
        return view("admin_preguntas",$vac);
    }
}
