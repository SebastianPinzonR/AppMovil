import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../custombuttons/CustomButton'
import CustomInput from '../custominputs/CustomInput'
import { useNavigation } from '@react-navigation/native'
const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail]= useState('');
  const[confirmpassword, setConfirmPassword]=useState('');
  const navigation = useNavigation();

  const onSignInPressed =()=>{
      
      navigation.navigate('SignIn');
  }
  const onLostPasswordPressed =()=>{
      console.warn("Lost your password?")
  }
  const onRegisterNowPressed =()=>{
      console.warn("Register now")
      
  }
  const onSignUpPressed =()=>{
    console.warn("Sign Up")
    
}
  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>Sign up!</Text>
      <CustomInput
       placeholder="Username"
       value={username}
       setValue={setUsername}/>
      <CustomInput
       placeholder="Enter your email"
       value={email}
       setValue={setEmail}
       />
       <CustomInput
       placeholder="Enter your password"
       value={password}
       setValue={setPassword}
       secureTextEntry/>
      <CustomInput
       placeholder="Confirm your password"
       value={confirmpassword}
       setValue={setConfirmPassword}
       secureTextEntry/>
       
       <CustomButton text="Sign Up" onPress={onSignUpPressed} />
       
       <View style={styles.oneLine}>
        <Text style={styles.palido} >Already have an account?</Text>
       <CustomButton text="Sign in." onPress={onSignInPressed} type="TERTIARY" />
       </View>
       
      
      
      
      
    </View>
  )
}
const styles=StyleSheet.create({
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
oneLine:{    
  flexDirection:'row',  
  alignItems:'center',
  justifyContent:'flex-start',
  width:'59%',
  marginBottom:300,
  paddingLeft:0
},
palido:{
  color:'#6C6D84'
}
})
export default SignUpScreen
