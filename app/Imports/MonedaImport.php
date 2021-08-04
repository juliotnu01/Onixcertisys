<?php

namespace App\Imports;

use App\Models\Moneda;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
class MonedaImport implements ToModel,WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Moneda([
            'clave' => $row['clave'],
            'nombre_moneda' => $row['nombre']
        ]);
    }
}
