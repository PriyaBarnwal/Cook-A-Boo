/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react'
import {StatusBar, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeScreen from './src/screens/HomeScreen'
import DashboardScreen from './src/screens/DashboardScreen'
import TrendingScreen from './src/screens/TrendingScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import AddRecipeScreen from './src/screens/AddRecipeScreen'

const Tab = createMaterialBottomTabNavigator()

const App: () => React$Node = () => {
  return (
    <>
    <View style={{height: 40, backgroundColor:"black"}}>
      <StatusBar backgroundColor="black" barStyle = "light-content"/>
    </View>
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName="Home"
          labeled={false}
          barStyle={{ backgroundColor: 'black' }}
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              tabBarIcon: ({ focused, color }) => (
                <MaterialCommunityIcons name={focused? 'home': 'home-outline'} color={color} size={26} />
              ),
              headerShown: false}}/>
          <Tab.Screen 
            name="Trending" 
            component={TrendingScreen} 
            options={{
              tabBarIcon: ({ focused, color }) => (
                <MaterialCommunityIcons name={focused? 'fire': 'fire'} color={color} size={26} />
              ),
              headerShown: false}}/>
          <Tab.Screen 
            name="Add a Recipe" 
            component={AddRecipeScreen} 
            options={{
              tabBarIcon: ({ focused, color }) => (
                <MaterialCommunityIcons name={'plus-circle'} color={'#00CED1'} size={26} />
              ), headerShown: true}}/>
          <Tab.Screen 
            name="Favorites" 
            component={DashboardScreen} 
            options={{tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons name={focused? 'heart': 'heart-outline'} color={color} size={26} />
            )}}/>
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons name={'account'} color={color} size={26} />
            )}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;
