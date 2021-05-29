<?php

use Illuminate\Database\Seeder;
use App\Models\CFDI;

class CFDISeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */



    public function run()
    {
        $cfdi_data = [
            ["codigo_cfdi" => "G01", "descripcion_cfdi" => "Adquisición de mercancias"],
            ["codigo_cfdi" => "G02", "descripcion_cfdi" => "Devoluciones, descuentos o bonificaciones"],
            ["codigo_cfdi" => "G03", "descripcion_cfdi" => "Gastos en general"],
            ["codigo_cfdi" => "I01", "descripcion_cfdi" => "Construcciones"],
            ["codigo_cfdi" => "I02", "descripcion_cfdi" => "Mobilario y equipo de oficina por inversiones"],
            ["codigo_cfdi" => "I03", "descripcion_cfdi" => "Equipo de transporte"],
            ["codigo_cfdi" => "I04", "descripcion_cfdi" => "Equipo de computo y accesorios"],
            ["codigo_cfdi" => "I05", "descripcion_cfdi" => "Dados, troqueles, moldes, matrices y herramental"],
            ["codigo_cfdi" => "I06", "descripcion_cfdi" => "Comunicaciones telefónicas"],
            ["codigo_cfdi" => "I07", "descripcion_cfdi" => "Comunicaciones satelitales"],
            ["codigo_cfdi" => "I08", "descripcion_cfdi" => "Otra maquinaria y equipo"],
            ["codigo_cfdi" => "D01", "descripcion_cfdi" => "Honorarios médicos, dentales y gastos hospitalarios."],
            ["codigo_cfdi" => "D02", "descripcion_cfdi" => "Gastos médicos por incapacidad o discapacidad"],
            ["codigo_cfdi" => "D03", "descripcion_cfdi" => "Gastos funerales."],
            ["codigo_cfdi" => "D04", "descripcion_cfdi" => "Donativos."],
            ["codigo_cfdi" => "D05", "descripcion_cfdi" => "Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)"],
            ["codigo_cfdi" => "D06", "descripcion_cfdi" => "Aportaciones voluntarias al SAR."],
            ["codigo_cfdi" => "D07", "descripcion_cfdi" => "Primas por seguros de gastos médicos."],
            ["codigo_cfdi" => "D08", "descripcion_cfdi" => "Gastos de transportación escolar obligatoria."],
            ["codigo_cfdi" => "D09", "descripcion_cfdi" => "Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones."],
            ["codigo_cfdi" => "D10", "descripcion_cfdi" => "Pagos por servicios educativos (colegiaturas)"],
            ["codigo_cfdi" => "P01", "descripcion_cfdi" => "P01"],
        ];
        foreach ($cfdi_data as $key => $value) {
            CFDI::create($value);
        }
    }
}
