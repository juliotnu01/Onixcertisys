<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cotizacion extends Model
{
    protected $guarded = [];

    public function hasCliente()
    {
    	return $this->belongsTo(Cliente::class, 'cliente_id');
    }
    public function hasEmpleado()
    {
    	return $this->belongsTo(Empleado::class, 'empleado_id');	
    }
    public function hasMoneda()
    {
    	return $this->belongsTo(Moneda::class, 'moneda_id');	
    }

    public function hasTiempoDeEntrega()
    {
    	return $this->belongsTo(TiempoDeEntrega::class, 'tiempo_de_entrega_id');
    }

    public function hasPartidas()
    {
        return $this->hasMany(Partida::class, 'cotizacion_id');
    }
    public function belongsRecibo()
    {
        return $this->hasMany(Recibo::class, 'cotizacion_id');
    }
    public function belongsToSucursalCliente()
    {
        return $this->belongsTo(SucursalCliente::class, 'sucursal_cliente_id');
    }
    public function hasNotaDeSeguimiento()
    {
        return $this->hasMany(NotaDeSeguimiento::class, 'cotizacion_id');
    }


}
