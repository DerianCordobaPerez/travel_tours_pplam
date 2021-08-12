import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {Navigator} from './navigator/navigator'

/**
 * @description Devuelve el Navigator principal de la app
 * @param none
 * @returns
 */
export const AppNavigator = () => (
  <NavigationContainer>
    <Navigator />
  </NavigationContainer>
)
