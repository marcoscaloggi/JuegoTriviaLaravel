<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\PerfilController;


Route::get('/perfil/admin','AdminController@index')->name('admin.view')->middleware('admin');
Route::post('/perfil/admin/logout', 'AdminController@logout')->name('admin.logout')->middleware('admin');
Route::post('/perfil/admin/back', 'AdminController@back')->name('admin.volver')->middleware('admin');
Route::get('/admin/editar/user/{id}','EditarUsuarioController@index')->name('admin.edit.user')->middleware('admin');
Route::put('/admin/editar/user/{id}','EditarUsuarioController@update')->name('admin.actualizar.user')->middleware('admin');
Route::post('/perfil/admin/editar/tipo/{id}','AdminController@cambiarTipo')->name('admin.edit.tipo')->middleware('admin');
Route::get('/perfil/admin/buscar/usuario','AdminController@buscador')->name('admin.buscar.user')->middleware('admin');
Route::get('/perfil/admin/editar/preguntas','AdminController@showPreguntas')->name('admin.view.preguntas')->middleware('admin');
Route::post('/perfil/admin/editar/pregunta','AdminController@editarPregunta')->name('admin.edit.pregunta')->middleware('admin');
Route::post('/perfil/admin/borrar/pregunta/{id}','AdminController@borrarPregunta')->name('admin.pregunta.borrar')->middleware('admin');
Route::post('/perfil/admin/borrar/usuario/{id}','AdminController@borrarUsuario')->name('admin.borrar.usuario')->middleware('admin');
Route::post('/perfil/admin/borrar/categoria/{id}','AdminController@borrarCategoria')->name('admin.borrar.categoria')->middleware('admin');
Route::post('/perfil/admin/crear/pregunta','AdminController@crearPregunta')->name('admin.crear.pregunta')->middleware('admin');
Route::post('/perfil/admin/crear/categoria','AdminController@crearCategoria')->name('admin.crear.categoria')->middleware('admin');
Route::post('/perfil/admin/editar/categoria','AdminController@editarCategoria')->name('admin.edit.categoria')->middleware('admin');


Route::post('/partida/buscar/pregunta', 'PantallaJuegoAjaxController@asignarPregunta')->name('juego.ajax.asignarPregunta');
Route::post("/partida/buscar/categoriaPregunta", 'PantallaJuegoAjaxController@buscarCategoriaPregunta')->name('juego.ajax.buscar.categoria');
Route::post("/partida/actualizar", 'PantallaJuegoAjaxController@ActualizarPartida')->name('juego.ajax.actualizar');

Route::get('/', 'Auth\LoginController@showLoginForm');
Route::post('/', 'Auth\LoginController@login');

Route::get('/perfil', 'PerfilController@index')->name('home');
Route::get('/perfil/newPartida/{user}/{categoria}', 'PerfilController@crearPartida')->name('partida.crear');
Route::get('/perfil/cargarPartida/{PartidaId}', 'PerfilController@cargarPartida')->name('partida.cargar');

Route::post('/ajax/listaCategorias','pantallaPerfilAjaxController@listaCategorias')->name('Ajax.categorias.listado');
Route::post('/ajax/RankingCategorias','pantallaPerfilAjaxController@TopCategoria')->name('Ajax.categoria.top');
Route::post('/perfil/editar/user/{id}','pantallaPerfilAjaxController@editarUsuario')->name('perfil.editar.user');
Route::get('/juego/{user}/{PartidaId}', 'PantallaJuegoController@index')->name('pantallajuego');
Route::get('/volver', 'PantallaJuegoController@volver')->name('volver');

Route::post('/Ajax/CambiarFoto', 'pantallaPerfilAjaxController@cambiarfoto')->name('Ajax.Foto.Cambiar');
Route::post('/Ajax/logout', 'pantallaPerfilAjaxController@logout')->name('Ajax.logout');


















// Authentication Routes...
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...

Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');


// Password Reset Routes...
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

// Password Confirmation Routes...
Route::get('password/confirm', 'Auth\ConfirmPasswordController@showConfirmForm')->name('password.confirm');
Route::post('password/confirm', 'Auth\ConfirmPasswordController@confirm');

// Email Verification Routes...
Route::get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');
Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
Route::post('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
