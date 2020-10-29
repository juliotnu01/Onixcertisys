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
            $table->integer('iva')->nullable();
            $table->string('correo_electronico_factura')->nullable();
            $table->string('sitio_web')->nullable();
            $table->string('Vendedor')->nullable();
            $table->string('nombre_completo')->nullable();
            $table->string('telefono_contacto')->nullable();
            $table->string('celular_contacto')->nullable();
            $table->string('correo_contacto')->nullable();
            $table->integer('credito')->nullable();
            $table->foreignId('metodo_de_pago_id')->nullable()->constrained('metodo_de_pagos');
            $table->foreignId('condicion_de_pago_id')->nullable()->constrained('condiciones_de_pagos');
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
