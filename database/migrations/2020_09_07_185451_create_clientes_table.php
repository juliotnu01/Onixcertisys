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
            $table->string('servicio_solicitado')->nullable();
            $table->string('persona_de_contacto_nombre')->nullable();
            $table->string('persona_de_contacto_celular')->nullable();
            $table->string('persona_de_contacto_te_ext')->nullable();
            $table->string('persona_de_contacto_email')->nullable();
            $table->string('persona_de_contacto_puesto')->nullable();
            $table->string('contacto_adicionales_compra')->nullable();
            $table->string('contacto_adicionales_compra_correo')->nullable();
            $table->string('contacto_adicionales_compra_telf')->nullable();
            $table->string('contacto_adicionales_pagos')->nullable();
            $table->string('contacto_adicionales_pagos_correo')->nullable();
            $table->string('contacto_adicionales_pagos_telf')->nullable();
            $table->string('contacto_adicionales_almacen')->nullable();
            $table->string('contacto_adicionales_correo')->nullable();
            $table->string('contacto_adicionales_telf')->nullable();
            $table->string('datos_fisicos_requeremientos_facturacion_razon_social')->nullable();
            $table->string('datos_fisicos_requeremientos_facturacion_rfc')->nullable();
            $table->string('datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle')->nullable();
            $table->string('datos_fisicos_requeremientos_facturacion_domiclio_fiscal_numero')->nullable();
            $table->string('datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia')->nullable();
            $table->string('datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad')->nullable();
            $table->string('datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado')->nullable();
            $table->string('datos_fisicos_requeremientos_facturacion_domiclio_fiscal_cp')->nullable();
            $table->string('forma_de_pago')->nullable();
            $table->string('moneda_factura')->nullable();
            $table->string('correo_envio_factura')->nullable();
            $table->string('cdfi')->nullable();
            $table->string('metodo_de_pago')->nullable();
            $table->string('termino_de_pago')->nullable();
            $table->string('revision_de_factura_pagos_descripcion_revision_factura')->nullable();
            $table->string('revision_de_factura_pagos_dias_revision_factura')->nullable();
            $table->string('revision_de_factura_pagos_hora_revision_factura')->nullable();
            $table->string('revision_de_factura_pagos_dias_confirmacion_pagos')->nullable();
            $table->string('revision_de_factura_pagos_hora_confirmacion_pagos')->nullable();
            $table->string('revision_de_factura_pagos_dias_pagos')->nullable();
            $table->string('revision_de_factura_pagos_hora_pagos')->nullable();
            $table->string('link_portal')->nullable();
            $table->string('usuario_contraseña')->nullable();
            $table->string('indiciones_alta_factura')->nullable();
            $table->string('correo_soporte_tecnico_portal')->nullable();
            $table->string('banco_ordenante')->nullable();
            $table->string('cuenta_de_pago')->nullable();
            $table->string('complemento_de_pago_se_envia_por_email')->nullable();
            $table->string('informacion_adicional_complemento_de_pago')->nullable();
            $table->string('lista_requerimiento_acceso_planta')->nullable();
            $table->string('iva')->nullable();
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
