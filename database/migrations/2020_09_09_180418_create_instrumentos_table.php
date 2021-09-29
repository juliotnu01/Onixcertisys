<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstrumentosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instrumentos', function (Blueprint $table) {
            $table->id();
            $table->text('nombre')->nullable();
            $table->text('alcance')->nullable();
            $table->foreignId('acreditacion_id')->nullable()->constrained('acreditaciones'); 
            $table->foreignId('magnitude_id')->nullable()->constrained('magnitudes'); 
            $table->float('precio_venta', 8, 2)->nullable();
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
        Schema::dropIfExists('instrumentos');
    }
}
