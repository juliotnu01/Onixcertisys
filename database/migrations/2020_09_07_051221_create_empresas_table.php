<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpresasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empresas', function (Blueprint $table) {
            $table->id();
            $table->text('nombre_empresa')->nullable();
            $table->text('actividad_comercial')->nullable();
            $table->text('rfc')->nullable();
            $table->text('correo_electronico')->nullable();
            $table->text('telefono')->nullable();
            $table->float('iva', 8, 2)->nullable();
            $table->float('utilidad', 8, 2)->nullable();
            $table->text('direccion')->nullable();
            $table->text('ciudad')->nullable();
            $table->text('estado')->nullable();
            $table->text('codigo_postal')->nullable();
            $table->text('pais')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empresas');
    }
}
