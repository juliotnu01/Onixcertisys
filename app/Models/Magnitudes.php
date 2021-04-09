<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Magnitudes extends Model
{
    use SoftDeletes; 
    protected $guarded = [];

    public function has_instrumento()
    {
        return $this->hasMany(Instrumento::class,'magnitude_id');
    }
}
