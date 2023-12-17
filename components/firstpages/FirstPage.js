import { View, Text, StyleSheet, colors, Dimensions } from 'react-native'
import React from 'react'
import CustomButton from '../custombuttons/CustomButton'
import CustomButton2 from '../custombuttons2/CustomButton2'
import CustomInput from '../custominputs/CustomInput'
const FirstPage = () => {
  
  return (    
    <View style={{paddingTop: 30, }}>
      <View>
      <View
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
           <Text style={{color:'white'}}>Sebastian Pinzon</Text> 
           <Text style={{color:'white', marginTop:60, marginLeft:100}}>Apr 10, 2023 at 11:34 AM</Text> 
        </View>
        
      </View>
        
        <View style={styles.oneline}>
        <CustomButton text="Receiving" type='QUATERNARY'/>
        <CustomButton text="Search Order" type='QUATERNARY'/>
        </View>
        <View style={styles.oneline}>
        <CustomButton text="Processing" type='QUATERNARY'/>
        <CustomButton text="QR" type='QUATERNARY'/>
        </View>
        <View style={styles.oneline2}>
          <Text style={{marginLeft:20,marginBottom:10, marginTop:25, marginRight:35}}>Latest Proyects</Text>
          {/* <CustomInput type='SECONDARY'/> */}
        </View>
        <View style={styles.oneline3}>
          <CustomButton2 text="John Doe"  texts="2434 5th, Santa monica, Ca,90215"/>
          <CustomButton2 text="Arnold Doe" 
          texts="2434 5th, Santa monica, Ca,90215"/>
          <CustomButton2 text="Monica Doe" 
          texts="2434 5th, Santa monica, Ca,90215"/>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
  root:{},
  oneline:{
  flexDirection:'row',  
  alignItems:'center',
  width:'38%',
  marginBottom:5,
  marginTop:15,
  marginLeft:30,
  marginRight:30,
  justifyContent:'space-between',
  
  },
  oneline2:{
    flexDirection:'row',
    alignItems:'center',
  },
  oneline3:{
    
  }
})
export default FirstPage