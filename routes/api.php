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
Route::get('/how-check', 'v1\userController@howCheck');
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
Route::get('/get-magnitud-espesifica', 'v1\MagnitudesController@indexMagnitud');
Route::post('/get-reporte-magnitud-ventas', 'v1\ReporteVentasPorMagnitudController@storeReporteVentasMagnitud'); // reporte ventas por magnitud
Route::post('/add-magnitudes', 'v1\MagnitudesController@store');
Route::put('/edit-magnitud', 'v1\MagnitudesController@update');
Route::delete('/delete-magnitud/{id}', 'v1\MagnitudesController@destroy');
Route::post('/add-magnitudes-masivamente', 'v1\MagnitudesController@agregarMagnitudesMasivamente');

Route::get('/get-acreditaciones', 'v1\AcreditacionesController@index');
Route::post('/add-acreditaciones', 'v1\AcreditacionesController@store');
Route::put('/edit-acreditacion', 'v1\AcreditacionesController@update');
Route::delete('/delete-acreditacion/{id}', 'v1\AcreditacionesController@destroy');
Route::post('/add-acreditaciones-masivamente', 'v1\AcreditacionesController@agregarAcreditacionesMasivamente');

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
Route::post('/add-tiempo-de-entrega-masiv', 'v1\TiempoDeEntregaController@storeImport');
Route::put('/edit-tiempo-de-entrega', 'v1\TiempoDeEntregaController@update');
Route::delete('/delete-tiempo-de-entrega/{id}', 'v1\TiempoDeEntregaController@destroy');

Route::get('/get-ciudades-estados-paises', 'v1\CiudadEstadoPaisController@index');
Route::post('/add-ciudad-estado-pais', 'v1\CiudadEstadoPaisController@store');
Route::put('/edit-ciudad-estado-pais', 'v1\CiudadEstadoPaisController@update');
Route::delete('/delete-ciudad-estado-pais/{id}', 'v1\CiudadEstadoPaisController@destroy');

Route::get('/get-monedas', 'v1\MonedaController@index');
Route::post('/add-moneda', 'v1\MonedaController@store');
Route::post('/add-moneda-masiv', 'v1\MonedaController@storeImport');
Route::put('/edit-moneda', 'v1\MonedaController@update');
Route::delete('/delete-moneda/{id}', 'v1\MonedaController@destroy');

Route::get('/get-empleados', 'v1\EmpleadoController@index');
Route::post('/add-empleado', 'v1\EmpleadoController@store');
Route::post('/add-empleado-masiv', 'v1\EmpleadoController@storeImport');
Route::put('/edit-empleado', 'v1\EmpleadoController@update');
Route::delete('/delete-empleado/{id}', 'v1\EmpleadoController@destroy');
Route::post('/asignar-tecnico-partida', 'v1\EmpleadoController@asignarTecnicoPartida');

Route::get('/get-clientes', 'v1\ClienteController@index');
Route::post('/add-cliente', 'v1\ClienteController@store');
Route::post('/cargar-file-cliente', 'v1\ClienteController@storeFileCliente');
Route::put('/edit-cliente', 'v1\ClienteController@update');
Route::delete('/delete-cliente/{id}', 'v1\ClienteController@destroy');
Route::delete('/delete-sucursal/{id}', 'v1\ClienteController@destroySucursal');

Route::get('/get-instrumentos', 'v1\InstrumentoController@index');
Route::post('/add-instrumento', 'v1\InstrumentoController@store');
Route::put('/edit-instrumento', 'v1\InstrumentoController@update');
Route::delete('/delete-instrumento/{id}', 'v1\InstrumentoController@destroy');
Route::put('/edit-instrumento-cargado-masivamente', 'v1\InstrumentoController@updateInstrumentoCargadoMasivamente');
Route::post('/add-instrumento-masivamente', 'v1\InstrumentoController@storeFromFile');

Route::get('/get-procedimientos', 'v1\ProcedimientoController@index');
Route::post('/add-procedimiento', 'v1\ProcedimientoController@store');
Route::put('/edit-procedimiento', 'v1\ProcedimientoController@update');
Route::delete('/delete-procedimiento/{id}', 'v1\ProcedimientoController@destroy');

Route::get('/get-patrones', 'v1\PatronController@index');
Route::post('/add-patron', 'v1\PatronController@store');
Route::put('/edit-patron', 'v1\PatronController@update');
Route::delete('/delete-patron/{id}', 'v1\PatronController@destroy');

Route::get('/get-cotizaciones', 'v1\CotizacionController@index');
Route::get('/get-cotizaciones-estadisticas', 'v1\CotizacionController@indexCotizacionesParaEstadistica');
Route::post('/add-cotizacion', 'v1\CotizacionController@store');
Route::post('/add-cotizacion-duplicate', 'v1\CotizacionController@storeDuplicate');
Route::put('/edit-cotizacion', 'v1\CotizacionController@update');
Route::delete('/delete-cotizacion/{id}', 'v1\CotizacionController@destroy');
Route::post('/print-cotizacion', 'v1\CotizacionController@printCotizacion'); // imprimir pdf
Route::post('/importar-partidas', 'v1\CotizacionController@importExcelPartida'); // importar partidas
Route::get('/get-masiv-partidas', 'v1\CotizacionController@getMasivPartidas'); // importar partidas


