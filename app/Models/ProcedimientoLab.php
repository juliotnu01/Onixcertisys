<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class ProcedimientoLab extends Model
{
    use SoftDeletes; 
    protected $guarded = [];

    public function belongsProcedimiento(Type $var = null)
    {
        return $this->belongsTo(Procedimiento::class, 'procedimiento_id');
    }
}
