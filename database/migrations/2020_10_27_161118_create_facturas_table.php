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
            $table->text('nota')->nullable();
            $table->text('ruta_pdf')->nullable();
            $table->float('resta', 99,2)->nullable();
            $table->float('subtotal', 99,2)->nullable();
            $table->float('iva', 99,2)->nullable();
            $table->float('total', 99,2)->nullable();
            $table->boolean('cancelada')->nullable();
            $table->timestamps();
            $table->softDeletes()->nullable();
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
