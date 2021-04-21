<template>
    <v-form
        ref="form"
        v-model="valid"
    >
        <v-row >
            <v-col cols="12">
                <span class="font-weight-bold primary--text">ANTECEDENTES</span>
                <v-divider class="primary"></v-divider>
            </v-col>
        </v-row>
        <!-- DAtos paciente -->
        <v-row align="center" justify="center" >
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="Alergias"
                    rows="2"
                    outlined
                    placeholder="Alergias"
                    v-model="antecedentes.alergias"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="Signos Vitales"
                    rows="2"
                    outlined
                    placeholder="Signos Vitales"
                    v-model="antecedentes.signosVitales"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-textarea
                    label="Enfermedad Actual"
                    rows="2"
                    outlined
                    placeholder="Enfermedad Actual"
                    v-model="antecedentes.enfermedadActual"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-textarea
                    label="Antecedentes personales Patológicos"
                    rows="2"
                    outlined
                    placeholder="Antecedentes personales Patológicos"
                    v-model="antecedentes.antecedentesPatologicos"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-textarea
                    label="Antecedentes personales no Patológicos"
                    rows="2"
                    outlined
                    placeholder="Antecedentes personales no Patológicos"
                    v-model="antecedentes.antecedentesNoPatologicos"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-textarea
                    label="Motivo Consulta"
                    rows="2"
                    outlined
                    placeholder="Motivo Consulta"
                    v-model="antecedentes.motivoConsulta"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-textarea
                    label="Inmunisaciones"
                    rows="2"
                    outlined
                    placeholder="Inmunisaciones"
                    v-model="antecedentes.inmunisaciones"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-text-field
                    label="Alimentación"
                    placeholder="Alimentación"
                    v-model="antecedentes.alimentacion"
                    autocomplete="off"
                    :maxlength="tool.getLongitudTexto()"
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-text-field
                    label="Diuresis"
                    placeholder="Diuresis"
                    v-model="antecedentes.diuresis"
                    autocomplete="off"
                    :maxlength="tool.getLongitudTexto()"
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-text-field
                    label="Catarsis"
                    placeholder="Catarsis"
                    v-model="antecedentes.catarsis"
                    autocomplete="off"
                    :maxlength="tool.getLongitudTexto()"
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-text-field
                    label="Horas de Sueño"
                    placeholder="Horas de Sueño"
                    v-model="antecedentes.horasSueño"
                    autocomplete="off"
                    :maxlength="tool.getLongitudTexto()"
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <span class="font-weight-bold primary--text">Hábitos Tóxicos</span>
                <v-divider class="primary"></v-divider>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <HabitosComponente
                ref="Fuma"
                labelCheck = "Fuma"
                v-model="antecedentes.fuma"
                ></HabitosComponente>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <HabitosComponente
                ref="Bebe"
                labelCheck = "Bebe"
                v-model="antecedentes.bebe"
                ></HabitosComponente>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <HabitosComponente
                ref="Droga"
                labelCheck = "Droga"
                v-model="antecedentes.droga"
                ></HabitosComponente>
            </v-col>
            <v-col cols="12">
                <span class="font-weight-bold primary--text">Otras Sustancias</span>
            </v-col>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Energizante"
                    color="success"
                    value="1"
                    hide-details
                    v-model="otrasSustancias.energizante"
                ></v-checkbox>
            </v-col>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Cafeina"
                    color="success"
                    value="1"
                    hide-details
                    v-model="otrasSustancias.cafeina"
                ></v-checkbox>
            </v-col>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Farmacos"
                    color="success"
                    value="1"
                    hide-details
                    v-model="otrasSustancias.farmacos"
                ></v-checkbox>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-text-field
                    label="Otra"
                    placeholder="Otra"
                    v-model="otrasSustancias.otra"
                    autocomplete="off"
                    @keypress ="tool.validaTexto"
                    :maxlength="tool.getLongitudTexto()"
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <span class="font-weight-bold primary--text pt-0 pb-0">Actividad Física</span>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Rara vez"
                    color="success"
                    value="1"
                    hide-details
                    v-model="actividadFisica.raraVez"
                ></v-checkbox>
            </v-col>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Frecuente"
                    color="success"
                    value="1"
                    hide-details
                    v-model="actividadFisica.frecuente"
                ></v-checkbox>
            </v-col>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Nunca"
                    color="success"
                    value="1"
                    hide-details
                    v-model="actividadFisica.nunca"
                ></v-checkbox>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
import HabitosComponente from './HabitosComponent.vue'
import { Tools } from '../../plugins/tools'
const ToolsAux = new Tools()
export default {
  components: {
    HabitosComponente
  },
  data () {
    return {
      antecedentes: this.value,
      otrasSustancias: {},
      actividadFisica: {},
      valid: true,
      tool: ToolsAux
    }
  },
  props: [
    'value'
  ],
  watch: {
    value (val) {
      this.antecedentes = val
    }
  },
  computed: {
    internalValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    validacion () {
      if (this.$refs.form.validate()) {
        this.$refs.Fuma.pasaValor()
        this.$refs.Bebe.pasaValor()
        this.$refs.Droga.pasaValor()
        if (Object.entries(this.otrasSustancias).length > 0) {
          this.antecedentes.otrasSustancias = this.otrasSustancias
        }
        if (Object.entries(this.actividadFisica).length > 0) {
          this.antecedentes.actividadFisica = this.actividadFisica
        }
        this.$emit('actualiza')
        this.internalValue = this.antecedentes
      }
    }
  }
}
</script>