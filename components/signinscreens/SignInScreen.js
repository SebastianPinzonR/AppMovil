import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../custominputs/CustomInput'
import CustomButton from '../custombuttons/CustomButton'
import { useNavigation } from '@react-navigation/native'
const SignInScreen = () => {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const onSignInPressed =()=>{
        console.warn("Sign In")
        navigation.navigate('Home');
    }
    const onLostPasswordPressed =()=>{
        console.warn("Lost your password?")
    }
    const onRegisterNowPressed =()=>{
        
        navigation.navigate('SignUp')
    }
  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>¡Hi!</Text>
      <Text style={styles.loginWord}>To Login only type your e-mail and password.</Text>
      <CustomInput
       placeholder="Username"
       value={username}
       setValue={setUsername}/>
      <CustomInput
       placeholder="Password"
       value={password}
       setValue={setPassword}
       secureTextEntry/>
       <View style={styles.oneLine}>
        <Text style={styles.palido}>Remember me</Text>
       <CustomButton text="Lost your password?" onPress={onLostPasswordPressed} type="TERTIARY"/>
       </View>
       <CustomButton text="Sign In" onPress={onSignInPressed} />
       
       <View style={styles.oneLine2}>
        <Text style={styles.palido}>No account?</Text>
       <CustomButton style={styles.registrofinal} text="Register now" onPress={onRegisterNowPressed} type="TERTIARY" />



       </View>
       
      
      
      
      
    </View>
  )
}
const styles= StyleSheet.create({
  root:{        
    padding:46,
    backgroundColor:'#FFF8F3' 
},
greeting:{
    fontSize: 35,
    width:'70%',
    marginTop:100,
    marginBottom:10,     
    
},
lostPasswordStyle:{
    color: 'lightsalmon'
},
registerStyle:{
    color: 'lightsalmon'        
},
loginWord:{
    margintop:10,
    marginBottom:20
},
oneLine:{    
    flexDirection:'row',
    padding:5,
    marginVertical:5,
    alignItems:'center',
    width:'80%',
},
oneLine2:{    
  flexDirection:'row',  
  alignItems:'center',
  width:'45%',
  marginBottom:280
},
palido:{
    color:'#6C6D84'
}

})
export default SignInScreen