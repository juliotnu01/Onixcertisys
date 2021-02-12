<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDosFilasToPartidasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('partidas', function (Blueprint $table) {
            $table->foreignId('unidad_id')->nullable()->constrained('unidads')->nullable()->cascadeOnDelete();
            $table->foreignId('clave_sat_id')->nullable()->constrained('clave_sats')->nullable()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('partidas', function (Blueprint $table) {
            $table->dropColumn('unidad_id');
            $table->dropColumn('clave_sat_id');
        });
    }
}
