<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartidasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partidas', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('cantidad')->nullable();
            $table->string('servicio')->nullable();
            $table->string('unidad')->nullable();
            $table->string('identificacion')->nullable();
            $table->string('marca')->nullable();
            $table->string('modelo')->nullable();
            $table->string('serie')->nullable();
            $table->float('importe', 30, 2)->nullable();
            $table->boolean('convertir_recibo')->nullable();
            $table->string('informe_id')->nullable();
            $table->string('tipo')->nullable();
            $table->string('vigencia')->nullable();
            $table->foreignId('recibo_id')->constrained('recibos')->default(null)->onDelete('cascade');
            $table->foreignId('instrumento_id')->constrained('instrumentos')->onDelete('cascade');
            $table->foreignId('cotizacion_id')->constrained('cotizacions')->onDelete('cascade');
            $table->foreignId('empleado_id')->constrained('empleados')->default(null)->onDelete('cascade');
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
        Schema::dropIfExists('partidas');
    }
}
