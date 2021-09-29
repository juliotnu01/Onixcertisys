<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecibosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recibos', function (Blueprint $table) {
            $table->id();
            $table->text('estado')->nullable();
            $table->text('ruta_pdf')->nullable();
            $table->float('sub_total', 99,2)->nullable();
            $table->float('iva', 99,2)->nullable();
            $table->float('total', 99,2)->nullable();
            $table->foreignId('cotizacion_id')->constrained('cotizacions');
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
        Schema::dropIfExists('recibos');
    }
}
