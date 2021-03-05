<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProcedimientoLabsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('procedimiento_labs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('procedimiento_id')->nullable()->constrained('procedimientos');
            $table->foreignId('partida_id')->nullable()->constrained('partidas');
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
        Schema::dropIfExists('procedimiento_labs');
    }
}
