import React from 'react'
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native'

const PopularCard = ({item, onPress}) => {
  return (
    <View style={styles.Card}>
      <View style={styles.imgContainer}>
      <Image 
        style={styles.img} 
        source={{uri: item.image_url}}
      />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.title}</Text>
        <TouchableOpacity style={styles.button} onPress={()=> onPress(item.recipe_id)}>
          <Text style={styles.link}>Recipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Card: {
    backgroundColor: `rgba(255, 255, 255, 0.95)`,
    height: 120,
    width: 220,
    flex:1,
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 0,
    marginRight: 20,
    borderRadius: 10
  },
  imgContainer: {
    paddingLeft: 15,
    justifyContent: "center",
  },
  img: {
    width: 80,
    height: 80
  },
  textContainer: {
    flex:2,
    justifyContent: "center",
    padding: 10,
  },
  itemName: {
    fontSize:12,
    paddingBottom: 5
  },
  button: {
    borderTopColor: 'tomato',
    borderTopWidth: 2,
    paddingTop: 5
  },
  link: {
    fontSize: 10,
    fontStyle: 'italic'
  }
})

export default PopularCard