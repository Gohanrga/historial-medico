<template>
    <v-container fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" xs="12" sm="6" md="5" lg="4">
                <v-text-field
                    name="criterio"
                    label="Ci/Número Historial"
                ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="5" lg="4">
                <v-text-field
                    name="criterio"
                    label="Nombre Paciente"
                ></v-text-field>
            </v-col>
            <v-col cols="3" xs="3" sm="3" md="2" lg="1">
               <v-btn color="primary">Enviar</v-btn>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col cols="12" xs="12" sm="8" md="6" lg="3"
                v-for="(paciente, index) in historiales" :key="index"
            >
                <v-card
                    max-width="400"
                    class="mx-auto"
                    color="rose"
                >
                    <v-card-title>
                        <h3>{{paciente.nombre + ' ' +paciente.paterno + ' ' + (paciente.materno===undefined?'':paciente.materno)}}</h3>
                    </v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                        <ul>
                            <li><span class="font-weight-bold">Celular:</span>{{paciente.celular}}</li>
                            <li><span class="font-weight-bold">Fecha NAcimiento:</span>{{paciente.fechaNacimiento}}</li>
                        </ul>
                    </v-card-text>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    large
                                    color="secondary"
                                    v-bind="attrs"
                                    v-on="on"
                                    @click="obtieneHistorialporId(index)"
                                    >
                                    mdi-account-edit-outline
                                </v-icon>
                            </template>
                            <span>Editar historial médico</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    large
                                    color="tertiary"
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    mdi-text-box-plus
                                </v-icon>
                            </template>
                            <span>Agregar Consulta Médica</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    large
                                    color="primary"
                                    v-bind="attrs"
                                    v-on="on"
                                    @click="eliminaHistorial(index)"
                                    >
                                    mdi-trash-can-outline
                                </v-icon>
                            </template>
                            <span>Eliminar Consulta Médica</span>
                        </v-tooltip>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-dialog
                v-model="dialogPaciente"
                fullscreen
                hide-overlay
            >
                <v-card>
                    <v-toolbar
                    dark
                    color="primary"
                    >
                        <v-btn
                            icon
                            dark
                            @click="cierraDialogoHistorial()"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>{{cabecera}}</v-toolbar-title>
                    </v-toolbar>
                    <Paciente
                        :historialClinicoProp="historial"
                        :idHistorial="idHistorial"
                        @cierraventana="cierraDialogoHistorial"
                    ></Paciente>
                </v-card>
            </v-dialog>
        </v-row>
        <v-row>
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="pink"
                    dark
                    absolute
                    bottom
                    right
                    fab
                    style="margin-bottom:30px;"
                    v-bind="attrs"
                    v-on="on"
                    @click="nuevoPaciente()"
                    >
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <span>Agregar nueva historia Clínica</span>
            </v-tooltip>
        </v-row>
    </v-container>
</template>
<script>
import { ApiService } from '../ApiService'
import Paciente from './Paciente'
const apiService = new ApiService()
export default {
  components: {
    Paciente
  },
  data () {
    return {
      historiales: {},
      dialogPaciente: false,
      historial: {},
      cabecera: '',
      idHistorial: ''
    }
  },
  methods: {
    obtieneHistorial () {
      this.$store.commit('activaProgress')
      apiService.obtieneDatos('Paciente')
        .then(data => {
          this.historiales = data
          console.log(this.historiales)
          this.$store.commit('desactivaProgress')
        })
        .catch(error => {
          console.log(error)
          this.$store.commit('desactivaProgress')
        })
    },
    nuevoPaciente () {
      this.historial = { accion: 'I' }
      this.cabecera = 'Nuevo Paciente '
      this.idHistorial = ''
      this.dialogPaciente = true
    },
    obtieneHistorialporId (id) {
      this.$store.commit('activaProgress')
      apiService.obtieneDatos('Paciente', id)
        .then(data => {
          this.historial = data
          this.idHistorial = id
          this.historial.accion = 'U'
          this.cabecera = 'Edición del Historial Clinico del paciente ' + this.historial.nombre + ' ' + this.historial.paterno
          this.dialogPaciente = true
          this.$store.commit('desactivaProgress')
        })
        .catch(error => {
          console.log(error)
          this.$store.commit('desactivaProgress')
        })
    },
    cierraDialogoHistorial () {
      this.historial = {}
      this.cabecera = ''
      this.dialogPaciente = false
      this.obtieneHistorial()
    },
    eliminaHistorial (id) {
      this.$store.commit('activaProgress')
      console.log(id)
      apiService.eliminaDatos('Paciente', id)
        .then(data => {
          console.log(this.historiales[id])
          delete this.historiales[id]
          console.log(this.historiales)
          this.$store.commit('desactivaProgress')
        })
        .catch(error => {
          console.log(error)
          this.$store.commit('desactivaProgress')
        })
    }
  },
  mounted () {
    this.obtieneHistorial()
  }
}
</script>
<style>
</style>