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
    		$user[$i]->rol_user = $user[$i]->userHasRol->name_rol;
    	}
        return response($user);
    }
}
