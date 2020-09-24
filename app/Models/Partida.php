<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partida extends Model
{
    protected $guarded = [];

    public function hasIntrumento()
    {
    	return $this->belongsTo(Instrumento::class, 'instrumento_id');
    }
    public function hasEmpleado()
    {
    	return $this->belongsTo(Empleado::class, 'empleado_id');
    }
}
