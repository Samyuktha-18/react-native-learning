import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreen } from 'react-native-screens';
import LoginScreen from './src/screen/LoginScreen';
import SignUpScreen from './src/screen/SignupScreen';
import HomeScreen from './src/screen/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Header from './src/components/Header';
import Dashboard from './src/screen/dashboard/Dashboard';
import StoryView from './src/components/StoryView';
import BottomNavigation from './src/navigator/BottomNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return ( 
    <SafeAreaProvider>
   <StatusBar barStyle={'dark-content'}/>
    <NavigationContainer>
      
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
        
        initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={SignUpScreen}/>
        <Stack.Screen name="Home" component={Dashboard}/>
        <Stack.Screen name="Story" component={StoryView}/>
        <Stack.Screen name="Dashboard" component={BottomNavigation}/>

      </Stack.Navigator>
      

    </NavigationContainer>
  
    </SafeAreaProvider>

  )
}

export default App

const styles = StyleSheet.create({})