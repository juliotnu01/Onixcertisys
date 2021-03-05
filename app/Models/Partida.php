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
    public function hasCalibracion()
    {
    	return $this->belongsTo(Calibracion::class, 'calibracion_id');
    }
    public function hasEmpleado()
    {
    	return $this->belongsTo(Empleado::class, 'empleado_id');
    }
    public function hasRecibo(){
        return $this->belongsTo(Recibo::class,'recibo_id');
    }
    public function hasTecnico(){
        return $this->belongsTo(Empleado::class,'empleado_id');
    }
    public function belongsCotizacion()
    {
        return $this->belongsTo(Cotizacion::class, 'cotizacion_id');
    }
    public function hasNotaDeSeguimiento()
    {
        return $this->hasMany(NotaDeSeguimiento::class, 'partida_id');
    }
    public function hasUnidad()
    {
        return $this->belongsTo(Unidad::class, 'unidad_id');
    }
    public function hasClaveSat()
    {
        return $this->belongsTo(ClaveSat::class, 'clave_sat_id');
    }
    public function hasProcedimientosLabs()
    {
        return $this->hasMany(ProcedimientoLab::class, 'partida_id');
    }
    public function hasPatronesLabs()
    {
        return $this->hasMany(PatronLab::class, 'partida_id');
    }
}
