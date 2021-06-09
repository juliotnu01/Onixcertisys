<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

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
Route::post('/send-mail', 'v1\EmailController@SendEmailContacto')->name('send.mail.contacto');
Route::get('/', function () {
    return view('welcome2');
})->name('calibracion');

Route::get('/capacitacion', function () {
    return view('capacitacion');
})->name('capacitacion');

Route::get('/venta', function () {
    return view('venta');
})->name('venta');

Route::get('/contacto', function () {
    return view('contacto');
})->name('contacto');

Route::get('/mantenimiento', function () {
    return view('mantenimiento');
})->name('mantenimiento');

Route::get('/descargar', function () {
    $path = public_path("storage/L20-77-R1  Accredian Certificate of Acreditation 2021.pdf");
    return response(file_get_contents($path), 200, [
        'Content-Type' => 'application/pdf'
    ]);
})->name('descargar');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/home/{q?}', function () {
    return view('home');
})->where('q', '.*');
Route::get('/test', function () {
    return view('pdfs.pdfCotizacion');
});


