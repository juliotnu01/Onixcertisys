<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class MasivPartidas extends Model
{
    use SoftDeletes; 
    protected $guarded = [];

    public function  hasInstrumento(){
        return $this->belongsTo(Instrumento::class, 'instrumento_id');
    }
}
