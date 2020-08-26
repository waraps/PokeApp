import * as React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Home from '../screens/Home'
import CatchThem from '../screens/CatchThem'

const Stack = createStackNavigator()
export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator InitialRouteName={Home}>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='CatchThem' component={CatchThem} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}