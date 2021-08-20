import store from "../plugins/store.js";
export default class instrumentoServices {
	async getlistInstrumentos() {
		try {
			let { data } = await axios("/api/get-instrumentos");
			store.commit("setInstrumentos", data);
			var model_notificacion = {
				mensaje: "Instrumentos cargadas con exito",
				status: true,
				color: "success"
			};
			store.commit("setNotificacion", model_notificacion);
		} catch (e) {
			console.log(e);
			var model_notificacion = {
				mensaje: `!Ha ocurrido un error en los instrumentos --> ${e}¡`,
				status: true,
				color: "error"
			};
			store.commit("setNotificacion", model_notificacion);
		}
	}
	async agregarInstrumento(model) {
		try {
			let { data } = await axios.post("/api/add-instrumento", model);
			store.commit("setDialogAddInstrumento", data);
		} catch (e) {
			console.log(e);
		}
	}

	async actualizarInstrumento(model) {
		try {
			let { data } = await axios.put("/api/edit-instrumento", model);
			store.commit("setDialogEditInstrumento", false);
			var model_notificacion = {
				mensaje: "Instrumentos Actualizado con exito",
				status: true,
				color: "warning"
			};
			store.commit("setNotificacion", model_notificacion);
		} catch (e) {
			console.log(e);
			var model_notificacion = {
				mensaje: `!Ha ocurrido un error en editar el instrumentos --> ${e}¡`,
				status: true,
				color: "error"
			};
			store.commit("setNotificacion", model_notificacion);
		}
	}

	async EliminarInstrumento(model) {
		try {
			let { data } = await axios.delete(
				`/api/delete-instrumento/${model.id}`
			);
		} catch (e) {
			console.log(e);
		}
	}
	async AgregarInstrumentoMasivamente(file = null) {
		try {
			var datafile = new FormData();
			datafile.append("document_instrumentos", file);
			let { data } = await axios.post(`/api/add-instrumento-masivamente`, datafile,{ headers: {"content-type": "multipart/form-data"}});
			var model_notificacion = {
				mensaje: "Instrumentos cargadas con exito",
				status: true,
				color: "success"
			};
			store.commit("setNotificacion", model_notificacion);
		} catch (e) {
			console.log(e);
			var model_notificacion = {
				mensaje: `!Ha ocurrido un error en editar el instrumentos --> ${e}¡`,
				status: true,
				color: "error"
			};
			store.commit("setNotificacion", model_notificacion);
		}
	}
}
