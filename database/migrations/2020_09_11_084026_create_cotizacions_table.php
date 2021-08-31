<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCotizacionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cotizacions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cliente_id')->nullable()->constrained('clientes'); 
            $table->foreignId('empleado_id')->nullable()->constrained('empleados'); 
            $table->foreignId('moneda_id')->nullable()->constrained('monedas'); 
            $table->foreignId('tiempo_de_entrega_id')->nullable()->constrained('tiempo_de_entregas');
            $table->foreignId('sucursal_cliente_id')->nullable()->constrained('sucursal_clientes');
            $table->string('tipo_de_servicio')->nullable(); 
            $table->string('nota_para_la_cotizacion')->nullable(); 
            $table->string('estado_de_la_cotizacion')->nullable(); 
            $table->string('contacto')->nullable(); 
            $table->string('contacto_telefono')->nullable(); 
            $table->string('contacto_correo')->nullable(); 
            $table->string('condicion')->nullable(); 
            $table->string('nota_de_seguimiento')->nullable();
            $table->string('ruta_print_document')->nullable();
            $table->float('sub_total', 8, 2)->nullable();
            $table->float('iva', 8, 2)->nullable();
            $table->float('total', 8, 2)->nullable();
            $table->timestamps();
            $table->softDeletes()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cotizacions');
    }
}
