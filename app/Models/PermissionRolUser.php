<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class PermissionRolUser extends Model
{
    use SoftDeletes; 
    protected $guarded = [];

    public function  hasRouteAsociate(){
        return $this->hasMany(RutaPermiso::class, 'permission_rol_users_id');
    }
}
