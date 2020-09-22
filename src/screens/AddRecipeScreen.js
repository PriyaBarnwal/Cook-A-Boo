import React, {useState} from 'react'
import {Text, View, StyleSheet, Button, Image, TextInput} from 'react-native'
import FieldSet from '../component/FieldSet'
import * as yup from 'yup'
import { Formik } from 'formik'

const AddRecipeScreen = ({navigation}) => {
  let validationSchema = yup.object().shape({
    Title: yup
      .string()
      .required(),
    Summary: yup
      .string()
      .min(20)
      .max(120)
      .required(),
    Servings: yup.number().min(1).required(),
    CookingTime: yup.string().required(),
  })
  return (
    <View style={{flex:1, backgroundColor: "rgba(0,0,0,0.95)"}}>
      <Formik 
        initialValues={{
          Title: '',
          Summary: '',
          Servings: 1,
          CookingTime: '',
          ingredients: [],
          directions: [],
          tags: []
        }}
        validationSchema={validationSchema}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <>
            <FieldSet label="Recipe Details">
              <TextInput
                value={values.Title}
                onChangeText={handleChange('Title')}
                onBlur={() => setFieldTouched('Title')}
                style={styles.input}
                placeholder={'Name Your Recipe'}
              />
              {touched.Title && errors.Title &&
                <Text style={styles.error}>{errors.Title}</Text>
              }
              <TextInput
                value={values.Summary}
                onChangeText={handleChange('Summary')}
                onBlur={() => setFieldTouched('Summary')}
                style={styles.input}
                multiline = {true}
                numberOfLines = {10}
                placeholder={'Describe Your Recipe'}
              />
              {touched.Summary && errors.Summary &&
                <Text style={styles.error}>{errors.Summary}</Text>
              }
              {/* <TextInput
                value={values.Servings}
                onChangeText={handleChange('Servings')}
                onBlur={() => setFieldTouched('Servings')}
                style={styles.input}
                placeholder={'Number of Servings'}
              />
              {touched.Servings && errors.Servings &&
                <Text style={styles.error}>{errors.Servings}</Text>
              } */}
              <TextInput
                value={values.CookingTime}
                onChangeText={handleChange('CookingTime')}
                onBlur={() => setFieldTouched('CookingTime')}
                style={styles.input}
                placeholder={'Cooking Time'}
              />
              {touched.CookingTime && errors.CookingTime &&
                <Text style={styles.error}>{errors.CookingTime}</Text>
              }
            </FieldSet>
            
            <Button
              title='Sign In'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  input : {
    minHeight: 40,
    maxHeight: 150,
    backgroundColor: '#fff',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
    color: 'black',
    fontSize: 18
  },
  error: { 
    fontSize: 12, 
    color: 'red',
    marginLeft: 15 
  }
})

export default AddRecipeScreen