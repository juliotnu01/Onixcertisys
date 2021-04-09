<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotaDeSeguimientosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nota_de_seguimientos', function (Blueprint $table) {
            $table->id();
            $table->text('nota_seguimiento')->nullable();
            $table->foreignId('partida_id')->nullable()->constrained('partidas')->nullable();
            $table->foreignId('cotizacion_id')->nullable()->constrained('cotizacions')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nota_de_seguimientos');
    }
}
