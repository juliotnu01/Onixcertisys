<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Models\{RolUser,PermissionRolUser};
use DB;
use Auth;

class userController extends Controller
{
    public function howCheck(){
        try {
            dd(Auth::id());
            return ;
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function index()
    {
    	$user = User::with(['userHasRol', 'userHasRol.associatedRolPremission', 'userHasRol.associatedRolPremission.hasRouteAsociate'])->get();
    	for ($i=0; $i < count($user); $i++) { 
    		$user[$i]->rol_user = $user[$i]->userHasRol['name_rol'];
    	}
        return response($user);
    }
    public function findUser($id)
    {
    	try {
    		$user = User::with(['userHasRol', 'userHasRol.associatedRolPremission','userHasRol.associatedRolPremission.hasRouteAsociate'])->find($id);
    		return response($user);
    	} catch (Exception $e) {
    		throw new Exception($e, 1);
    		
    	}
    }
    public function registerUSer(Request $request)
    {
        try {
            return DB::transaction(function() use ($request){
                User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                ]);
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }

    public function update(Request $request, User $user, RolUser $rol, PermissionRolUser $premisos)
    {
        try {
            return DB::transaction(function() use ($request, $user, $rol, $premisos){

                $user->find($request->id)->update([
                    'name' => $request->name,
                    'email' => $request->email,
                ]);

                $rol->find($request['user_has_rol']['id'])->update([
                    'name_rol' => $request['user_has_rol']['name_rol'],
                ]);

                $premisos->find($request['user_has_rol']['associated_rol_premission']['id'])->update([
                    'crear' => $request['user_has_rol']['associated_rol_premission']['crear'],
                    'leer' => $request['user_has_rol']['associated_rol_premission']['leer'],
                    'actualizar' => $request['user_has_rol']['associated_rol_premission']['actualizar'],
                    'eliminar' => $request['user_has_rol']['associated_rol_premission']['eliminar'],
                ]);


            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
    public function delete($id, User $user)
    {
        try {
            return DB::transaction(function() use ($id, $user){
                $user->find($id)->delete();
            },5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
            
        }
    }
}