Route::get('/get-partidas', 'v1\PartidaController@index');
Route::get('/get-partidas-para-calibrar', 'v1\PartidaController@indexParaCalibrar');
Route::post('/cargar-certificado-partidas', 'v1\PartidaController@cargarCertificadoPdfPartida');
// Route::post('/add-cotizacion', 'v1\CotizacionController@store');
Route::put('/edit-partida', 'v1\PartidaController@update');
Route::put('/edit-observacion-partida', 'v1\PartidaController@updateObservacionODS');
Route::put('/edit-lugar-servicio-partida', 'v1\PartidaController@updateLugarDeServicioODS');
Route::put('/edit-vigencia-partida', 'v1\PartidaController@updateVigenciaODS');
Route::delete('/delete-partida/{id}', 'v1\PartidaController@destroy');

Route::post('/add-identificador', 'v1\IdenticadorInformeController@store'); // identificador de informe de las partidas

Route::get('/get-recibos', 'v1\ReciboController@index');
Route::get('/get-recibos/{cliente_id}/cliente', 'v1\ReciboController@getRecibosCliente');
Route::post('/add-recibo', 'v1\ReciboController@store');
Route::post('/imprimir-recibo', 'v1\ReciboController@printRecibos');
Route::post('/imprimir-recibo-asignado/{user_tecnico}', 'v1\ReciboController@printRecibosAsignado');
// Route::put('/edit-cotizacion', 'v1\CotizacionController@update');
// Route::delete('/delete-partida/{id}', 'v1\PartidaController@destroy');

// Route::get('/get-patrones', 'v1\PatronController@index');
Route::post('/add-calibracion', 'v1\CalibracionController@store');
Route::post('/terminar-calibracion', 'v1\CalibracionController@terminarCalibracion');
// Route::put('/edit-patron', 'v1\PatronController@update');
// Route::delete('/delete-patron/{id}', 'v1\PatronController@destroy');

Route::get('/get-facturas', 'v1\FacturaController@index');
Route::get('/get-facturas-para-estadistica', 'v1\FacturaController@indexFacturaParaEstadistica');
Route::post('/add-factura', 'v1\FacturaController@store');
Route::post('/add-factura-nueva', 'v1\FacturaController@storeFacturaNueva');
Route::get('/consultar-saldo-timbrado', 'v1\FacturaController@consultarSaldoTimbrado');
Route::post('/timbrar-factura', 'v1\FacturaController@timbrarFactura');
// Route::post('/terminar-calibracion', 'v1\CalibracionController@terminarCalibracion');
// Route::put('/edit-patron', 'v1\PatronController@update');
// Route::delete('/delete-patron/{id}', 'v1\PatronController@destroy');

Route::get('/get-nota-de-seguimiento', 'v1\NotaDeSeguimientoController@index');
Route::post('/iniciar-nota-seguimiento-cotizacion', 'v1\NotaDeSeguimientoController@store');
Route::post('/add-nota-seguimiento-cotizacion', 'v1\NotaDeSeguimientoController@addNotaCotizacionstore');
Route::post('/iniciar-nota-seguimiento-calibracion', 'v1\NotaDeSeguimientoController@storeCalibracion');
Route::post('/add-nota-seguimiento-calibracion', 'v1\NotaDeSeguimientoController@addNotaCalibracionstore');

Route::get('/get-unidades', 'v1\UnidadController@index');
Route::post('/add-unidad', 'v1\UnidadController@store');
Route::put('/actualizar-unidad', 'v1\UnidadController@update');
Route::delete('/eliminar-unidad/{id}', 'v1\UnidadController@destroy');

Route::get('/get-claves-sat', 'v1\ClaveSatController@index');
Route::post('/add-clave-sat', 'v1\ClaveSatController@store');
Route::put('/actualizar-clave-sat', 'v1\ClaveSatController@update');
Route::delete('/eliminar-clave-sat/{id}', 'v1\ClaveSatController@destroy');

Route::get('/get-documentos', 'v1\DocumentoController@index');
Route::post('/add-document-config', 'v1\DocumentoController@store');
// Route::put('/actualizar-clave-sat', 'v1\ClaveSatController@update');
// Route::delete('/eliminar-clave-sat/{id}', 'v1\ClaveSatController@destroy');
Route::get('/get-cfdis', 'v1\CFDIController@index');
Route::post('/add-cfdi', 'v1\CFDIController@store');
Route::put('/actualizar-cfdi', 'v1\CFDIController@update');
Route::delete('/eliminar-cfdi/{id}', 'v1\CFDIController@destroy');

Route::get('/get-calidades', 'v1\CalidadController@index');
Route::put('/actualizar-calidad', 'v1\CalidadController@update');
// Route::post('/add-calidad', 'v1\CFDIController@store');
// Route::delete('/eliminar-cfdi/{id}', 'v1\CFDIController@destroy');

