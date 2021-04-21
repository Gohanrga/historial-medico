const LONGITUD_TEXTO = 50
const LONGITUD_NUMERICO = 15
const LONGITUD_TEXTAREA = 300
export class Tools {
  getLongitudTexto () {
    return LONGITUD_TEXTO
  }

  getLongitudNumerico () {
    return LONGITUD_NUMERICO
  }

  getLongitudTextArea () {
    return LONGITUD_TEXTAREA
  }

  validaNumericos (evt) {
    const code = (evt.which) ? evt.which : evt.keyCode
    if (code === 8) { // backspace.
      return true
    } else if (code >= 48 && code <= 57) { // is a number.
      return true
    } else { // other keys.
      evt.preventDefault()
    }
  }

  validaTexto (evt) {
    const key = evt.which ? evt.which : evt.keyCode
    const tecla = String.fromCharCode(key).toLowerCase()
    const letras = ' áéíóúabcdefghijklmnñopqrstuvwxyz'
    const especiales = [8, 37, 39, 46]
    let teclaEspecial = false
    for (var i in especiales) {
      if (key === especiales[i]) {
        teclaEspecial = true
        break
      }
    }

    if (letras.indexOf(tecla) === -1 && !teclaEspecial) {
      evt.preventDefault()
    }
  }
}