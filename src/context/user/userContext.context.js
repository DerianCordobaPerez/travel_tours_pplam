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
export const UserStorage = ({children}) => {

  // token que usaremos para guardar el inicio de sesion del usuario
  const [token, setToken] = React.useState(null)

  React.useEffect(() => getToken())

  // Obtenemos el token almacenado del usuario
  const getToken = async () =>
    setToken(await AsyncStorage.getItem(USER_TOKEN))

  // Establece el token del usuario
  const setToken = async (token) =>
    setToken(await AsyncStorage.setItem(USER_TOKEN, token))

  // Elimina el token almacenado
  const removeToken = async () => {
    await AsyncStorage.removeItem(USER_TOKEN)
    setToken(null)
  }

  return (
    <UserContext.Provider value={{token, getToken, setToken, removeToken}}>
      {children}
    </UserContext.Provider>
  )
}
