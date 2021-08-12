import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {SingInScreen} from '~/screens/index'
import {SIGNIN} from '~/constants/index'

const stack = createStackNavigator()

/**
 * Pila de navegacion para las pantallas de autenticacion
 *
 * @param {*} props
 */
export const authNavigator = (props) => (
  <stack.Navigator initialRouteName={SIGNIN} headerMode="none">
    <stack.Screen name={SIGNIN} children={() => <SingInScreen {...props} />} />
  </stack.Navigator>
)
