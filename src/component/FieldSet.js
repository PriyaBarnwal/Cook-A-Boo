import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const FieldSet =(props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{props.label}</Text>
      </View>
      <View style={styles.mainBody}>
        {props.children}
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    borderWidth: 1.1,
    borderRadius: 10,
    borderColor: '#00CED1',
    margin: 10,
    marginTop: 30,
  },
  header: {
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#00CED1',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  label: {
    padding: 5,
    paddingLeft: 15,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  mainBody: {
    width: '100%',
    overflow: 'hidden',
    paddingHorizontal: 5,
    paddingVertical: 10
  }
});

export default FieldSet