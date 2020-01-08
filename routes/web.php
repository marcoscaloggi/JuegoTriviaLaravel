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
Route::get('/perfil/admin','AdminController@index');
Route::post('/perfil/admin/logout', 'AdminController@logout')->name('admin.logout');
Route::post('/perfil/admin/back', 'AdminController@back')->name('admin.volver');

Route::post('/partida/buscar/pregunta', 'PantallaJuegoAjaxController@asignarPregunta')->name('juego.ajax.asignarPregunta');

Route::post("/partida/buscar/categoriaPregunta", 'PantallaJuegoAjaxController@buscarCategoriaPregunta')->name('juego.ajax.buscar.categoria');
Route::post("/partida/actualizar", 'PantallaJuegoAjaxController@ActualizarPartida')->name('juego.ajax.actualizar');

Route::get('/', 'Auth\LoginController@showLoginForm');
Route::post('/', 'Auth\LoginController@login');

Route::get('/perfil', 'PerfilController@index')->name('home');
Route::get('/perfil/newPartida/{user}/{categoria}', 'PerfilController@crearPartida')->name('partida.crear');
Route::get('/perfil/cargarPartida/{PartidaId}', 'PerfilController@cargarPartida')->name('partida.cargar');

Route::post('/ajax/listaCategorias','AjaxController@listaCategorias')->name('Ajax.categorias.listado');
Route::post('/ajax/RankingCategorias','AjaxController@TopCategoria')->name('Ajax.categoria.top');

Route::get('/juego/{PartidaId}', 'PantallaJuegoController@index')->name('pantallajuego');
Route::get('/volver', 'PantallaJuegoController@volver')->name('volver');

Route::post('/Ajax/CambiarFoto', 'AjaxController@cambiarfoto')->name('Ajax.Foto.Cambiar');
Route::post('/Ajax/logout', 'AjaxController@logout')->name('Ajax.logout');


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
