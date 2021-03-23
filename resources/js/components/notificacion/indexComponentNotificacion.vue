<template>
    <!-- 
  <div class="text-center ma-2" v-if="var_computed_snackbar.status">
      {{
      var_computed_snackbar.color === "success"
        ? $toastr.success(var_computed_snackbar.mensaje, "")
        : var_computed_snackbar.color === "warning"
        ? $toastr.warning(var_computed_snackbar.mensaje, "")
        : $toastr.error(var_computed_snackbar.mensaje, "")
    }}
  </div>
     -->
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["snackbar"]),
    var_computed_snackbar: {
      get() {
      //   return this.snackbar;
      },
      set(val) {
      //   this.$store.commit("setNotificacion", val);
      },
    },
  },
};
</script>
