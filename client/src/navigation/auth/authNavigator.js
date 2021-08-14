import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {SingInScreen, SingUpScreen,SingUpStepTwoScreen} from '~/screens/index'
import {SIGNIN, SIGNUP,SIGNUP2} from '~/constants/index'

const stack = createStackNavigator()

/**
 * Pila de navegacion para las pantallas de autenticacion
 *
 * @param {*} props
 */
export const authNavigator = (props) => (
  <stack.Navigator initialRouteName={SIGNIN} headerMode="none">
    <stack.Screen name={SIGNIN} children={() => <SingInScreen {...props} />} />

    <stack.Screen name={SIGNUP} children={() => <SingUpScreen {...props} />} />

    <stack.Screen name={SIGNUP2} children={() => <SingUpStepTwoScreen {...props} />} />
  </stack.Navigator>
)
