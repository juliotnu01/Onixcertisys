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
Route::put('/actualizar-usuario', 'v1\userController@update');
Route::delete('/eliminar-usuario/{id}', 'v1\userController@delete');

Route::get('/list-roles', 'v1\RolUserController@index');
Route::post('/add-rol', 'v1\RolUserController@store');
Route::put('/asignar-rol', 'v1\RolUserController@asignarRol');
Route::put('/editar-rol', 'v1\RolUserController@update');
Route::delete('/eliminar-rol/{id}', 'v1\RolUserController@delete');

Route::put('/asignar-permiso', 'v1\PermissionRolUserController@update');


Route::get('/get-empresa', 'v1\EmpresaController@index');
Route::post('/add-empresa', 'v1\EmpresaController@store');

Route::get('/get-magnitudes', 'v1\MagnitudesController@index');
Route::post('/add-magnitudes', 'v1\MagnitudesController@store');
Route::put('/edit-magnitud', 'v1\MagnitudesController@update');
Route::delete('/delete-magnitud/{id}', 'v1\MagnitudesController@destroy');

Route::get('/get-acreditaciones', 'v1\AcreditacionesController@index');
Route::post('/add-acreditaciones', 'v1\AcreditacionesController@store');
Route::put('/edit-acreditacion', 'v1\AcreditacionesController@update');
Route::delete('/delete-acreditacion/{id}', 'v1\AcreditacionesController@destroy');

Route::get('/get-condiciones-de-pago', 'v1\CondicionesDePagoController@index');
Route::post('/add-condicion-de-pago', 'v1\CondicionesDePagoController@store');
Route::put('/edit-condicion-de-pago', 'v1\CondicionesDePagoController@update');
Route::delete('/delete-condicion-de-pago/{id}', 'v1\CondicionesDePagoController@destroy');

Route::get('/get-metodos-de-pago', 'v1\MetodoDePagoController@index');
Route::post('/add-metodo-de-pago', 'v1\MetodoDePagoController@store');
Route::put('/edit-metodo-de-pago', 'v1\MetodoDePagoController@update');
Route::delete('/delete-metodo-de-pago/{id}', 'v1\MetodoDePagoController@destroy');

Route::get('/get-tiempos-de-entrega', 'v1\TiempoDeEntregaController@index');
Route::post('/add-tiempo-de-entrega', 'v1\TiempoDeEntregaController@store');
Route::put('/edit-tiempo-de-entrega', 'v1\TiempoDeEntregaController@update');
Route::delete('/delete-tiempo-de-entrega/{id}', 'v1\TiempoDeEntregaController@destroy');

Route::get('/get-ciudades-estados-paises', 'v1\CiudadEstadoPaisController@index');
Route::post('/add-ciudad-estado-pais', 'v1\CiudadEstadoPaisController@store');
Route::put('/edit-ciudad-estado-pais', 'v1\CiudadEstadoPaisController@update');
Route::delete('/delete-ciudad-estado-pais/{id}', 'v1\CiudadEstadoPaisController@destroy');

Route::get('/get-monedas', 'v1\MonedaController@index');
Route::post('/add-moneda', 'v1\MonedaController@store');
Route::put('/edit-moneda', 'v1\MonedaController@update');
Route::delete('/delete-moneda/{id}', 'v1\MonedaController@destroy');

Route::get('/get-empleados', 'v1\EmpleadoController@index');
Route::post('/add-empleado', 'v1\EmpleadoController@store');
Route::put('/edit-empleado', 'v1\EmpleadoController@update');
Route::delete('/delete-empleado/{id}', 'v1\EmpleadoController@destroy');
Route::put('/asignar-tecnico-partida', 'v1\EmpleadoController@asignarTecnicoPartida');

Route::get('/get-clientes', 'v1\ClienteController@index');
Route::post('/add-cliente', 'v1\ClienteController@store');
Route::put('/edit-cliente', 'v1\ClienteController@update');
Route::delete('/delete-cliente/{id}', 'v1\ClienteController@destroy');

Route::get('/get-instrumentos', 'v1\InstrumentoController@index');
Route::post('/add-instrumento', 'v1\InstrumentoController@store');
Route::put('/edit-instrumento', 'v1\InstrumentoController@update');
Route::delete('/delete-instrumento/{id}', 'v1\InstrumentoController@destroy');
Route::put('/edit-instrumento-cargado-masivamente', 'v1\InstrumentoController@updateInstrumentoCargadoMasivamente');

Route::get('/get-procedimientos', 'v1\ProcedimientoController@index');
Route::post('/add-procedimiento', 'v1\ProcedimientoController@store');
Route::put('/edit-procedimiento', 'v1\ProcedimientoController@update');
Route::delete('/delete-procedimiento/{id}', 'v1\ProcedimientoController@destroy');

Route::get('/get-patrones', 'v1\PatronController@index');
Route::post('/add-patron', 'v1\PatronController@store');
Route::put('/edit-patron', 'v1\PatronController@update');
Route::delete('/delete-patron/{id}', 'v1\PatronController@destroy');

Route::get('/get-cotizaciones', 'v1\CotizacionController@index');
Route::post('/add-cotizacion', 'v1\CotizacionController@store');
Route::put('/edit-cotizacion', 'v1\CotizacionController@update');
Route::delete('/delete-cotizacion/{id}', 'v1\CotizacionController@destroy');
Route::post('/print-cotizacion', 'v1\CotizacionController@printCotizacion'); // imprimir pdf
Route::post('/importar-partidas', 'v1\CotizacionController@importExcelPartida'); // importar partidas
Route::get('/get-masiv-partidas', 'v1\CotizacionController@getMasivPartidas'); // importar partidas


Route::get('/get-partidas', 'v1\PartidaController@index');
// Route::post('/add-cotizacion', 'v1\CotizacionController@store');
// Route::put('/edit-cotizacion', 'v1\CotizacionController@update');
Route::delete('/delete-partida/{id}', 'v1\PartidaController@destroy');

Route::post('/add-identificador', 'v1\IdenticadorInformeController@store'); // identificador de informe de las partidas

Route::get('/get-recibos', 'v1\ReciboController@index');
Route::post('/add-recibo', 'v1\ReciboController@store');
Route::post('/imprimir-recibo', 'v1\ReciboController@printRecibos');
Route::post('/imprimir-recibo-asignado/{user_tecnico}', 'v1\ReciboController@printRecibosAsignado');
// Route::put('/edit-cotizacion', 'v1\CotizacionController@update');
// Route::delete('/delete-partida/{id}', 'v1\PartidaController@destroy');