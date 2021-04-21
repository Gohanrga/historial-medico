<template>
    <v-form
        ref="form"
        v-model="valid"
    >
        <v-row >
            <v-col cols="12">
                <span class="font-weight-bold primary--text">DATOS PACIENTE</span>
                <v-divider class="primary"></v-divider>
            </v-col>
        </v-row>
        <!-- DAtos paciente -->
        <v-row align="center" justify="center">
                <v-col cols="11" xs="11" sm=8 md="4" lg="3">
                    <v-text-field
                        label="Paterno"
                        placeholder="Paterno"
                        v-model="datosPaciente.paterno"
                        :rules="rules.required"
                        autocomplete="off"
                        @keypress ="tool.validaTexto"
                        :maxlength="tool.getLongitudTexto()"
                        counter
                    >
                        <template v-slot:prepend>
                            <span style="color:red">*</span>
                        </template>
                    </v-text-field>
                </v-col>
                <v-col cols="11" xs="11" sm="8" md="4" lg="3">
                    <v-text-field
                        label="Materno"
                        placeholder="Materno"
                        autocomplete="off"
                        v-model="datosPaciente.materno"
                        @keypress ="tool.validaTexto"
                        :maxlength="tool.getLongitudTexto()"
                        counter
                    ></v-text-field>
                </v-col>
                <v-col cols="11" xs="11" sm="8" md="4" lg="3">
                    <v-text-field
                        label="Nombres"
                        placeholder="Nombres"
                        @keypress ="tool.validaTexto"
                        v-model="datosPaciente.nombre"
                        :rules="rules.required"
                        autocomplete="off"
                        :maxlength="tool.getLongitudTexto()"
                        counter
                    >
                        <template v-slot:prepend>
                            <span style="color:red">*</span>
                        </template>
                    </v-text-field>
                </v-col>
                <v-col cols="11" xs="11" sm="8" md="4" lg="3">
                    <v-text-field
                        label="Telefono"
                        placeholder="Telefono"
                        @keypress ="tool.validaNumericos"
                        v-model="datosPaciente.telefono"
                        autocomplete="off"
                        v-on:keypress="tool.validaNumericos"
                        :maxlength="tool.getLongitudNumerico()"
                        counter
                    ></v-text-field>
                </v-col>
                <v-col cols="11" xs="11" sm="8" md="4" lg="3">
                    <v-text-field
                        label="Celular"
                        placeholder="Celular"
                        @keypress ="tool.validaNumericos"
                        v-model="datosPaciente.celular"
                        :rules="rules.required"
                        autocomplete="off"
                        :maxlength="tool.getLongitudNumerico()"
                        counter
                    >
                        <template v-slot:prepend>
                            <span style="color:red">*</span>
                        </template>
                    </v-text-field>
                </v-col>
                <v-col cols="11" xs="11" sm="8" md="4" lg="3">
                    <v-text-field
                        label="Escolaridad"
                        placeholder="Escolaridad"
                        @keypress ="tool.validaTexto"
                        v-model="datosPaciente.escolaridad"
                        :maxlength="tool.getLongitudTexto()"
                        counter
                    ></v-text-field>
                </v-col>
                <v-col cols="11" xs="11" sm="8" md="4" lg="3">
                    <v-select
                    :items="sexo"
                    label="Sexo"
                    v-model="datosPaciente.sexo"
                    :rules="rules.required"
                    >
                        <template v-slot:prepend>
                            <span style="color:red">*</span>
                        </template>
                    </v-select>
                </v-col>
                <v-col cols="11" xs="11" sm="8" md="4" lg="3">
                    <v-menu
                        ref="menu1"
                        v-model="menu1"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                            v-model="datosPaciente.fechaNacimiento"
                            readonly
                            label="Fecha Nacimiento"
                            hint="DD/MM/YYYY"
                            persistent-hint
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            @blur="date = parseDate(datosPaciente.fechaNacimiento)"
                            v-on="on"
                            :rules="rules.required"
                            autocomplete="off"
                            >
                                <template v-slot:prepend>
                                    <span style="color:red">*</span>
                                </template>
                            </v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date"
                            no-title
                            @input="menu1 = false"
                        ></v-date-picker>
                    </v-menu>
                </v-col>
                <v-col cols="11" xs="11" sm="8" md="4" lg="3">
                    <v-text-field
                        label="Fuente"
                        placeholder="Fuente"
                        @keypress ="tool.validaTexto"
                        v-model="datosPaciente.fuente"
                        :maxlength="tool.getLongitudTexto()"
                        counter
                    ></v-text-field>
                </v-col>
                <v-col cols="11" xs="11" sm="8" md="4" lg="3">
                    <v-select
                        :items="estadoCivil"
                        label="Estado Civil"
                        v-model="datosPaciente.estadoCivil"
                        :rules="rules.required"
                    >
                        <template v-slot:prepend>
                            <span style="color:red">*</span>
                        </template>
                    </v-select>
                </v-col>
                <v-col cols="11" xs="11" sm="8" md="4" lg="3">
                    <v-text-field
                        label="Grupo Sanguineo"
                        placeholder="Grupo Sanguineo"
                        v-model="datosPaciente.grupoSanguineo"
                        :maxlength="tool.getLongitudTexto()"
                        counter
                    ></v-text-field>
                </v-col>
        </v-row>
    </v-form>
</template>
<script>
import rules from '../../plugins/rules'
import { Tools } from '../../plugins/tools'
const ToolsAux = new Tools()
export default {
  data () {
    return {
      datosPaciente: this.value,
      sexo: [
        { value: 'M', text: 'Masculino' },
        { value: 'F', text: 'Femenino' }
      ],
      estadoCivil: [
        { value: 'S', text: 'Soltero' },
        { value: 'C', text: 'Casado' },
        { value: 'V', text: 'Viudo' }
      ],
      menu1: false,
      date: '',
      rules: rules.rules,
      valid: true,
      tool: ToolsAux
    }
  },
  props: [
    'value'
  ],
  watch: {
    date (val) {
      this.datosPaciente.fechaNacimiento = this.formatDate(this.date)
    },
    value (val) {
      this.datosPaciente = val
    }
  },
  mounted () {
    // this.$parent.$on("valida",funcion)
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
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [day, month, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    validacion () {
      if (this.$refs.form.validate()) {
        this.$emit('actualiza')
        this.internalValue = this.datosPaciente
      }
    }
  }
}
</script>