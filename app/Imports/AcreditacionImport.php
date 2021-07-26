<?php

namespace App\Imports;

use App\Models\Acreditaciones;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class AcreditacionImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Acreditaciones([
            'nombre' => $row['nombre']
        ]);
    }
}
