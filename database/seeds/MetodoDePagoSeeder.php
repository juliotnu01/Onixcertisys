<?php

use Illuminate\Database\Seeder;
use App\Models\MetodoDePago;

class MetodoDePagoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $data = [
            ["nombre" => "TPAGO PARCIALES O DIFERIDO"],
            ["nombre" => "PAGO EN UNA SOLA EXHIBICION"],
           
        ];
        foreach ($data as $key => $value) {
            MetodoDePago::create($value);
        }
    }
}
