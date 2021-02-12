<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Factura extends Model
{
    protected $guarded = [];

    public function hasCliente()
    {
        return $this->belongsTo(Cliente::class, 'cliente_id');
    }
    public function hasMoneda()
    {
        return $this->belongsTo(Moneda::class, 'moneda_id');
    }
}
