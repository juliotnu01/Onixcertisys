<?php

namespace App\Imports;

use App\Models\{MasivPartidas,Instrumento};
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;


class ImportMasivPartidas implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {


        $instrumento = Instrumento::updateOrCreate([

            'nombre' => $row['descripcion'],
            'alcance' => $row['capacidad']

        ]);

        return new MasivPartidas([
            'identificacion' => $row['identificacion'],
            'instrumento_id' => $instrumento->id,
            'marca' => $row['marca'],
            'modelo' => $row['modelo'],
            'serie' => $row['serie'],
        ]);
    }
}
