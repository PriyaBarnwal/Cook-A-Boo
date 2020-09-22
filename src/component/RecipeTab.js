import React from 'react'
import { View, Text, FlatList, Dimensions} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialTopTabNavigator()
 
let precipe

const IngredientsScreen =() =>{
  return (
    <FlatList
      style={{flex: 1, backgroundColor: `rgba(0,0,0,0.9)`}}
      data={precipe.ingredients}
      renderItem={({ item }) => (
        <View style={{flexDirection: 'row', padding: 10, borderBottomColor: 'grey', borderBottomWidth: 1, alignItems: 'center'}}>
        <MaterialCommunityIcons name="check" color="#00CED1" size={15}/>
        <Text style={{color: 'white', marginLeft: 10}}>{item}</Text>
        </View>
      )}
      keyExtractor={({index}) => index}
    />
  )
}

const DirectionScreen =() =>{
  let steps=[
    "Brown the meat in a pan over medium heat, drain the excess grease, mix in seasoning and water and simmer until most of the liquid is gone, about 10 minutes.",
    "Sprinkle 1 cup of the cheese evenly over two tortillas followed by the meat and the 1/4 cup of the salsa.",
    "Spread the refried beans over the remaining two tortillas and place them on top of the meat covered ones with the bean sides down.",
    "Place one of the taco quesadillas in a large pan and grill it over medium heat until the cheese has melted and the tortillas are lightly golden brown, about 2-4 minutes per side.",
    "Place the taco quesadilla on a large baking sheet and repeat for the remaining taco quesadilla",
    "Spread the remaining salsa over the tops of the taco quesadillas, sprinkle on the cheese, black olives and green onions.",
    "Broil in a preheated oven until the cheese has melted, about 2 minutes. (Keep an eye on them so they do not burn!)"
  ]
  return <FlatList
  style={{flex: 1, backgroundColor: `rgba(0,0,0,0.9)`}}
  data={steps}
  renderItem={({ item, index }) => (
    <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
    <Text style={{color: 'yellow', width: 60}}> Step {index+1} </Text>
    <View style={{flex:1, borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 5}}><Text style={{color: 'white'}}>{item}</Text></View>
    </View>
  )}
  keyExtractor={({index}) => index}
/>
}

const RecipeTab =({recipe}) => {
  precipe = recipe 
  return(
    <View style={{flex:1}}>
    <Tab.Navigator
      initialLayout={{ width: Dimensions.get('window').width }}
      style={{borderTopLeftRadius: 20, borderTopRightRadius: 20, margin:5}}
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        showIcon: true,
        inactiveTintColor: '#fff',
        activeTintColor: '#00CED1',
        style: { backgroundColor: '#002223' },
      }}
    >
      <Tab.Screen name="Ingredients" component={IngredientsScreen} 
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name='playlist-check' color={color} size={26} />
          )
        }}
      />
      <Tab.Screen name="Directions" component={DirectionScreen} 
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name='chef-hat' color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
    </View>
  )
}

export default RecipeTab