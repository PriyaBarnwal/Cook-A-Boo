import React, {useState, useEffect, useRef} from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Animated} from 'react-native'
import * as Animatable from 'react-native-animatable'
import CardItem from '../component/CardItem'
import axios from 'axios'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'

const errorImg= require('../assets/404.png')

const ListScreen = ({navigation, route}) => {
  let [loading, setLoading] = useState(true)
  let [data, setData] = useState([])
  let [error, setError] = useState('')
  let scale = useState(new Animated.Value(1))[0]
  let errorButton = useRef(null)
  
  function handlePressIn() {
    Animated.spring(scale, {
      toValue: 1.5,
      useNativeDriver: false
    }).start()

    errorButton.current.setNativeProps({
      style: {backgroundColor: 'black'}
    })
  }

  function handlePressOut() {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: false
    }).start()

    errorButton.current.setNativeProps({
      style: {backgroundColor: '#002223'}
    })
  }

  useEffect(()=> {
    let term = route.params.searchTerm.toLowerCase()
    const query = `https://forkify-api.herokuapp.com/api/search?q=${term}`
    axios.get(query)
      .then(res=> {
        setData(res.data.recipes)
        setError('')
        setLoading(false)
      })
      .catch(({response})=> {
        setLoading(false)
        if(response.status === 400 && response.data.error.startsWith(`Couldn't find recipe with that name`))
          setError(`Couldn't find recipe with that name.`)
        else
          console.log(err)
      })
  }, [route.params.searchTerm])


  let renderItem = ({ item, index }) => (
    <CardItem item={item} index={index} onPress={()=>navigation.navigate('recipe', {
      recipeId: item.recipe_id
    })}/>
  )

  return (
    <>
      <View style={{flex: 1}}>
      <View style={styles.bgContainer}/>
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
                <TouchableWithoutFeedback 
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                  onPress={()=>navigation.pop()}
                >
                  <Animated.View ref={errorButton} style={{...styles.button,transform: [{ scale}]}}>
                    <Text style={{color: 'pink', fontSize: 15}}>Go Back</Text>
                  </Animated.View>
                </TouchableWithoutFeedback>
              </View>
            :<FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.recipe_id}
            />
          )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: '#002223',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  },
  loadingContainer: {justifyContent: 'center', height: '100%'},
  errorImg: {height: 150, width: 270},
  errorText: {color: 'yellow', fontSize: 15, fontStyle:'italic'},
  button: {marginTop: 20, borderColor: 'pink', borderWidth: 2, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 50}
})

export default ListScreen