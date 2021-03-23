<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToFacturasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('facturas', function (Blueprint $table) {
            $table->string('estado')->nullable();
            $table->string('uuid')->nullable();
            $table->string('rfc')->nullable();
            $table->string('ruta_xml')->nullable();
            $table->string('cotizaciones_ids')->nullable();
            $table->string('recibos_ids')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('facturas', function (Blueprint $table) {
            $table->dropColumn('estado');
            $table->dropColumn('uuid');
            $table->dropColumn('rfc');
            $table->dropColumn('ruta_xml');
            $table->dropColumn('cotizaciones_ids');
            $table->dropColumn('recibos_ids');
        });
    }
}
