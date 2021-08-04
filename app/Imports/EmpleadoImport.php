<?php

namespace App\Imports;

use App\Models\Empleado;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class EmpleadoImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Empleado([
            'nombre_completo' => $row['nombre'],
            'rfc'=> $row['rfc'],
            'codigo_postal'=> $row['codigo_postal'],
            'telefono'=> $row['telefono'],
            'status'=> 1,
        ]);
    }
}
