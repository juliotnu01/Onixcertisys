<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\{Calibracion, Partida, Recibo, PatronLab, ProcedimientoLab};
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
class CalibracionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Calibracion $calibracion,  ProcedimientoLab $procedimientoLab, PatronLab $patronLab)
    {
        try {
            $cb = Carbon::create($request['fecha_anomalia']);
            $f_vencimiento = $cb->addMonths($request['vencimiento'])->format('Y-m-d');
            $request['vencimiento'] = $f_vencimiento;

             DB::transaction(function () use ($request, $calibracion,$procedimientoLab,$patronLab) {
                $calibracion->tipo_de_calibracion = $request['tipo_de_calibracion']['name'];
                $calibracion->fecha_anomalia = $request['fecha_anomalia'];
                $calibracion->fecha_inicio_calibracion = Carbon::now();
                $calibracion->descripcion_anomalia = $request['descripcion_anomalia'];
                $calibracion->observacion_tecnico = $request['observacion_tecnico'];
                $calibracion->estado = 'en proceso';
                $calibracion->save();

                for ($i=0; $i < count($request['procedimiento_de_calibracion']) ; $i++) { 
                    $procedimientoLab  = new ProcedimientoLab();
                    $procedimientoLab->procedimiento_id = $request['procedimiento_de_calibracion'][$i]['belongs_procedimiento']['id'];
                    $procedimientoLab->partida_id = $request['id_partida'];
                    $procedimientoLab->save();
                }
                for ($i=0; $i < count($request['patron_de_calibracion']) ; $i++) { 
                    $patronLab  = new PatronLab();
                    $patronLab->patron_id = $request['patron_de_calibracion'][$i]['belongs_patron']['id'];
                    $patronLab->partida_id = $request['id_partida'];
                    $patronLab->save();
                }

                $partida = new Partida();
                $partida->find($request['id_partida'])->update([
                    'calibracion_id' => $calibracion['id']
                    ]);
                }, 5);
            $r =  Http::post(env('API_HANDLE_FILE_EXCEL_DOC')."/api/Calibracion/Json", $request->all());

            dd($r);

        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function terminarCalibracion(Request $request, Calibracion $calibracion)
    {
        try {
            dd($request->file("certificado")->getFilename(), $request->file("certificado")->getExtension());
            Storage::disk('store_pdfs')->put("/certificados/{$request->file("certificado")->getFilename()}{$request->file("certificado")->getExtension()}",$request->file("certificado"));
            $url = Storage::disk('store_pdfs')->url("/certificados");

            $data = json_decode($request['partida']);
            $dataPdf = ["id_partida" => $data['id'], "doc_path" => $request['partida']['ruta_doc_calibracion']];
            $d = collect($dataPdf);
            $r =  Http::post(env('API_HANDLE_FILE_EXCEL_DOC')."/api/Pdf/Json", $d->all());
            return DB::transaction(function () use ($request, $calibracion) {
                $calibracion->find($request['id_calibracion'])->update([
                    'estado' => 'terminada',
                    'fecha_terminacion_calibracion' => Carbon::now()
                    ]);
            }, 5);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Calibracion  $calibracion
     * @return \Illuminate\Http\Response
     */
    public function show(Calibracion $calibracion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Calibracion  $calibracion
     * @return \Illuminate\Http\Response
     */
    public function edit(Calibracion $calibracion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Calibracion  $calibracion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Calibracion $calibracion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Calibracion  $calibracion
     * @return \Illuminate\Http\Response
     */
    public function destroy(Calibracion $calibracion)
    {
        //
    }
}
