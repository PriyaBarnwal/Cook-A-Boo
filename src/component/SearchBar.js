import React, {useRef} from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const SearchBar =(props) => {
  const inputEl = useRef(null)
  focusedInput = () => { 
    inputEl.current.setNativeProps({
      style: { 
        backgroundColor: '#000',
        borderColor: '#ADFF2F',
        borderWidth: 1,
        height: 60
      }
    }) 
  }
  blurredInput = () => { 
    inputEl.current.setNativeProps({
      style: { 
        backgroundColor: `rgba(49,79,79, 0.6)`,
        borderWidth: 0,
        height: 50 
      }
    }) 
  }

  return (
    <View 
    ref={inputEl} style={styles.searchSection}>
      <Icon style={styles.searchIcon} name="search" size={20} color="#fff"/>
      <TextInput
        style={styles.input}
        placeholder="search for recipes"
        placeholderTextColor="grey"
        onChangeText={props.changeSearchTerm}
        defaultTerm={props.searchTerm}
        returnKeyType="search"
        onFocus={focusedInput}
        onBlur={blurredInput}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `rgba(49,79,79, 0.6)`,
    borderRadius: 100,
    margin: 20,
    padding: 5,
    marginTop: '15%',
    height: 50
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: `rgba(49,79,79, 0)`,
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 15
  },
})

export default SearchBar