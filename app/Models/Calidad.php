<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Calidad extends Model
{
    protected $guarded = [];

    function belongsToPartida()
    {
        return $this->belongsTo(Partida::class, 'partida_id');
    }
    function belongsToEmpleado()
    {
        return $this->belongsTo(Empleado::class, 'empleado_id');
    }

}
