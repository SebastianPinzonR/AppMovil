import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  SafeAreaView, Screen } from 'react-native';

import SignInScreen from './components/signinscreens/SignInScreen';
import SignUpScreen from './components/signupscreens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/Tabs';
import Stacks from './components/Stacks';

const App = () => {
  return (
    <NavigationContainer>
      
         <Stacks/>
         
         
      
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },
})
export default App