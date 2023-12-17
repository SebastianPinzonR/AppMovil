import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './signinscreens/SignInScreen';
import SignUpScreen from './signupscreens/SignUpScreen';
import FirstPage from './firstpages/FirstPage';
import Tabs from './Tabs';


const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='SignIn' component={SignInScreen}/>
      <Stack.Screen name='SignUp' component={SignUpScreen}/>
      <Stack.Screen name='Home' component={Tabs}/>
    </Stack.Navigator>
  )
}

export default Stacks