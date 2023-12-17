import { View, Text, StyleSheet, Pressable,  } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type="PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}
const styles =StyleSheet.create({
    container:{        
        width: '100%',
        padding: 15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
    },
    container_PRIMARY:{
        backgroundColor:'#040325'
    },
    container_QUATERNARY:{
      backgroundColor:'#040325',
      width: '100%',
      padding: 25,
      margin:10,
      
    },
    container_SECONDARY:{
      backgroundColor:'#FFF7F2',
      width: '353',
      height:'10%',
      padding: 25,
      margin:10,
      alignItems:'center',      
      marginLeft:20,
      marginRight:20
    },
   
    text:{
        color: 'white'
    },
    text_SECONDARY:{
      color:'black'
    },
    text_TERTIARY:{

        color:'#FF8A71'
    },
    text_QUATERNARY:{

      color:'white',
      
  },

})
export default CustomButton