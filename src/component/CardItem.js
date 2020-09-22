import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Stars from 'react-native-stars'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CardItem = ({item, index, onPress}) => {
  console.log(item)
  return (
    <Animatable.View
              animation="fadeIn"
              duration={1000}
              delay={index ? (index * 1000)/5 : 0}
              useNativeDriver
            >
    <TouchableOpacity onPress={onPress}>
      <View  style={styles.Card}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{uri: item.image_url}}/>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.title}>{item.title}</Text>
        <Stars
          default={2.5}
          disabled={true}
          count={5}
          half={true}
          starSize={50}
          fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
          emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle]}/>}
          halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
        />
      </View>
      </View>
    </TouchableOpacity>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  Card: {
    backgroundColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 5,
    height: 80,
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2
  },
  title: {
    color: '#fff',
    marginBottom: 10
  },
  imgContainer: {
    justifyContent: 'center',
    marginHorizontal: 10
  },
  img: {
    height: 60,
    width:60,
    borderRadius:50,
    borderWidth: 1,
    borderColor: '#fff'
  },
  cardBody: {
    padding: 10,
    flex:1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
})

export default CardItem