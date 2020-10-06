<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MasivPartidas extends Model
{
    protected $guarded = [];

    public function  hasInstrumento(){
        return $this->belongsTo(Instrumento::class, 'instrumento_id');
    }
}
