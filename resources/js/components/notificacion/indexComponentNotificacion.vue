<template>
  <div class="text-center ma-2" v-if="var_computed_snackbar.status">
    <v-snackbar
      v-model="var_computed_snackbar.status"
      :timeout="-1"
      absolute
      top
      :color="var_computed_snackbar.color"
      right
    >
      {{ var_computed_snackbar.mensaje }}
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="var_computed_snackbar.status = false"
          dark
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["snackbar"]),

    var_computed_snackbar: {
      get() {
        return this.snackbar;
      },
      set(val) {
        this.$store.commit("setNotificacion", val);
      },
    },
  },
};
</script>