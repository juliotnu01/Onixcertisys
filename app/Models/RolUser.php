<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RolUser extends Model
{
    protected $guarded = [];
    
    public function associatedRolPremission()
    {
    	return $this->hasOne(PermissionRolUser::class, 'rol_user_id');
    }
}
