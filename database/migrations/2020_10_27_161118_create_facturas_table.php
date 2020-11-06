<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacturasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facturas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cliente_id')->nullable()->constrained('clientes');
            $table->foreignId('moneda_id')->nullable()->constrained('monedas');
            $table->string('nota')->nullable();
            $table->string('ruta_pdf')->nullable();
            $table->bigInteger('resta')->nullable();
            $table->bigInteger('subtotal')->nullable();
            $table->bigInteger('iva')->nullable();
            $table->bigInteger('total')->nullable();
            $table->boolean('cancelada')->nullable();
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
        Schema::dropIfExists('facturas');
    }
}
