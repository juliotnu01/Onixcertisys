<template>
  <div class="text-center">
        <v-overlay :value="overlayState">
          <v-progress-circular indeterminate size="94"></v-progress-circular>
        </v-overlay>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["overlay"]),
    overlayState: {
      get() {
        return this.overlay;
      },
      set(val) {
        this.$store.commit("setOverley", val);
      },
    },
  },
};
</script>
