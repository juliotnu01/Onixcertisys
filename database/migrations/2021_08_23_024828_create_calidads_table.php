<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalidadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calidads', function (Blueprint $table) {
            $table->id();
            $table->foreignId('partida_id')->nullable()->constrained('partidas');
            $table->foreignId('empleado_id')->nullable()->constrained('empleados');
            $table->string('status_calidad')->nullable();
            $table->string('observacion')->nullable();
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
        Schema::dropIfExists('calidads');
    }
}
