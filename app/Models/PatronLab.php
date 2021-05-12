<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class PatronLab extends Model
{
    use SoftDeletes; 
    protected $guarded = [];

    public function belongsPatron()
    {
        return $this->belongsTo(Patron::class, "patron_id");
    }
}
