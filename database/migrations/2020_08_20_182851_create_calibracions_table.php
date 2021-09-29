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
            $table->text('tipo_de_calibracion')->nullable();
            $table->text('patron_de_calibracion')->nullable();
            $table->text('procedimiento_de_calibracion')->nullable();
            $table->text('fecha_anomalia')->nullable();
            $table->text('fecha_inicio_calibracion')->nullable();
            $table->text('fecha_terminacion_calibracion')->nullable();
            $table->text('descripcion_anomalia')->nullable();
            $table->text('observacion_tecnico')->nullable();
            $table->text('certificado_doc')->nullable();
            $table->text('estado')->nullable();
            $table->softDeletes();
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
