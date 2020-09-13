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
            $table->float('importe', 30, 2)->nullable();
            $table->foreignId('instrumento_id')->constrained('instrumentos')->onDelete('cascade'); 
            $table->foreignId('acreditacion_id')->constrained('acreditaciones')->onDelete('cascade'); 
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
