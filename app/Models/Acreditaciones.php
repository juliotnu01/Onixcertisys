<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Acreditaciones extends Model
{
    use SoftDeletes; 
    protected $guarded = [];
}
