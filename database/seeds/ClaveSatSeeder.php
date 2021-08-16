<?php

use Illuminate\Database\Seeder;
use App\Models\Unidad;

class ClaveSatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $claveSat = [
            ["clave" => "H87",  "tipo"  =>  "Múltiplos / Fracciones / Decimales",              "nombre" => "Pieza"],
            ["clave" => "EA",   "tipo"  =>  "Unidades de venta",                               "nombre" => "Elemento"],
            ["clave" => "E48",  "tipo"  =>  "Unidades específicas de la industria (varias)",   "nombre" => "Unidad de Servicio"],
            ["clave" => "ACT",  "tipo"  =>  "Unidades de venta",                               "nombre" => "Actividad"],
            ["clave" => "KGM",  "tipo"  =>  "Mecánica",                                        "nombre" => "Kilogramo"],
            ["clave" => "E51",  "tipo"  =>  "Unidades específicas de la industria (varias)",   "nombre" => "Trabajo"],
            ["clave" => "A9",   "tipo"  =>  "Diversos",                                        "nombre" => "Tarifa"],
            ["clave" => "MTR",  "tipo"  =>  "Tiempo y Espacio",                                "nombre" => "Metro"],
            ["clave" => "AB",   "tipo"  =>  "Diversos",                                        "nombre" => "Paquete a granel"],
            ["clave" => "BB",   "tipo"  =>  "Unidades específicas de la industria (varias)",   "nombre" => "Caja base"],
            ["clave" => "KT",   "tipo"  =>  "Unidades de venta",                               "nombre" => "Kit"],
            ["clave" => "SET",  "tipo"  =>  "Unidades de venta",                               "nombre" => "Conjunto"],
            ["clave" => "LTR",  "tipo"  =>  "Tiempo y Espacio",                                "nombre" => "Litro"],
            ["clave" => "XBX",  "tipo"  =>  "Unidades de empaque",                             "nombre" => "Caja"],
            ["clave" => "MON",  "tipo"  =>  "Tiempo y Espacio",                                "nombre" => "Mes"],
            ["clave" => "HUR",  "tipo"  =>  "Tiempo y Espacio",                                "nombre" => "Hora"],
            ["clave" => "MTK",  "tipo"  =>  "Tiempo y Espacio",                                "nombre" => "Metro cuadrado"],
            ["clave" => "11",   "tipo"  =>  "Diversos",                                        "nombre" => "Equipos"],
            ["clave" => "MGM",  "tipo"  =>  "Mecánica",                                        "nombre" => "Miligramo"],
            ["clave" => "XPK",  "tipo"  =>  "Unidades de empaque",                             "nombre" => "Paquete"],
            ["clave" => "XKI",  "tipo"  =>  "Unidades de empaque",                             "nombre" => "Kit (Conjunto de piezas)"],
            ["clave" => "AS",   "tipo"  =>  "Diversos",                                        "nombre" => "Variedad"],
            ["clave" => "GRM",  "tipo"  =>  "Mecánica",                                        "nombre" => "Gramo"],
            ["clave" => "PR",   "tipo"  =>  "Números enteros / Números / Ratios",              "nombre" => "Par"],
            ["clave" => "DPC",  "tipo"  =>  "Unidades de venta",                               "nombre" => "Docenas de piezas"],
            ["clave" => "xun",  "tipo"  =>  "Unidades de empaque",                             "nombre" => "Unidad"],
            ["clave" => "DAY",  "tipo"  =>  "Tiempo y Espacio",                                "nombre" => "Día"],
            ["clave" => "XLT",  "tipo"  =>  "Unidades de empaque",                             "nombre" => "Lote"],
            ["clave" => "10",   "tipo"  =>  "Diversos",                                        "nombre" => "Grupos"],
            ["clave" => "MLT",  "tipo"  =>  "Tiempo y Espacio",                                "nombre" => "Mililitro"],
            ["clave" => "E54",  "tipo"  =>  "Unidades específicas de la industria (varias)",   "nombre" => "Viaje"],
        ];

        foreach ($claveSat as $key => $value) {
            Unidad::create($value);
        }
    }
}
