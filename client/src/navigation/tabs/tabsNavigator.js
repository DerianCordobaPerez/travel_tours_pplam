import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'
import {HOME, PROFILE, SETTINGS} from '~/constants/index'
import {HomeScreen, ProfileScreen, SettingsScreen} from '~/screens/index'

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
        else if (route.name === SETTINGS)
          iconName = `settings${!focused ? '-outline' : ''}`
        return <Ionicons name={iconName} size={size} color={color} />
      },
    })}
    tabBarOptions={{
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
    }}
  >
    <tab.Screen name={HOME} children={() => <HomeScreen {...props} />} />

    <tab.Screen name={PROFILE} children={() => <ProfileScreen {...props} />} />

    <tab.Screen name={SETTINGS} children={() => <SettingsScreen {...props} />}/>
  </tab.Navigator>
)
