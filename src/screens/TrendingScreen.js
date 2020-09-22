import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import Swiper2 from '../component/Swiper2'

const bgImg= require('../assets/wall2.jpg')
const TrendingScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <View style={styles.bgContainer}>
        <Image source={bgImg} style={styles.bg}/>
      </View>
      <View style={{alignItems: "center"}}>
        <Text style={styles.caption}>Recipes of the Day</Text>
      </View>
  <Swiper2/>
  </View>)
}

const styles = StyleSheet.create({
  bgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  },
  caption: {
    fontSize: 35,
    fontWeight: '700',
    color: '#fff',
    paddingTop: 50,
    paddingBottom: 30,
    fontFamily: 'Baskerville-Bold',
  },
  bg: {
    flex: 1,
    height: null,
    width: null
  }
})

export default TrendingScreen