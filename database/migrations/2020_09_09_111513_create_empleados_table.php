<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpleadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empleados', function (Blueprint $table) {
            $table->id();
            $table->text('fecha_de_alta')->nullable();
            $table->text('fecha_de_baja')->nullable();
            $table->boolean('status')->nullable();
            $table->text('nombre_completo')->nullable();
            $table->text('rfc')->nullable();
            $table->text('direccion')->nullable();
            $table->text('ciudad')->nullable();
            $table->text('codigo_postal')->nullable();
            $table->text('telefono')->nullable();
            $table->text('correo_factura')->nullable();
            $table->text('departamento')->nullable();
            $table->text('observaciones')->nullable();
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
        Schema::dropIfExists('empleados');
    }
}
