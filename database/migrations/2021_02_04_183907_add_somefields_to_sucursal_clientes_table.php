<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSomefieldsToSucursalClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sucursal_clientes', function (Blueprint $table) {
            $table->string('contacto_sucural')->nullable();
            $table->string('correo_contacto_sucural')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sucursal_clientes', function (Blueprint $table) {
            $table->dropColumn('contacto_sucural');
            $table->dropColumn('correo_contacto_sucural');
        });
    }
}
