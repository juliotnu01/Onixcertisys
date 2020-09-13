<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Instrumento extends Model
{
    protected $guarded = [];

    public function hasAcreditacion()
    {
    	return $this->belongsTo(Acreditaciones::class, 'acreditacion_id');
    }

    public function hasMagnitud()
    {
    	return $this->belongsTo(Magnitudes::class, 'magnitude_id');
    }
}
