import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const CustomInput = ({value, setValue, placeholder,secureTextEntry, type="PRIMARY"}) => {
  return (    
    <View style={[styles.container, styles[`container_${type}`]]}>
      <TextInput value={value} onChangeText={setValue} placeholder={placeholder} style={[styles.input, styles[`container_${type}`]]} secureTextEntry={secureTextEntry}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    width:'100%',
    borderColor: '#FFD9C3',
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:10
  },
  container_SECONDARY:{
    backgroundColor:'#EFEFEF',
    width:'50%',
    borderColor:'white'
  },
  text_SECONDARY:{},
  input:{}
})
export default CustomInput