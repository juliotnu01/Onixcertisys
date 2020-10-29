<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $guarded = [];

    public function hasMetodoDePago()
    {
        return $this->belongsTo(MetodoDePago::class, 'metodo_de_pago_id');
    }
    public function hasCondicionDePago()
    {
        return $this->belongsTo(CondicionesDePago::class, 'condicion_de_pago_id');
    }
    public function hasSucursal()
    {
        return $this->hasMany(SucursalCliente::class, 'cliente_id');
    }
}
