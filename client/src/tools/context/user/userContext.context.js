import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {USER_TOKEN} from '~/constants/index'

// Creacion y exportacion del contexto del usuario
export const UserContext = React.createContext()

/**
 * Contexto sobre la sesion del usuario
 * 
 * @param {*} props
*/
export const UserProvider = ({children}) => {

  // token que usaremos para guardar el inicio de sesion del usuario
  const [token, setToken] = React.useState(null)

  React.useEffect(() => getTokenizador())

  // Obtenemos el token almacenado del usuario
  const getTokenizador = async () =>
    setToken(await AsyncStorage.getItem(USER_TOKEN))

  // Establece el token del usuario
  const setTokenizador = async (token) =>
    setToken(await AsyncStorage.setItem(USER_TOKEN, token))

  // Elimina el token almacenado
  const removeTokenizador = async () => {
    await AsyncStorage.removeItem(USER_TOKEN)
    setToken(null)
  }

  return (
    <UserContext.Provider value={{token, setTokenizador, removeTokenizador}}>
      {children}
    </UserContext.Provider>
  )
}
