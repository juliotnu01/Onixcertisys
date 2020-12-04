import store from "../plugins/store.js";
export default class cotizacionServices {
    async getlistCotizaciones() {
        try {
            let { data } = await axios("/api/get-cotizaciones");
            store.commit("setCotizaciones", data);
            var model_notificacion = {mensaje: 'Cotizacion cargadas con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
            
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error en las cotizaciones --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
    async getlistCotizacionesParaEstadistica() {
        try {
            let { data } = await axios("/api/get-cotizaciones-estadisticas");
            store.commit("setCotizacionesEstadistica", data);
            var model_notificacion = {mensaje: 'Cotizacion cargadas con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
    async agregarCotizacion(cot) {
        try {
            var model = {
                cliente_id: cot.cliente_selected.id,
                sucursal: cot.sucursal_cliente.id,
                moneda_id: cot.moneda_selected.id,
                empleado_id: cot.empleado_selected.id,
                tiempo_de_entrega_id: cot.tde_selected.id,
                tipo_de_servicio: cot.tipo_de_servicio_selected.name,
                nota_para_la_cotizacion: cot.nota_cotizacion,
                estado_de_la_cotizacion: cot.estado_cotizacion_selected.name,
                contacto: cot.cliente_selected.nombre_contacto,
                contacto_telefono: cot.cliente_selected.telefono_contacto,
                contacto_correo: cot.cliente_selected.correo_contacto,
                condicion: cot.condiciones,
                nota_de_seguimiento: cot.nota_seguimiento,
                partidas: cot.partidas,
                sub_total: cot.sub_total,
                iva: cot.iva,
                total: cot.total
            };
            let { data } = await axios.post("/api/add-cotizacion", model);
            store.commit("setDialogAddCotizacion", false);
            var model_notificacion = {mensaje: 'Cotizacion agregada con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);

        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
    async agregarCotizacionDuplicada(cot) {
        try {
            var model = {
                id: cot.id,
                cliente_id: cot.has_cliente.id,
                moneda_id: cot.has_moneda.id,
                empleado_id: cot.has_empleado.id,
                tiempo_de_entrega_id: cot.has_tiempo_de_entrega.id,
                tipo_de_servicio: cot.tipo_de_servicio.name,
                nota_para_la_cotizacion: cot.nota_para_la_cotizacion,
                estado_de_la_cotizacion: cot.estado_de_la_cotizacion.name,
                contacto: cot.has_cliente.nombre_contacto,
                contacto_telefono: cot.has_cliente.telefono_contacto,
                contacto_correo: cot.has_cliente.correo_contacto,
                condicion: cot.condicion,
                nota_de_seguimiento: cot.nota_de_seguimiento,
                partidas: cot.has_partidas,
                sub_total: cot.sub_total,
                iva: cot.iva,
                total: cot.total
            };
            let { data } = await axios.post("/api/add-cotizacion-duplicate", model);
            store.commit("setDialogAddCotizacion", false);
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }

    async actualizarCotizacion(cot) {
        try {
			var model = {
				id: cot.id,
                cliente_id: cot.has_cliente.id,
                moneda_id: cot.has_moneda.id,
                empleado_id: cot.has_empleado.id,
                tiempo_de_entrega_id: cot.has_tiempo_de_entrega.id,
                tipo_de_servicio: cot.tipo_de_servicio.name,
                nota_para_la_cotizacion: cot.nota_para_la_cotizacion,
                estado_de_la_cotizacion: cot.estado_de_la_cotizacion.name,
                contacto: cot.has_cliente.nombre_contacto,
                contacto_telefono: cot.has_cliente.telefono_contacto,
                contacto_correo: cot.has_cliente.correo_contacto,
                condicion: cot.condicion,
                nota_de_seguimiento: cot.nota_de_seguimiento,
                partidas: cot.has_partidas,
                sub_total: cot.sub_total,
                iva: cot.iva,
                total: cot.total
            };
            let { data } = await axios.put("/api/edit-cotizacion", model);
            store.commit("setDialogEditCotizacion", false);
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }

    async EliminarCotizacion(model) {
        try {
            let { data } = await axios.delete(
                `/api/delete-cotizacion/${model.id}`
            );
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }

    async printCotizacion(model) {
        try {
            let { data } = await axios.post(`/api/print-cotizacion`, model);
           await store.commit('setCotizacionPrint', data)
           await store.commit('setDialogViewPdfCotizacion', true)
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
    async getMasivPartidas() {
        try {
            let { data } = await axios(`/api/get-masiv-partidas`);
           await store.commit('setMasivPartidas', data)
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
}
