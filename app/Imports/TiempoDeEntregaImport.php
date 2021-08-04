<?php

namespace App\Imports;

use App\Models\TiempoDeEntrega;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
class TiempoDeEntregaImport implements ToModel,WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new TiempoDeEntrega([
            "nombre" => $row['nombre']
        ]);
    }
}
