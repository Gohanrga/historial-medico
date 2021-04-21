<template>
    <v-form
        ref="form"
        v-model="valid"
    >
        <v-row >
            <v-col cols="12">
                <span class="font-weight-bold primary--text">ANTECEDENTES FAMILIARES</span>
                <v-divider class="primary"></v-divider>
            </v-col>
        </v-row>
        <v-row align="center" justify="center" >
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="Padres"
                    rows="2"
                    outlined
                    placeholder="Padres"
                    v-model="antecedentesFamiliares.padres"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="Abuelos"
                    rows="2"
                    outlined
                    placeholder="Abuelos"
                    v-model="antecedentesFamiliares.abuelos"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="Hijos"
                    rows="2"
                    outlined
                    placeholder="Hijos"
                    v-model="antecedentesFamiliares.hijos"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="Espos@"
                    rows="2"
                    outlined
                    placeholder="Espos@"
                    v-model="antecedentesFamiliares.esposo"
                ></v-textarea>
            </v-col>
            <v-col cols="11" xs="11" sm="11" md="6" lg="6" class="pb-0">
                <v-textarea
                    label="Pareja"
                    rows="2"
                    outlined
                    placeholder="Pareja"
                    v-model="antecedentesFamiliares.pareja"
                ></v-textarea>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
export default {
  data () {
    return {
      antecedentesFamiliares: this.value,
      valid: true
    }
  },
  props: [
    'value'
  ],
  watch: {
    value (val) {
      this.antecedentesFamiliares = val
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
        this.internalValue = this.antecedentesFamiliares
      }
    }
  }
}
</script>