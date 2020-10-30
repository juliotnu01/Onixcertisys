<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductoFacturasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('producto_facturas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('factura_id')->nullable()->constrained('facturas');
            $table->foreignId('recibo_id')->nullable()->constrained('recibos');
            $table->foreignId('cotizacion_id')->nullable()->constrained('cotizacions');
            $table->foreignId('instrumento_id')->nullable()->constrained('instrumentos');
            $table->string('informe_id')->nullable();
            $table->string('conceopto')->nullable();
            $table->bigInteger('precio_unitario')->nullable();
            $table->bigInteger('importe')->nullable();
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
        Schema::dropIfExists('producto_facturas');
    }
}
