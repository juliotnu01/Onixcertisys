<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{PermissionRolUser,RutaPermiso};
use DB;

class PermissionRolUserController extends Controller
{
    public function update(Request $request, PermissionRolUser $premission, RutaPermiso $rutaPermiso)
    {
    	try {
    		return DB::transaction(function() use ($request, $premission , $rutaPermiso){
    			$premission->find($request->id)->update([
    				'crear' => $request->crear,
    				'leer' => $request->leer,
    				'actualizar' => $request->actualizar,
    				'eliminar' => $request->crear,
				]);

				foreach ($request['rutas'] as $key => $value) {
					$rutaPermiso->create([
						'nombre_ruta' =>  $value['path'],
						'permission_rol_users_id' =>  $request->id
					]);
				}
				
    		}, 5);
    	} catch (Exception $e) {
    		throw new Exception($e, 1);
    		
    	}
    }
}
