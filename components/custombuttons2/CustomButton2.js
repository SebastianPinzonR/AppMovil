import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton2 = ({onPress, text, texts,type="PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={{}}>{text}</Text>
      <Text style={{}}>{texts}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container:{      
      
    width: '90%',
    padding: 7,
    marginVertical:5,
    alignItems:'flex-start',
    borderRadius:5,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#FFF7F2'
    },
    
    text:{
        color: 'black'
    },
    texts:{
        color:'#6C6D84',
        
    }
})
export default CustomButton2