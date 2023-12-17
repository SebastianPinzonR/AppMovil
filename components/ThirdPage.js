import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import CustomButton2 from './custombuttons2/CustomButton2'
const ThirdPage = () => {
  return (
    <View style={{paddingTop: 30,}}>
        <Text
        style={{
            paddingStart:50,
            paddingTop: 30,            
            backgroundColor:'#040325',
            width:'%100',
            height:200,            
            borderBottomRightRadius:Dimensions.get('window').width/100*42,
            borderBottomLeftRadius:Dimensions.get('window').width/100*42,
            color:'white'
        }}>
            Bob Henderson
        </Text>
        <View >
          <CustomButton2 text="John Doe"  texts="2434 5th, Santa monica, Ca,90215"/>
          <CustomButton2 text="Arnold Doe" 
          texts="2434 5th, Santa monica, Ca,90215"/>
          <CustomButton2 text="Monica Doe" 
          texts="2434 5th, Santa monica, Ca,90215"/>
          <CustomButton2 text="John Doe"  texts="2434 5th, Santa monica, Ca,90215"/>
          <CustomButton2 text="Arnold Doe" 
          texts="2434 5th, Santa monica, Ca,90215"/>
          <CustomButton2 text="Monica Doe" 
          texts="2434 5th, Santa monica, Ca,90215"/>
          <CustomButton2 text="John Doe"  texts="2434 5th, Santa monica, Ca,90215"/>
          
          
        </View>
    </View>
  )
}

export default ThirdPage