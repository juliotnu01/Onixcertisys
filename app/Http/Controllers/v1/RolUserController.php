<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{RolUser,PermissionRolUser};
use DB;
class RolUserController extends Controller
{
    public function index($value='')
    {
    	try {
    		$rol = RolUser::with('relatedUser')->get();
    		return response($rol);
    	} catch (Exception $e) {
    		throw new Exception($e, 1);
    	}
    }

    public function store(Request $request, RolUser $rolUser, PermissionRolUser $premiso)
    {
        try {
             return DB::transaction(function() use ($request, $rolUser, $premiso){
                
                $rolUser->name_rol = $request->name_rol;
                $rolUser->user_id = $request->user_id;
                $rolUser->save();

                $premiso->crear = false;
                $premiso->leer = false;
                $premiso->actualizar = false;
                $premiso->eliminar = false;
                $premiso->rol_user_id = $rolUser['id'];
                $premiso->save();


             },5);
         } catch (Exception $e) {
             throw new Exception($e, 1);
         } 
    }
    public function asignarRol(Request $request, RolUser $rolUser)
    {
        try {
            return DB::transaction(function() use ($request, $rolUser){
                $rolUser->find($request->rol['id']);
                $rolUser->name_rol = $request->rol['name_rol'];
                $rolUser->user_id = $request->user_id;
                $rolUser->save();
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
    public function update(Request $request, RolUser $rol)
    {
        try {
            return DB::transaction(function() use ($request, $rol){
                $rol->find($request['id'])->update([
                    'name_rol' => $request['name_rol']
                ]) ;
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    } 
    public function delete($id, RolUser $rol)
    {
        try {
            return DB::transaction(function() use ($id, $rol){
                $rol->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
}
