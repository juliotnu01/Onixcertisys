<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NotaDeSeguimiento extends Model
{
    protected $guarded = [];

    public function hasOnwNote(){
        return $this->hasMany(NotaDeSeguimiento::class, 'nota_seguimiento_id');
    }
}
