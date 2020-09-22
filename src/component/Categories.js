import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Categories = ({navigation}) => {
  let categories = [
    {
      id: 0,
      title: 'Pizza',
      img: require('../assets/pizza.jpeg')
    },
    {
      id: 1,
      title: 'Pasta',
      img: require('../assets/pasta.jpg')
    },
    {
      id: 2,
      title: 'Chicken',
      img: require('../assets/chicken.jpg')
    },
    {
      id: 3,
      title: 'Chocolate',
      img: require('../assets/dessert.jpeg')
    }
  ]
  return (
    <View style={styles.popular}>
      <Text style={styles.heading}>CATEGORIES</Text>
      {
        categories.map((category,index) =>{
          return (
            <Animatable.View
              animation="fadeIn"
              duration={1000}
              delay={index ? (index * 1000)/5 : 0}
              useNativeDriver
              key={category.id}
            >
            <TouchableOpacity onPress={()=>navigation.navigate('list', {searchTerm: category.title})} style={styles.categoryContainer}>
              <Text style={styles.category}>{category.title}</Text>
              <Image style={styles.categoryImg} source={category.img}/>
            </TouchableOpacity>
            </Animatable.View>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  popular: {
    flex: 1,
    margin: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
    color: '#fff',
    paddingBottom: 2,
    fontFamily: 'Bodoni 72',
  },
  categoryContainer: {
    flex:1,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    marginVertical: 10,
    justifyContent: 'space-between',
    borderRadius: 10
  },
  category: {
    fontSize: 15,
    alignSelf: "center",
    marginLeft: 30,
    color: '#003747'
  },
  categoryImg: {
    height: 60,
    width:70,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }
})

export default Categories