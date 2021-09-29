<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMasivPartidasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('masiv_partidas', function (Blueprint $table) {
            $table->id();
            $table->text('identificacion')->nullable();
            $table->foreignId('instrumento_id')->nullable()->constrained('instrumentos');
            $table->text('marca')->nullable();
            $table->text('modelo')->nullable();
            $table->text('serie')->nullable();
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
        Schema::dropIfExists('masiv_partidas');
    }
}
