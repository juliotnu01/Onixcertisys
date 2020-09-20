<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recibo extends Model
{
    protected $guarded = [];

    public function hasCotizaicon()
    {
        return $this->belongsTo(Cotizacion::class, 'cotizacion_id');
    }
    public function hasPartidas()
    {
        return $this->hasMany(Partida::class, 'recibo_id');
    }
}
