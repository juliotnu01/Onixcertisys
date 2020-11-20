<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\ReporteVentasPorMagnitud;
use Illuminate\Http\Request;
use PDF;
use Illuminate\Support\Facades\Storage;
class ReporteVentasPorMagnitudController extends Controller
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ReporteVentasPorMagnitud  $reporteVentasPorMagnitud
     * @return \Illuminate\Http\Response
     */
    public function show(ReporteVentasPorMagnitud $reporteVentasPorMagnitud)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ReporteVentasPorMagnitud  $reporteVentasPorMagnitud
     * @return \Illuminate\Http\Response
     */
    public function edit(ReporteVentasPorMagnitud $reporteVentasPorMagnitud)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ReporteVentasPorMagnitud  $reporteVentasPorMagnitud
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ReporteVentasPorMagnitud $reporteVentasPorMagnitud)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ReporteVentasPorMagnitud  $reporteVentasPorMagnitud
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReporteVentasPorMagnitud $reporteVentasPorMagnitud)
    {
        //
    }
    
    public function storeReporteVentasMagnitud(Request $request)
    {
        try {
            $data = collect($request->all());
            $pdf = PDF::loadView('pdfs.pdfReporteVentasMagnitud', compact(['data']));
            Storage::disk('store_pdfs')->put("/reportes/reporte-ventas-por-magnitud.pdf", $pdf->stream());
            $url = Storage::disk('store_pdfs')->url("/reportes/reporte-ventas-por-magnitud.pdf");
            return response($url);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
