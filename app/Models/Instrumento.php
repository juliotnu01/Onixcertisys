<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Instrumento extends Model
{
    use SoftDeletes; 
    protected $guarded = [];

    public function hasAcreditacion()
    {
    	return $this->belongsTo(Acreditaciones::class, 'acreditacion_id');
    }

    public function hasMagnitud()
    {
    	return $this->belongsTo(Magnitudes::class, 'magnitude_id');
    }

    public function belongsPartida()
    {
        return $this->hasMany(Partida::class, 'instrumento_id');
    }
    public function belongsDocumento(){
        return $this->belongsTo(Documento::class, 'documento_id');
    }
}
