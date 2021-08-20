<?php

namespace App\Imports;

use App\Models\Instrumento;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;


class InstrumentoImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Instrumento([
            'nombre' => $row['nombre'] ,
            'alcance' => $row['alcance'] ,
            'precio_venta' => $row['precio_venta'] ,
            'magnitude_id' => $row['area_id'] ? $row['area_id'] : null ,
            'acreditacion_id' => $row['acreditacion_id'],
        ]);
    }
}
