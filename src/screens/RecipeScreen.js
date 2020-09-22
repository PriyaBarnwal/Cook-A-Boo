import React, {useState, useEffect, useRef} from 'react'
import { View, Text, StyleSheet, FlatList,TouchableOpacity,  ImageBackground, Image, ActivityIndicator, ScrollView, Animated} from 'react-native'
import * as Animatable from 'react-native-animatable'
import axios from 'axios'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import MetaInfo from '../component/MetaInfo'
import RecipeTab from '../component/RecipeTab'
const bgImg= require('../assets/wall2.jpg')

const RecipeScreen = ({navigation, route}) => {
  let [loading, setLoading] = useState(true)
  let [recipe, setRecipe] = useState([])
  let [error, setError] = useState('')
  let [like, setLike] = useState(false)

  useEffect(()=> {
    let term = route.params.recipeId.toLowerCase()
    const query = `https://forkify-api.herokuapp.com/api/get?rId=${term}`
    axios.get(query)
      .then(res=> {
        setRecipe(res.data.recipe)
        setError('')
        setLoading(false)
      })
      .catch(({response})=> {
        setLoading(false)
        if(response.status === 400 && response.data.error.startsWith(`Cannot find the recipe with this id`))
          setError(`Couldn't find recipe with that name.`)
        else
          console.log(err)
      })
  }, [])


  function liked (){
    setLike(!like)
  }

  return (
    <>
      <View style={{flex: 1}}>
        <View style={styles.bgContainer}>
          <Image source={bgImg} style={styles.bg}/>
        </View>
          {loading 
          ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#fff" />
            </View>
          ) 
          :(
            error 
            ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Animatable.Image 
                  animation="slideInDown" 
                  duration={1000}
                  useNativeDriver 
                  source={errorImg} 
                  style={styles.errorImg}
                />
                <Animatable.Text 
                  animation="pulse" 
                  easing="ease-in" 
                  iterationCount="infinite" 
                  style={styles.errorText}>
                  OOPS! {error}
                </Animatable.Text>
              </View>
            :<ScrollView style={{flex: 1}} >
              <View>
                <ImageBackground source={{uri: recipe.image_url}} style={{height:300}}>
                <TouchableOpacity onPress={()=> navigation.pop()}  style={{ 
                  height: 35, width: 35, position: "absolute",
                  backgroundColor: 'black',
                    top: 10,
                        left: 10,
                        opacity: 0.4}}>
                  <Ionicon
                    name="chevron-back" color='white' size={35} 
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={liked}  style={{ 
                  height: 35, width: 35, position: "absolute",
                    top: 10,
                        right: 10,
                        opacity: 0.8}}>
                  <MaterialCommunityIcon
                    name="heart" color={like == true ? 'red': 'grey'} size={35} 
                  />
                </TouchableOpacity>
                </ImageBackground>
              </View>
              <MetaInfo recipe={recipe} />
              <View style={{marginHorizontal: 10, marginTop: 5, padding: 10, backgroundColor: `rgba(0,0,0,0.7)`, alignItems: 'center', justifyContent: 'space-evenly', borderRadius: 15}}>
                <MaterialIcon name="local-dining" color="#00CED1" size={25}/>
                <Text style={styles.summaryText}>Taco meat and cheese stuffed quesadillas made pizza style topped with salsa and even more melted cheese!</Text>
              </View>
              <View ><RecipeTab recipe={recipe} /></View>
            </ScrollView>
          )}
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
  summaryText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 15
  },
  loadingContainer: {justifyContent: 'center', height: '100%'},
  errorImg: {height: 150, width: 270},
  errorText: {color: 'yellow', fontSize: 15, fontStyle:'italic'},
  button: {marginTop: 20, borderColor: 'pink', borderWidth: 2, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 50}
})

export default RecipeScreen