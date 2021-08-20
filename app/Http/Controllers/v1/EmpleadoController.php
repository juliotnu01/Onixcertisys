<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\{Empleado, Partida, DocumentoLab, Instrumento};
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Events\AsignacionOrdenDeServicio;
use Illuminate\Http\File;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;
use JsonSerializable;
use Maatwebsite\Excel\Concerns\ToArray;
use PHPUnit\Util\Json;

use function GuzzleHttp\json_encode;

use Excel;
use App\Imports\EmpleadoImport;

class EmpleadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $empleado = Empleado::all();

            return Response($empleado);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
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
    public function store(Request $request, Empleado $empleado)
    {
        try {
            return DB::transaction(function () use ($request, $empleado) {

                $empleado->fecha_de_alta = $request['fecha_de_alta'];
                $empleado->fecha_de_baja = $request['fecha_de_baja'];
                $empleado->status = $request['status']['value'];
                $empleado->nombre_completo = $request['nombre_completo'];
                $empleado->rfc = $request['rfc'];
                $empleado->direccion = $request['direccion'];
                $empleado->ciudad = $request['ciudad'];
                $empleado->codigo_postal = $request['codigo_postal'];
                $empleado->telefono = $request['telefono'];
                $empleado->correo_factura = $request['correo_factura'];
                $empleado->departamento = $request['departamento'];
                $empleado->observaciones = $request['observaciones'];
                $empleado->save();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }
    public function storeImport(Request $request, Empleado $empleado)
    {
        try {
            Excel::import(new EmpleadoImport, $request->file('document_empleado'), \Maatwebsite\Excel\Excel::XLSX);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Empleado  $empleado
     * @return \Illuminate\Http\Response
     */
    public function show(Empleado $empleado)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Empleado  $empleado
     * @return \Illuminate\Http\Response
     */
    public function edit(Empleado $empleado)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Empleado  $empleado
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Empleado $empleado)
    {

        try {
            return DB::transaction(function () use ($request, $empleado) {

                $empleado->find($request['id'])->update([
                    'fecha_de_alta' => $request['fecha_de_alta'],
                    'fecha_de_baja' => $request['fecha_de_baja'],
                    'status' => $request['status']['value'],
                    'nombre_completo' => $request['nombre_completo'],
                    'rfc' => $request['rfc'],
                    'direccion' => $request['direccion'],
                    'ciudad' => $request['ciudad'],
                    'codigo_postal' => $request['codigo_postal'],
                    'telefono' => $request['telefono'],
                    'correo_factura' => $request['correo_factura'],
                    'departamento' => $request['departamento'],
                    'observaciones' => $request['observaciones'],

                ]);
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Empleado  $empleado
     * @return \Illuminate\Http\Response
     */
    public function destroy($id,  Empleado $empleado)
    {
        try {
            return DB::transaction(function () use ($id, $empleado) {
                $empleado->find($id)->delete();
            }, 5);
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }

    public function asignarTecnicoPartida(Request $request, Partida $partida, Instrumento $instrumento)
    {
        if (count($request['file']) == 0) {
            $request['file'] = $request['model']['has_intrumento']['belongs_documento'];
        }
        $instrumento->find($request['model']['has_intrumento']['id'])->update([
            'documento_id' =>  $request['file']['id']
        ]);
        try {
            DB::transaction(function () use ($request, $partida) {
                $partida->where('informe_id', $request['model']['informe_id'])->update([
                    'empleado_id' =>   $request['model']['has_empleado']['id'],
                    ]);
                   
                }, 5);
                
            // $r =  Http::post(env('API_HANDLE_FILE_EXCEL_DOC')."/api/Asignacion/Json", $request->all());
        } catch (Exception $e) {
            throw new Exception($e, 1);
        }
    }
}
