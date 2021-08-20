<?xml version="1.0" encoding="utf-8"?>
<cfdi:Comprobante xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd" Version="3.3" Serie="{{$comprobante['Serie']}}" Folio="{{$comprobante['Folio']}}" Fecha="{{$comprobante['Fecha']}}"  SubTotal="{{$comprobante['SubTotal']}}" Moneda="{{$comprobante['Moneda']}}" TipoCambio="1" Total="{{$comprobante['Total']}}" TipoDeComprobante="{{$comprobante['TipoDeComprobante']}}" FormaPago="01" MetodoPago="PUE" LugarExpedicion="{{$comprobante['LugarExpedicion']}}"
    xmlns:cfdi="http://www.sat.gob.mx/cfd/3"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <cfdi:Emisor Rfc="{{$comprobante['Receptor']['Rfc']}}" Nombre="{{$comprobante['Emisor']['Rfc']}}" RegimenFiscal="{{$comprobante['Emisor']['RegimenFiscal']}}" />
    <cfdi:Receptor Rfc="{{$comprobante['Receptor']['Rfc']}}" Nombre="{{$comprobante['Receptor']['Nombre']}}" UsoCFDI="{{$comprobante['Receptor']['UsoCFDI']}}" />
    <cfdi:Conceptos>
    @foreach($comprobante['Conceptos'] as $key => $item)
        <cfdi:Concepto ClaveProdServ="{{$item['ClaveProdServ']}}"  Cantidad="1" ClaveUnidad="{{$item['ClaveUnidad']}}" Unidad="{{$item['Unidad']}}" Descripcion="{{$item['Unidad']}}" ValorUnitario="{{$item['ValorUnitario']}}" Importe="{{$item['Importe']}}">
            <cfdi:Impuestos>
                @foreach($item['Impuestos']['Traslados'] as $keyT => $itemT)
                    <cfdi:Traslados>
                        <cfdi:Traslado Base="{{$itemT['Base']}}" Impuesto="{{$itemT['Impuesto']}}" TipoFactor="{{$itemT['TipoFactor']}}" TasaOCuota="{{$itemT['TasaOCuota']}}" Importe="{{$itemT['Importe']}}" />
                    </cfdi:Traslados>
                @endforeach    
            </cfdi:Impuestos>
        </cfdi:Concepto>
    @endforeach
    </cfdi:Conceptos>
    <cfdi:Impuestos  TotalImpuestosTrasladados="{{$comprobante['Impuestos']['TotalImpuestosTrasladados']}}">
        @foreach($comprobante['Impuestos']['Traslados'] as $keyT => $itemT)
            <cfdi:Traslados>
                <cfdi:Traslado Impuesto="{{$itemT['Impuesto']}}" TipoFactor="{{$itemT['TipoFactor']}}" TasaOCuota="{{$itemT['TasaOCuota']}}" Importe="{{$itemT['Importe']}}" />
            </cfdi:Traslados>
        @endforeach   
    </cfdi:Impuestos>
</cfdi:Comprobante>