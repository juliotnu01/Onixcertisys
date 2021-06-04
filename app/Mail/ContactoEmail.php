<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactoEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $correo = '';
    public $empresa  = '';
    public $descripcion = '';

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($correo, $empresa, $descripcion)
    {
        $this->correo = $correo;
        $this->empresa =  $empresa;
        $this->descripcion = $descripcion;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
            return $this->from('Contacto@accredian.org')->view('mails.contactoMail');
    }
}
