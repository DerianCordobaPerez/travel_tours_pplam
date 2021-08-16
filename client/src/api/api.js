import axios from 'axios'
import {SERVER, API} from '~/constants/index'

class Api {
  /**
   * Api Construtor
   */
  constructor() {
    this.api = axios.create({
      baseURL: `${SERVER}${API}`,
    })
  }

  /**
   * Devuelve la data sobre la llamada a la api
   *
   * @param {*} request
   * @returns
   */
  async apiCall(request) {
    try {
      return (await request()).data
    } catch (e) {
      console.log(e)
      return e.response.data
    }
  }

  /**
   * Peticion get a la api proporcionada
   *
   * @param {String} route ruta a la que realizar la peticion
   * @returns
   */
  async get(route) {
    return await this.apiCall(() => this.api.get(`${route}`))
  }

  /**
   * Peticion post a la api proporcionada
   *
   * @param {String} route ruta a la que realizar la peticion
   * @param {*} data datos a mandar
   * @returns
   */
  async post(route, data) {
    return await this.apiCall(() => this.api.post(`${route}`, data))
  }

  /**
   * Peticion put a la api proporcionada
   *
   * @param {String} route ruta al que realizar la peticion
   * @param {*} data datos a mandar
   * @returns
   */
  async put(route, data) {
    return await this.apiCall(() => this.api.put(`${route}`, data))
  }

  /**
   * Peticion delete a la api proporcionada
   *
   * @param {Stirng} route ruta a la que realizar la peticion
   * @param {*} data datos con lo que realizar la accion
   * @returns
   */
  async delete(route, data = null) {
    return await this.apiCall(() => this.api.delete(`${route}`, data))
  }
}

export default new api()
