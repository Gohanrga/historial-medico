<template>
    <v-row justify="center" >
        <v-col cols="2" xs="2" sm="2" md="2" lg="2" >
            <v-checkbox
                :label="labelCheck"
                color="success"
                value="1"
                v-model="habito.check"
                hide-details
            ></v-checkbox>
        </v-col>
        <v-col cols="9" xs="9" sm="9" md="9" lg="9">
            <v-text-field
                label="Cantidad"
                placeholder="Cantidad"
                v-model="habito.text"
                autocomplete="off"
                :maxlength="tool.getLongitudTexto()"
                counter
            ></v-text-field>
        </v-col>
    </v-row>
</template>
<script>
import { Tools } from '../../plugins/tools'
const ToolsAux = new Tools()
export default {
  data () {
    return {
      habito: this.value,
      tool: ToolsAux
    }
  },
  props: {
    labelCheck: String,
    value: {
      type: Object,
      default: () => ({
        check: 0,
        text: ''
      })
    }
  },
  watch: {
    value (val) {
      this.habito = val
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
    pasaValor () {
      this.internalValue = this.habito
    }
  }
}
</script>