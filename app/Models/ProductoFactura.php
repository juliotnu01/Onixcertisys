<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class ProductoFactura extends Model
{
    use SoftDeletes; 
    protected $guarded = [];

    public function belongsToInstrumento()
    {
        return $this->belongsTo(Instrumento::class, 'instrumento_id');
    }
    public function belongsToClaveSat()
    {
        return $this->belongsTo(ClaveSat::class, 'clave_sat_id');
    }
}
