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
   * @param {*} route ruta a la que realizar la peticion
   * @returns
   */
  async get(route) {
    return await this.apiCall(() => this.api.get(`${route}`))
  }

  /**
   * Peticion post a la api proporcionada
   *
   * @param {*} route ruta a la que realizar la peticion
   * @param {*} data datos a mandar
   * @returns
   */
  async post(route, data) {
    return await this.apiCall(() => this.api.post(`${route}`, data))
  }
}

export default new api()
