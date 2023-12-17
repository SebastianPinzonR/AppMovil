import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  SafeAreaView } from 'react-native';
import React from 'react';
import FirstPage from './firstpages/FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Feather} from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator()

const Tabs = () =>{
    return(
        <Tab.Navigator 
            barStyle={{ backgroundColor: '#040325',
            paddingBottom: 15,
            height:80, 
            margin:5,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderBottomRightRadius:25,
            borderBottomLeftRadius:25,            
            position: 'absolute',
            overflow: 'hidden', }}
            
            >
          
            <Tab.Screen name={'Home'} component={FirstPage} options={{
              tabBarIcon:({focused}) => <Feather name={'home'} size={25} color={focused ? 'tomato' : 'white'} />
            }}/>
            <Tab.Screen name={'Second'} component={SecondPage} options={{
              tabBarIcon:({focused}) => <Feather name={'heart'} size={25} color={focused ? 'tomato' : 'white'}/>              
            }}/>
            <Tab.Screen name={'Third'} component={ThirdPage} options={{
              tabBarIcon:({focused}) => <Feather name={'clock'} size={25} color={focused ? 'tomato' : 'white'}/>
            }}/>
            <Tab.Screen name={'Fourth'} component={FourthPage} options={{
              tabBarIcon:({focused}) => <Feather name={'settings'} size={25} color={focused ? 'tomato' : 'white'}/>
            }}/>
          
          </Tab.Navigator> 
    )
}
export default Tabs