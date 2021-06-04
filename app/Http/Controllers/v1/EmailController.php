<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Mail\ContactoEmail;
use Illuminate\Support\Facades\Mail;
use Session;


class EmailController extends Controller
{
    public function SendEmailContacto(Request $request)
    {
        try {
            $correo = $request->correo;
            $empresa = $request->empresa;
            $descripcion = $request->descripcion;
            Mail::to('nunezjuliot@gmail.com')->send(new ContactoEmail( $correo, $empresa,  $descripcion));
            Session::flash('message', 'Correo Enviado con exito, pronto estaremos en contacto'); 
            return redirect()->back();
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
