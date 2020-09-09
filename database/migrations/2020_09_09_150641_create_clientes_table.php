<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            $table->string('razon_social')->nullable();
            $table->string('direccion_fiscal')->nullable();
            $table->string('ciudad_estad_pais')->nullable();
            $table->string('codigo_postal')->nullable();
            $table->string('rfc')->nullable();
            $table->string('telefono')->nullable();
            $table->integer('descuento')->nullable();
            $table->string('correo_electronico_factura')->nullable();
            $table->string('sitio_web')->nullable();
            $table->string('Vendedor')->nullable();
            $table->integer('credito')->nullable();
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
        Schema::dropIfExists('clientes');
    }
}
