<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/list-user', 'v1\userController@index');
Route::get('/find-user/{id}', 'v1\userController@findUser');
Route::post('/register-user', 'v1\userController@registerUSer');
Route::get('/list-roles', 'v1\RolUserController@index');
Route::post('/add-rol', 'v1\RolUserController@store');
Route::put('/asignar-rol', 'v1\RolUserController@asignarRol');
Route::put('/asignar-permiso', 'v1\PermissionRolUserController@update');
Route::put('/actualizar-usuario', 'v1\userController@update');
Route::delete('/eliminar-usuario/{id}', 'v1\userController@delete');
Route::put('/editar-rol', 'v1\RolUserController@update');
Route::delete('/eliminar-rol/{id}', 'v1\RolUserController@delete');
