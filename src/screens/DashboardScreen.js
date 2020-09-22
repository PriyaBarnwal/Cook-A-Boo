import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {ScrollView, Button, Image, View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator()

const SearchScreen = ({navigation}) => {
  return (
    <View>
      <Text>Search For Beer</Text>
    </View>
  )
}

const FavScreen = ({navigation}) => {
  return (
    <View>
  <Text>Favorites</Text>
  </View>)
}

const DashboardScreen = ({navigation}) => {
  return (<>
  <Tab.Navigator
    screenOptions= {({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let icon
        if(route.name==="Search")
          icon = focused 
            ? 'search-plus'
            : 'search'
        else if(route.name=== "Favorites")
          icon = focused ? 'heart' : 'heart-o'
          
        return <Icon name={icon} size={size} color={color} />
      }
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Search" component={SearchScreen}/>
    <Tab.Screen name="Favorites" component={FavScreen} options={{tabBarBadge: 4}}/>
  </Tab.Navigator>
  </>);
}

export default DashboardScreen