<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class NotaDeSeguimiento extends Model
{
    use SoftDeletes; 
    protected $guarded = [];

    public function hasOnwNote(){
        return $this->hasMany(NotaDeSeguimiento::class, 'nota_seguimiento_id');
    }
}
