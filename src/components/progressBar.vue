<template>
  <v-dialog
      v-model="$store.state.progress"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="blue"
        dark
      >
        <v-card-text>
          Procesando....
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
  data: () => ({
    drawer: null,
    dialog: true
  })
}
</script>
<style>
.loading-dialog {
  background-color: transparent
}
</style>