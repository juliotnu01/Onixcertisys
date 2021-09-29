<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSucursalClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sucursal_clientes', function (Blueprint $table) {
            $table->id();
            $table->text('nombre_sucursal')->nullable();
            $table->text('direccion_sucursal')->nullable();
            $table->text('telefono')->nullable();
            $table->foreignId('cliente_id')->nullable()->constrained('clientes');
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
        Schema::dropIfExists('sucursal_clientes');
    }
}
