<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class userController extends Controller
{
    public function index()
    {
    	$user = User::with(['userHasRol', 'userHasRol.associatedRolPremission'])->get();
    	for ($i=0; $i < count($user); $i++) { 
    		$user[$i]->rol_user = $user[$i]->userHasRol['name_rol'];
    	}
        return response($user);
    }
    public function findUser($id)
    {
    	try {
    		$user = User::with(['userHasRol', 'userHasRol.associatedRolPremission'])->find($id);
    		return response($user);
    	} catch (Exception $e) {
    		throw new Exception($e, 1);
    		
    	}
    }
}
