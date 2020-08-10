import React from 'react';

import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Subscribe from './src/screens/Subscribe';
import { MaterialIcons } from '@expo/vector-icons';


const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const Home = () => {

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'explore';
          } else if (route.name === 'Subscriptions') {
            iconName = 'subscriptions'
          }
          else if (route.name === 'Notifications') {
            iconName = 'notifications'
          }
          else if (route.name === 'Library') {
            iconName = 'video-library'
          }

          return <MaterialIcons name={iconName} size={20} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="Home" component={Subscribe} />
      <Tabs.Screen name="Explore" component={Subscribe} />
      <Tabs.Screen name="Subscriptions" component={Subscribe} />
      <Tabs.Screen name="Notifications" component={Subscribe} />
      <Tabs.Screen name="Library" component={Subscribe} />
    </Tabs.Navigator>
  )
}
export default () => {
  return (
    <Navigation />

  )
}

export function Navigation() {

  return (

    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="home" component={Home} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}