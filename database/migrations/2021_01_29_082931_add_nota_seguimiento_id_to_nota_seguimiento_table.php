<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNotaSeguimientoIdToNotaSeguimientoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('nota_de_seguimientos', function (Blueprint $table) {
            $table->foreignId('nota_seguimiento_id')->nullable()->constrained('nota_de_seguimientos')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('nota_de_seguimientos', function (Blueprint $table) {
            $table->dropColumn('nota_seguimiento_id');
        });
    }
}
