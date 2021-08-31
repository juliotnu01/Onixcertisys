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
            $table->text('servicio')->nullable();
            $table->text('unidad')->nullable();
            $table->text('identificacion')->nullable();
            $table->text('marca')->nullable();
            $table->text('modelo')->nullable();
            $table->text('serie')->nullable();
            $table->float('importe', 8, 2)->nullable();
            $table->boolean('convertir_recibo')->nullable();
            $table->text('informe_id')->nullable();
            $table->text('tipo')->nullable();
            $table->text('vigencia')->nullable();
            $table->text('ruta_doc_calibracion')->nullable();
            $table->text('ruta_pdf_calibracion')->nullable();
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
