<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_contacto')->nullable();
            $table->string('telefono_contacto')->nullable();
            $table->string('cargo_contacto')->nullable();
            $table->string('correo_contacto')->nullable();
            $table->string('razon_social')->nullable();
            $table->string('domicilio_fiscal')->nullable();
            $table->string('ciudad')->nullable();
            $table->string('estado')->nullable();
            $table->string('rfc')->nullable();
            $table->string('cp')->nullable();
            $table->string('telefono_empresa')->nullable();
            $table->string('domicilio_servicio')->nullable();
            $table->string('info_cli_compras')->nullable();
            $table->string('info_cli_compras_correo')->nullable();
            $table->string('info_cli_compras_telefono')->nullable();
            $table->string('info_cli_pagos')->nullable();
            $table->string('info_cli_pagos_correo')->nullable();
            $table->string('info_cli_pagos_telefono')->nullable();
            $table->string('info_cli_almacen')->nullable();
            $table->string('info_cli_almacen_correo')->nullable();
            $table->string('info_cli_almacen_telefono')->nullable();
            $table->string('dias_de_revision')->nullable();
            $table->string('dias_de_revision_horario')->nullable();
            $table->string('dias_de_confirmacion')->nullable();
            $table->string('dias_de_confirmacion_horario')->nullable();
            $table->string('dias_de_pago')->nullable();
            $table->string('dias_de_pago_horario')->nullable();
            $table->string('nombre_de_la_persona_responsable_de_pago')->nullable();
            $table->string('nombre_de_la_persona_responsable_de_pago_puesto_cargo')->nullable();
            $table->string('nombre_de_la_persona_responsable_de_pago_puesto_cargo_telf')->nullable();
            $table->string('nombre_de_la_persona_responsable_de_pago_puesto_cargo_correo')->nullable();
            $table->string('metodo_de_pago')->nullable();
            $table->string('cfdi')->nullable();
            $table->string('forma_de_pago')->nullable();
            $table->string('correo_electronico_para_el_envio_de_factura')->nullable();
            $table->string('se_requiere_orden_de_compra_para_facturar')->nullable();
            $table->string('servicio_solicitado')->nullable();
            $table->string('nombre_quien_brinda_la_info')->nullable();
            $table->string('telefono_quien_brinda_la_info')->nullable();
            $table->string('fecha_quien_brinda_la_info')->nullable();
            $table->string('puesto_quien_brinda_la_info')->nullable();
            $table->string('correo_quien_brinda_la_info')->nullable();
            $table->string('iva')->nullable();
            
            $table->foreignId('metodo_de_pago_id')->nullable()->constrained('metodo_de_pagos');
            $table->foreignId('condicion_de_pago_id')->nullable()->constrained('condiciones_de_pagos');
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
        Schema::dropIfExists('clientes');
    }
}
