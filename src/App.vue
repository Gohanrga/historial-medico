<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Historial Médico</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <progressBar/>
  </v-app>
</template>

<script>
import progressBar from './components/progressBar'
export default {
  name: 'App',

  components: {
    progressBar
  },

  data: () => ({
    //
  }),
  mounted () {
    this.$store.commit('desactivaProgress')
  }
}
</script>
