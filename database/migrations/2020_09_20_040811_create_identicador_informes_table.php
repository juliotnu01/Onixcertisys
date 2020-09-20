<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIdenticadorInformesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('identicador_informes', function (Blueprint $table) {
            $table->id();
            $table->string('clave_info')->nullable();
            $table->bigInteger('cotizacion_id')->nullable();
            $table->bigInteger('info_id')->nullable();
            $table->foreignId('partida_id')->constrained('partidas')->onDelete('cascade');
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
        Schema::dropIfExists('identicador_informes');
    }
}
