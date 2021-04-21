const API_URL = 'https://historial-medico-93d4b-default-rtdb.firebaseio.com/'
export class ApiService {
  /**
   * Metodo de guardado de datos
  */
  async guardaDatos (parametros, tabla) {
    try {
      tabla = tabla + '.json'
      const res = await fetch((API_URL + tabla), {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify(parametros)
      })
      const datoDb = await res.json()
      return datoDb
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Metodo de actualiza los datos
  */
  async actualizaDatos (parametros, tabla, id) {
    try {
      tabla = tabla + ((id !== undefined) ? '/' + id : '') + '.json'
      const res = await fetch((API_URL + tabla), {
        method: 'PUT',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify(parametros)
      })
      const datoDb = await res.json()
      return datoDb
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Metodo para eliminar el registro
   */
  async eliminaDatos (tabla, id) {
    try {
      tabla = tabla + ((id !== undefined) ? '/' + id : '') + '.json'
      const res = await fetch((API_URL + tabla), {
        method: 'DELETE',
        headers: {
          'content-Type': 'application/json'
        }
      })
      const datoDb = await res.json()
      return datoDb
    } catch (error) {
      console.log(error)
    }
  }

  /* Metodo para obtener datos
  */
  async obtieneDatos (tabla, filtro) {
    try {
      tabla = tabla + ((filtro !== undefined) ? '/' + filtro : '') + '.json'
      const res = await fetch((API_URL + tabla), {
        method: 'GET',
        headers: {
          'content-Type': 'application/json'
        }
      })
      const datoDb = await res.json()
      return datoDb
    } catch (error) {
      console.log(error)
    }
  }
}