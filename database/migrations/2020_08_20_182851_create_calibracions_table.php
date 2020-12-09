<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalibracionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calibracions', function (Blueprint $table) {
            $table->id();
            $table->string('tipo_de_calibracion')->nullable();
            $table->string('patron_de_calibracion')->nullable();
            $table->string('procedimiento_de_calibracion')->nullable();
            $table->string('fecha_anomalia')->nullable();
            $table->string('fecha_inicio_calibracion')->nullable();
            $table->string('fecha_terminacion_calibracion')->nullable();
            $table->string('descripcion_anomalia')->nullable();
            $table->string('observacion_tecnico')->nullable();
            $table->string('certificado_doc')->nullable();
            $table->string('estado')->nullable();
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
        Schema::dropIfExists('calibracions');
    }
}
