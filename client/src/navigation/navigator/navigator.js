import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {UserContext} from '~/tools/context/user/index'
import {SPLASH, SIGNIN, TABS} from '~/constants/index'
import {loadingScreen} from '~/screens/partials/index'
import {authNavigator} from '~/navigation/auth/authNavigator'
import {tabsButtonNavigator} from '~/navigation/tabs/tabsNavigator'

const stack = createStackNavigator()

export const Navigator = () => {
  const [loading, setLoading] = React.useState(true)
  const {token} = React.useContext(UserContext)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <stack.Navigator
      initialRouteName={SPLASH}
      headerMode="none"
      screenOptions={{
        animationTypeForReplace: 'push',
      }}
    >
      {loading ? (
        <stack.Screen name={SPLASH} component={loadingScreen} />
      ) : token ? (
        <stack.Screen name={SIGNIN} component={authNavigator} />
      ) : (
        <stack.Screen name={TABS} component={tabsButtonNavigator} />
      )}
    </stack.Navigator>
  )
}
