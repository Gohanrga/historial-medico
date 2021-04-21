<template>
    <v-form
        ref="form"
        v-model="valid"
    >
        <v-row >
            <v-col cols="12">
                <span class="font-weight-bold primary--text">ANTECEDENTES GINECO-OBSTETRICOS</span>
                <v-divider class="primary"></v-divider>
            </v-col>
        </v-row>
        <!-- DAtos paciente -->
        <v-row align="center" justify="center" >
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Gestaciones"
                    color="success"
                    value="1"
                    hide-details
                    v-model="antecedentesGineco.gestaciones"
                ></v-checkbox>
            </v-col>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Partos Naturales"
                    color="success"
                    value="1"
                    hide-details
                    v-model="antecedentesGineco.naturales"
                ></v-checkbox>
            </v-col>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Cesarias"
                    color="success"
                    value="1"
                    hide-details
                    v-model="antecedentesGineco.cesarias"
                ></v-checkbox>
            </v-col>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Aborto"
                    color="success"
                    value="1"
                    hide-details
                    v-model="antecedentesGineco.aborto"
                ></v-checkbox>
            </v-col>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Perdida"
                    color="success"
                    value="1"
                    hide-details
                    v-model="antecedentesGineco.perdida"
                ></v-checkbox>
            </v-col>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Menarca"
                    color="success"
                    value="1"
                    hide-details
                    v-model="antecedentesGineco.menarca"
                ></v-checkbox>
            </v-col>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2" class="pt-0 pb-0">
                <v-checkbox
                    label="Menopausia"
                    color="success"
                    value="1"
                    hide-details
                    v-model="antecedentesGineco.menopausia"
                ></v-checkbox>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="11" lg="11" class="pb-0">
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="FUM"
                    rows="2"
                    outlined
                    placeholder="FUM"
                    v-model="antecedentesGineco.fum"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="FUP"
                    rows="2"
                    outlined
                    placeholder="FUP"
                    v-model="antecedentesGineco.fup"
                ></v-textarea>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
export default {
  data () {
    return {
      antecedentesGineco: this.value,
      valid: true
    }
  },
  props: [
    'value'
  ],
  watch: {
    value (val) {
      this.antecedentesGineco = val
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
        this.internalValue = this.antecedentesGineco
      }
    }
  }
}
</script>