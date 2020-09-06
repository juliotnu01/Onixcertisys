<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePermissionRolUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permission_rol_users', function (Blueprint $table) {
            $table->id();
            $table->boolean('crear')->nullable()->default(false);       //C
            $table->boolean('leer')->nullable()->default(true);        //R
            $table->boolean('actualizar')->nullable()->default(false);  //U
            $table->boolean('eliminar')->nullable()->default(false);    //D
            $table->bigInteger('rol_user_id')->unsigned()->nullable();
            $table->foreign('rol_user_id')->references('id')->on('rol_users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('permission_rol_users');
    }
}
