import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const MetaInfo =({recipe}) => {
  return(
    <View style={{height: '8%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, marginHorizontal: 10, marginTop: -15, backgroundColor: `rgba(0,0,0,0.7)`, alignItems: 'center', justifyContent: 'space-evenly'}}>
      <Text style={styles.title}>{recipe.title}</Text>
      <View style={{flex:1, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <View style={styles.grpIcon}><Icon name="time-outline" size={25} color="tomato"/>
        <Text style={styles.text}>15 min</Text></View>
        <View style={styles.grpIcon}><Icon name="star" size={22} color="yellow"/>
        <Text style={styles.text}>4.5</Text></View>
        <View style={styles.grpIcon}><Icon name="people" size={25} color="tomato"/>
        <Text style={styles.text}>2-3</Text></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: 'white', fontWeight: 'bold', fontSize: 24,textShadowColor: 'blue',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  text: {
    color: 'white',
    marginLeft: 8,
    fontSize: 15
  },
  grpIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default MetaInfo