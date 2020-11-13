<?php

namespace App\Imports;

use App\Models\cliente;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithMappedCells;


class ClienteImport implements WithMappedCells, ToModel
{
    public function mapping(): array
    {
        return [
            'nombre_contacto' => 'B13',
            'telefono_contacto' => 'E13',
            'cargo_contacto' => 'B14',
            'correo_contacto' => 'E14',
            'razon_social' => 'B17', 
            'domicilio_fiscal' => 'B18',
            'ciudad' => 'B19',
            'estado' => 'F19',
            'rfc' => 'B20',
            'cp' => 'D20',
            'telefono_empresa' => 'F20',
            'domicilio_servicio' => 'B24',
            'info_cli_compras' => 'B27',
            'info_cli_compras_correo' => 'D27',
            'info_cli_compras_telefono' => 'F72',
            'info_cli_pagos' => 'B28',
            'info_cli_pagos_correo' => 'D28',
            'info_cli_pagos_telefono' => 'F28',
            'info_cli_almacen' => 'B29',
            'info_cli_almacen_correo' => 'D29',
            'info_cli_almacen_telefono' => 'F29',
            'dias_de_revision' => 'B32',
            'dias_de_revision_horario' => 'F32',
            'dias_de_confirmacion' => 'B33',
            'dias_de_confirmacion_horario' => 'F33',
            'dias_de_pago' => 'B34',
            'dias_de_pago_horario' => 'F34',
            'nombre_de_la_persona_responsable_de_pago' => 'B35',
            'nombre_de_la_persona_responsable_de_pago_puesto_cargo' => 'F35',
            'nombre_de_la_persona_responsable_de_pago_puesto_cargo_telf' => 'B36',
            'nombre_de_la_persona_responsable_de_pago_puesto_cargo_correo' => 'F36',
            'metodo_de_pago' => 'B37',
            'cfdi' => 'D37',
            'forma_de_pago' => 'F37',
            'correo_electronico_para_el_envio_de_factura' => 'B38',
            'se_requiere_orden_de_compra_para_facturar' => 'B39',
            'servicio_solicitado' => 'B41',
            'nombre_quien_brinda_la_info' => 'B47',
            'telefono_quien_brinda_la_info' => 'B48',
            'fecha_quien_brinda_la_info' => 'B49',
            'puesto_quien_brinda_la_info' => 'E47',
            'correo_quien_brinda_la_info' => 'E48',
            'iva' => 'F39'
        ];
    }
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new cliente([
            'nombre_contacto' => $row['nombre_contacto'],
            'telefono_contacto' => $row['telefono_contacto'],
            'cargo_contacto' => $row['cargo_contacto'],
            'correo_contacto' => $row['correo_contacto'],
            'razon_social' => $row['razon_social'],
            'domicilio_fiscal' => $row['domicilio_fiscal'],
            'ciudad' => $row['ciudad'],
            'estado' => $row['estado'],
            'rfc' => $row['rfc'],
            'cp' => $row['cp'],
            'telefono_empresa' => $row['telefono_empresa'],
            'domicilio_servicio' => $row['domicilio_servicio'],
            'info_cli_compras' => $row['info_cli_compras'],
            'info_cli_compras_correo' => $row['info_cli_compras_correo'],
            'info_cli_compras_telefono' => $row['info_cli_compras_telefono'],
            'info_cli_pagos' => $row['info_cli_pagos'],
            'info_cli_pagos_correo' => $row['info_cli_pagos_correo'],
            'info_cli_pagos_telefono' => $row['info_cli_pagos_telefono'],
            'info_cli_almacen' => $row['info_cli_almacen'],
            'info_cli_almacen_correo' => $row['info_cli_almacen_correo'],
            'info_cli_almacen_telefono' => $row['info_cli_almacen_telefono'],
            'dias_de_revision' => $row['dias_de_revision'],
            'dias_de_revision_horario' => $row['dias_de_revision_horario'],
            'dias_de_confirmacion' => $row['dias_de_confirmacion'],
            'dias_de_confirmacion_horario' => $row['dias_de_confirmacion_horario'],
            'dias_de_pago' => $row['dias_de_pago'],
            'dias_de_pago_horario' => $row['dias_de_pago_horario'],
            'nombre_de_la_persona_responsable_de_pago' => $row['nombre_de_la_persona_responsable_de_pago'],
            'nombre_de_la_persona_responsable_de_pago_puesto_cargo' => $row['nombre_de_la_persona_responsable_de_pago_puesto_cargo'],
            'nombre_de_la_persona_responsable_de_pago_puesto_cargo_telf' => $row['nombre_de_la_persona_responsable_de_pago_puesto_cargo_telf'],
            'nombre_de_la_persona_responsable_de_pago_puesto_cargo_correo' => $row['nombre_de_la_persona_responsable_de_pago_puesto_cargo_correo'],
            'metodo_de_pago' => $row['metodo_de_pago'],
            'cfdi' => $row['cfdi'],
            'forma_de_pago' => $row['forma_de_pago'],
            'correo_electronico_para_el_envio_de_factura' => $row['correo_electronico_para_el_envio_de_factura'],
            'se_requiere_orden_de_compra_para_facturar' => $row['se_requiere_orden_de_compra_para_facturar'],
            'servicio_solicitado' => $row['servicio_solicitado'],
            'nombre_quien_brinda_la_info' => $row['nombre_quien_brinda_la_info'],
            'telefono_quien_brinda_la_info' => $row['telefono_quien_brinda_la_info'],
            'fecha_quien_brinda_la_info' => $row['fecha_quien_brinda_la_info'],
            'puesto_quien_brinda_la_info' => $row['puesto_quien_brinda_la_info'],
            'correo_quien_brinda_la_info' => $row['correo_quien_brinda_la_info'],
            'iva' => $row['iva']
        ]);
    }
}
