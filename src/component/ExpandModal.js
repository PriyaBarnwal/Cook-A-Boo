import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, Animated} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ExpandModal = () => {
  let [y_translate, setYTranslate] = useState(new Animated.Value(0))
  let [expanded, setExpanded] = useState(false)

  let menuMove = y_translate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -300],
    extrapolate: 'clamp'
  })

  let openMenu =()=> {
    setExpanded(true)
    y_translate.setValue(0)
    Animated.spring(
      y_translate,
      {
        toValue: 1,
        friction: 5,
        useNativeDriver: true
      }
    ).start()
  }

  let hideMenu = () => {
    setExpanded(false)
    y_translate.setValue(1)
    Animated.spring(
      y_translate,
      {
        toValue: 0,
        friction: 5,
        useNativeDriver: true
      }
    ).start()
  }

  return (
    <View style={{flex:1}}>
       <Animated.View 
          style={[ 
            styles.footer_menu,
            {
              transform: [
                {
                  translateY: menuMove
                }
              ]
            }
          ]}
        >
          {
            !expanded &&
            <View style={{}}>
              <TouchableOpacity onPress={openMenu}>
                <Icon name="ellipsis-h" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          } 
          
          {
            expanded &&
              <TouchableOpacity 
                onPress={hideMenu} >
                  <Text>Done</Text>
            </TouchableOpacity>
          }
        </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer_menu: {
    position: 'absolute',
    width: '100%',
    height: 350, 
    bottom: -320, 
    backgroundColor: '#ccc',
    alignItems: 'center'
  }
})


export default ExpandModal