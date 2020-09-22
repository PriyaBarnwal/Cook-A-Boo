import React, {useState} from 'react'
import {Button, Image, View, StyleSheet, ScrollView, Keyboard} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchBar from '../component/SearchBar'
import PopularSection from '../component/PopularSection'
import Categories from '../component/Categories'
import RecipeScreen from './RecipeScreen'
import ListScreen from './ListScreen'

const bgImg= require('../assets/wall3.jpg')

let SearchStack = createStackNavigator()

const PopularScreen = ({ navigation }) => {
  let [searchTerm, changeSearchTerm] = useState('')

  let submitTerm =()=> {
    Keyboard.dismiss()
    let term = searchTerm
    
    changeSearchTerm('')

    navigation.navigate('list', {
      searchTerm: term
    })
  }

  return (
    <>
      <View style={{flex: 1}}>
        <View style={styles.bgContainer}>
          <Image source={bgImg} style={styles.bg}/>
        </View>
        <ScrollView style={{flex:1}}>
          <SearchBar 
            searchTerm
            changeSearchTerm={(text) => text && changeSearchTerm(text)}
            onSubmit={submitTerm}
          />
          <PopularSection onPress={(id)=>navigation.navigate('recipe', {
            recipeId: id
          })}/>
          <Categories navigation={navigation}/>
        </ScrollView>
      </View>
    </>
  )
}

const HomeScreen = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1}}>
        <View style={styles.bgContainer}>
          <Image source={bgImg} style={styles.bg}/>
        </View>
        <SearchStack.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: `rgba(0,0,0, 0.9)`
            },
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        >
          <SearchStack.Screen name="popular" component={PopularScreen} options={{headerShown: false}}/>
          <SearchStack.Screen name="list" component={ListScreen} options={({ route }) => ({ title: route.params.searchTerm })}/>
          <SearchStack.Screen name="recipe" component={RecipeScreen} options={{headerShown: false}}/>
        </SearchStack.Navigator>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  bgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  },
  bg: {
    flex: 1,
    height: null,
    width: null
  },
  buttonContainer: {
    borderRadius: 5,
    width: '80%',
    opacity: 0.8,
    left:'10%',
    backgroundColor: '#331919',
    position: 'absolute',
    bottom: '15%'
  }
})

export default HomeScreen