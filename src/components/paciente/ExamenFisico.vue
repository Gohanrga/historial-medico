<template>
    <v-form
        ref="form"
        v-model="valid"
    >
        <v-row >
            <v-col cols="12">
                <span class="font-weight-bold primary--text">EXAMEN FISICO GENERAL</span>
                <v-divider class="primary"></v-divider>
            </v-col>
        </v-row>
        <!-- DAtos paciente -->
        <v-row align="center" justify="center" >
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-text-field
                    label="Actitud"
                    placeholder="Actitud"
                    v-model="examenFisico.actitud"
                    autocomplete="off"
                    :maxlength="tool.getLongitudTexto()"
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-text-field
                    label="Facies"
                    placeholder="Facies"
                    v-model="examenFisico.facies"
                    autocomplete="off"
                    :maxlength="tool.getLongitudTexto()"
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <span class="font-weight-bold primary--text">Biotipo</span>
            </v-col>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Normalineo"
                    color="success"
                    value="1"
                    hide-details
                    v-model="examenFisico.normalineo"
                ></v-checkbox>
            </v-col>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Longilineo"
                    color="success"
                    value="1"
                    hide-details
                    v-model="examenFisico.longineo"
                ></v-checkbox>
            </v-col>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Brevilineo"
                    color="success"
                    value="1"
                    hide-details
                    v-model="examenFisico.brevilineo"
                ></v-checkbox>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-text-field
                    label="Lenguaje"
                    placeholder="Lenguaje"
                    v-model="examenFisico.lenguaje"
                    autocomplete="off"
                    :maxlength="tool.getLongitudTexto()"
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-text-field
                    label="Conciencia"
                    placeholder="Conciencia"
                    v-model="examenFisico.conciencia"
                    autocomplete="off"
                    :maxlength="tool.getLongitudTexto()"
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-text-field
                    label="Memoria"
                    placeholder="Memoria"
                    v-model="examenFisico.memoria"
                    autocomplete="off"
                    :maxlength="tool.getLongitudTexto()"
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-text-field
                    label="Orientacion"
                    placeholder="Orientacion"
                    v-model="examenFisico.orientacion"
                    autocomplete="off"
                    :maxlength="tool.getLongitudTexto()"
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-text-field
                    label="Estado Nutricional"
                    placeholder="Estado Nutricional"
                    v-model="examenFisico.estadoNutricional"
                    autocomplete="off"
                    :maxlength="tool.getLongitudTexto()"
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pt-0 pb-0">
                <v-text-field
                    label="Edad Aparente"
                    placeholder="Edad Aparente"
                    v-model="examenFisico.edad"
                    autocomplete="off"
                    :maxlength="tool.getLongitudTexto()"
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <span class="font-weight-bold primary--text">Examen de Piel</span>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="8" lg="8" class="pb-0">
                <v-textarea
                    label="Alergias"
                    rows="2"
                    outlined
                    placeholder="Alergias"
                    v-model="examenFisico.alergiasPiel"
                ></v-textarea>
            </v-col>
            <v-col cols="12">
                <span class="font-weight-bold primary--text">Examen Físico Segmentario</span>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="Cabeza"
                    rows="2"
                    outlined
                    placeholder="Cabeza"
                    v-model="examenFisico.cabeza"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="Cuello"
                    rows="2"
                    outlined
                    placeholder="Cuello"
                    v-model="examenFisico.cuello"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="Tórax"
                    rows="2"
                    outlined
                    placeholder="Tórax"
                    v-model="examenFisico.torax"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="Cardiovascular"
                    rows="2"
                    outlined
                    placeholder="Cardiovascular"
                    v-model="examenFisico.cardiovascular"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="Abdomen"
                    rows="2"
                    outlined
                    placeholder="Abdomen"
                    v-model="examenFisico.abdomen"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="Genitounitario"
                    rows="2"
                    outlined
                    placeholder="Genitounitario"
                    v-model="examenFisico.genitourinario"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="Extremidades"
                    rows="2"
                    outlined
                    placeholder="Extremidades"
                    v-model="examenFisico.extremidades"
                ></v-textarea>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
import { Tools } from '../../plugins/tools'
const ToolsAux = new Tools()
export default {
  data () {
    return {
      examenFisico: this.value,
      valid: true,
      tool: ToolsAux
    }
  },
  props: [
    'value'
  ],
  watch: {
    value (val) {
      this.examenFisico = val
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
        this.$emit('actualiza')
        this.internalValue = this.examenFisico
      }
    }
  }
}
</script>