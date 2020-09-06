<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PermissionRolUser;
use DB;

class PermissionRolUserController extends Controller
{
    public function update(Request $request, PermissionRolUser $premission)
    {
    	try {
    		return DB::transaction(function() use ($request, $premission){
    			$premission->find($request->id)->update([
    				'crear' => $request->crear,
    				'leer' => $request->leer,
    				'actualizar' => $request->actualizarr,
    				'crear' => $request->crear,
    			]);
    		}, 5);
    	} catch (Exception $e) {
    		throw new Exception($e, 1);
    		
    	}
    }
}
