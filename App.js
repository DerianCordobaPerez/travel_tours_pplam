import React from 'react'
import {UserProvider} from '~/tools/context/user/index'
import {AppNavigator} from '~/navigation/index'

export default function App() {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  )
}
