<?php

namespace App\Imports;

use App\Models\Magnitudes;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class MagnitudImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Magnitudes([
            'id' => $row['id'],
            'clave' => $row['clave'],
            'nombre' => $row['nombre']
        ]);
    }
}
