<template>
    <v-container fluid>
        <v-stepper
            v-model="step"
        >
            <v-stepper-header>
                <v-stepper-step
                    :complete="step > 1"
                    step="1"
                    editable
                >
                Datos Personales
                </v-stepper-step>
                <v-stepper-step
                    :complete="step > 2"
                    step="2"
                    editable
                >
                Antecedentes clinicos
                </v-stepper-step>
                <v-stepper-step
                    :complete="step > 3"
                    step="3"
                    editable
                >
                Antecedentes Patologicos Familiares
                </v-stepper-step>
                <v-stepper-step
                    :complete="step > 4"
                    step="4"
                    editable
                >
                Antecedentes Gineco Obstetricos
                </v-stepper-step>
                <v-stepper-step
                    :complete="step > 5"
                    step="5"
                    editable
                >
                Examen Fisico General
                </v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card
                        class="mb-3 pa-4"
                        outlined
                    >
                        <DatosPaciente
                            v-model="historialClinicoPaciente"
                            ref="DatosPaciente"
                            @actualiza="incrementa"
                        ></DatosPaciente>
                    </v-card>
                    <v-btn
                        color="secondary"
                        @click="guardaDatosPaciente()"
                    >
                        Continuar
                    </v-btn>
                </v-stepper-content>
                <v-stepper-content step="2">
                    <v-card
                        class="mb-3 pa-4"
                        outlined
                    >
                        <Antecedentes
                            v-model="historialClinicoPaciente"
                            ref="Antecedentes"
                            @actualiza="incrementa"
                        >
                        </Antecedentes>
                    </v-card>
                    <v-btn
                        color="secondary"
                        @click="guardaAntecedentes()"
                    >
                        Continuar
                    </v-btn>
                </v-stepper-content>
                <v-stepper-content step="3">
                    <v-card
                        class="mb-3 pa-4"
                        outlined
                    >
                        <AntecedentesFamiliares
                            v-model="historialClinicoPaciente"
                            ref="AntecedentesFamiliares"
                            @actualiza="incrementa"
                        >
                        </AntecedentesFamiliares>
                    </v-card>
                    <v-btn
                        color="secondary"
                        @click="guardaAntecedentesPatologico()"
                    >
                        Continuar
                    </v-btn>
                </v-stepper-content>
                <v-stepper-content step="4">
                    <v-card
                        class="mb-3 pa-4"
                        outlined
                    >
                        <AntecedentesGineco
                            v-model="historialClinicoPaciente"
                            ref="AntecedentesGineco"
                            @actualiza="incrementa"
                        >
                        </AntecedentesGineco>
                    </v-card>
                    <v-btn
                        color="secondary"
                        @click="guardaAntecedentesGineco()"
                    >
                        Continuar
                    </v-btn>
                </v-stepper-content>
                <v-stepper-content step="5">
                    <v-card
                        class="mb-3 pa-4"
                        outlined
                    >
                        <ExamenFisico
                            v-model="historialClinicoPaciente"
                            ref="ExamenFisico"
                        >
                        </ExamenFisico>
                    </v-card>
                    <v-btn
                        color="secondary"
                        @click="accion === 'I' ? enviarAntecedente() : actualizarAntecedentes()"
                    >
                        Guardar
                    </v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-container>
</template>
<script>
import DatosPaciente from '../components/paciente/DatosPaciente.vue'
import Antecedentes from '../components/paciente/Antecedentes.vue'
import AntecedentesFamiliares from '../components/paciente/AntecedentesFamiliares.vue'
import AntecedentesGineco from '../components/paciente/AntecedentesGineco.vue'
import ExamenFisico from '../components/paciente/ExamenFisico'
import { ApiService } from '../ApiService'
const apiService = new ApiService()
export default {
  components: {
    DatosPaciente,
    Antecedentes,
    AntecedentesFamiliares,
    AntecedentesGineco,
    ExamenFisico
  },
  data () {
    return {
      step: 1,
      historialClinicoPaciente: this.historialClinicoProp,
      accion: this.historialClinicoProp.accion
    }
  },
  props: {
    historialClinicoProp: { default: {} },
    idHistorial: { default: '' }
  },
  watch: {
    historialClinicoProp () {
      if (this.historialClinicoProp.accion === 'I' ||
          this.historialClinicoProp.accion === 'U') {
        this.step = 1
        this.accion = this.historialClinicoProp.accion
        this.historialClinicoPaciente = this.historialClinicoProp
        this.historialClinicoProp.accion = ''
      }
    }
  },
  mounted () {},
  methods: {
    guardaDatosPaciente () {
      this.$refs.DatosPaciente.validacion()
    },
    guardaAntecedentes () {
      this.$refs.Antecedentes.validacion()
    },
    guardaAntecedentesPatologico () {
      this.$refs.AntecedentesFamiliares.validacion()
    },
    guardaAntecedentesGineco () {
      this.$refs.AntecedentesGineco.validacion()
    },
    enviarAntecedente () {
      this.$refs.ExamenFisico.validacion()
      this.$store.commit('activaProgress')
      apiService.guardaDatos(this.historialClinicoPaciente, 'Paciente')
        .then(data => {
          this.$store.commit('desactivaProgress')
          this.$emit('cierraventana')
        })
        .catch(error => {
          console.log(error)
          this.$store.commit('desactivaProgress')
        })
    },
    actualizarAntecedentes () {
      this.$refs.DatosPaciente.validacion()
      this.$refs.Antecedentes.validacion()
      this.$refs.AntecedentesFamiliares.validacion()
      this.$refs.AntecedentesGineco.validacion()
      this.$refs.ExamenFisico.validacion()
      this.$store.commit('activaProgress')
      apiService.actualizaDatos(this.historialClinicoPaciente, 'Paciente', this.idHistorial)
        .then(data => {
          this.$store.commit('desactivaProgress')
          this.$emit('cierraventana')
        })
        .catch(error => {
          console.log(error)
          this.$store.commit('desactivaProgress')
        })
    },
    incrementa () {
      this.step++
    },
    decrementa () {
      this.step--
    }
  }
}
</script>