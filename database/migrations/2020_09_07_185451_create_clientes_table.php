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
            $table->text('servicio_solicitado')->nullable();
            $table->text('persona_de_contacto_nombre')->nullable();
            $table->text('persona_de_contacto_celular')->nullable();
            $table->text('persona_de_contacto_te_ext')->nullable();
            $table->text('persona_de_contacto_email')->nullable();
            $table->text('persona_de_contacto_puesto')->nullable();
            $table->text('contacto_adicionales_compra')->nullable();
            $table->text('contacto_adicionales_compra_correo')->nullable();
            $table->text('contacto_adicionales_compra_telf')->nullable();
            $table->text('contacto_adicionales_pagos')->nullable();
            $table->text('contacto_adicionales_pagos_correo')->nullable();
            $table->text('contacto_adicionales_pagos_telf')->nullable();
            $table->text('contacto_adicionales_almacen')->nullable();
            $table->text('contacto_adicionales_correo')->nullable();
            $table->text('contacto_adicionales_telf')->nullable();
            $table->text('datos_fisicos_requeremientos_facturacion_razon_social')->nullable();
            $table->text('datos_fisicos_requeremientos_facturacion_rfc')->nullable();
            $table->text('datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle')->nullable();
            $table->text('datos_fisicos_requeremientos_facturacion_domiclio_fiscal_numero')->nullable();
            $table->text('datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia')->nullable();
            $table->text('datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad')->nullable();
            $table->text('datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado')->nullable();
            $table->text('datos_fisicos_requeremientos_facturacion_domiclio_fiscal_cp')->nullable();
            $table->text('forma_de_pago')->nullable();
            $table->text('moneda_factura')->nullable();
            $table->text('correo_envio_factura')->nullable();
            $table->text('cdfi')->nullable();
            $table->text('metodo_de_pago')->nullable();
            $table->text('termino_de_pago')->nullable();
            $table->text('revision_de_factura_pagos_descripcion_revision_factura')->nullable();
            $table->text('revision_de_factura_pagos_dias_revision_factura')->nullable();
            $table->text('revision_de_factura_pagos_hora_revision_factura')->nullable();
            $table->text('revision_de_factura_pagos_dias_confirmacion_pagos')->nullable();
            $table->text('revision_de_factura_pagos_hora_confirmacion_pagos')->nullable();
            $table->text('revision_de_factura_pagos_dias_pagos')->nullable();
            $table->text('revision_de_factura_pagos_hora_pagos')->nullable();
            $table->text('link_portal')->nullable();
            $table->text('usuario_contraseña')->nullable();
            $table->text('indiciones_alta_factura')->nullable();
            $table->text('correo_soporte_tecnico_portal')->nullable();
            $table->text('banco_ordenante')->nullable();
            $table->text('cuenta_de_pago')->nullable();
            $table->text('complemento_de_pago_se_envia_por_email')->nullable();
            $table->text('informacion_adicional_complemento_de_pago')->nullable();
            $table->text('lista_requerimiento_acceso_planta')->nullable();
            $table->text('iva')->nullable();
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
        Schema::dropIfExists('clientes');
    }
}
