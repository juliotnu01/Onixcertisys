<?php

use Illuminate\Database\Seeder;
use App\Models\CondicionesDePago;

class CondicionesDePagoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ["nombre" => "TRANSFERENCIA ELECTRONICA"],
            ["nombre" => "DEPOSITO EN EFECTIVO"],
            ["nombre" => "CHEQUE"],
           
        ];
        foreach ($data as $key => $value) {
            CondicionesDePago::create($value);
        }
    }
}