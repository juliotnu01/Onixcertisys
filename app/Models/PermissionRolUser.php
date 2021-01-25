<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PermissionRolUser extends Model
{
    protected $guarded = [];

    public function  hasRouteAsociate(){
        return $this->hasMany(RutaPermiso::class, 'permission_rol_users_id');
    }
}
