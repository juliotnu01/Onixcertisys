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
            $table->foreignId('cliente_id')->constrained('clientes')->onDelete('cascade'); 
            $table->foreignId('empleado_id')->constrained('empleados')->onDelete('cascade'); 
            $table->foreignId('moneda_id')->constrained('monedas')->onDelete('cascade'); 
            $table->foreignId('tiempo_de_entrega_id')->constrained('tiempo_de_entregas')->onDelete('cascade');
            $table->string('tipo_de_servicio')->nullable(); 
            $table->string('nota_para_la_cotizacion')->nullable(); 
            $table->string('estado_de_la_cotizacion')->nullable(); 
            $table->string('contacto')->nullable(); 
            $table->string('contacto_telefono')->nullable(); 
            $table->string('contacto_correo')->nullable(); 
            $table->string('condicion')->nullable(); 
            $table->string('nota_de_seguimiento')->nullable();
            $table->bigInteger('sub_total')->nullable();
            $table->bigInteger('iva')->nullable();
            $table->bigInteger('total')->nullable();
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
        Schema::dropIfExists('cotizacions');
    }
}
