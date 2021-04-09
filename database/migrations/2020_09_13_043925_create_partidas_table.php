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
            $table->string('ruta_doc_calibracion')->nullable();
            $table->string('ruta_pdf_calibracion')->nullable();
            $table->foreignId('recibo_id')->nullable()->constrained('recibos')->default(null);
            $table->foreignId('calibracion_id')->nullable()->constrained('calibracions');
            $table->foreignId('instrumento_id')->constrained('instrumentos');
            $table->foreignId('cotizacion_id')->constrained('cotizacions');
            $table->foreignId('empleado_id')->nullable()->constrained('empleados')->default(null);
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
        Schema::dropIfExists('partidas');
    }
}
