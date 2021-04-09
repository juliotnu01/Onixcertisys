<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
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
    public function hasItems()
    {
        return $this->hasMany(ProductoFactura::class, 'factura_id');
    }
}
