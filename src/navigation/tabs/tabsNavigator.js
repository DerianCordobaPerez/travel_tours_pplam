import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {HomeScreen} from '~/screens/index'
import {Ionicons} from '@expo/vector-icons'
import {HOME, PROFILE} from '~/constants/index'
import {ProfileScreen} from '~/screens/user/index'

const tab = createBottomTabNavigator()

export const tabsButtonNavigator = (props) => (
  <tab.Navigator
    initialRouteName={HOME}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, size, color}) => {
        let iconName

        if (route.name === HOME)
          iconName = `ios-home${!focused ? '-outline' : ''}`
        else if (route.name === PROFILE)
          iconName = `ios-person-circle${!focused ? '-outline' : ''}`

        return <Ionicons name={iconName} size={size} color={color} />
      },
    })}
    tabBarOptions={{
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name={HOME} children={() => <HomeScreen {...props} />} />

    <Tab.Screen name={PROFILE} children={() => <ProfileScreen {...props} />} />
  </tab.Navigator>
)
