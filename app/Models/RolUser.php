<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class RolUser extends Model
{
    use SoftDeletes; 
    protected $guarded = [];
    
    public function associatedRolPremission()
    {
    	return $this->hasOne(PermissionRolUser::class, 'rol_user_id');
    }
   
    public function relatedUser()
    {
    	return $this->hasMany('App\User', 'id');
    }
}
