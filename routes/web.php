<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome2');
});

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

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/home/{q?}', function () {
    return view('home');
})->where('q', '.*');
Route::get('/test', function () {
    return view('pdfs.pdfCotizacion');
});


