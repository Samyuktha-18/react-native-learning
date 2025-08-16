import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screen/dashboard/Dashboard';
import Search from '../screen/dashboard/Search';
import AddPost from '../screen/dashboard/AddPost';
import Shop from '../screen/dashboard/Shop';
import UserProfile from '../screen/dashboard/UserProfile';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen name="Home" component={Dashboard} options={{tabBarIcon: ({focused})=>(
        <Image style={{height: 24, width: 24}} source={focused ? require('../assets/footer/home.png'):require('../assets/footer/home.png')}/>
      )}} />

      <Tab.Screen name="Search" component={Search} options={{tabBarIcon: ({focused})=>(
        <Image style={{height: 24, width: 24}} source={focused ? require('../assets/footer/search.png'):require('../assets/footer/search.png')}/>
      )}} />

      <Tab.Screen name="post" component={AddPost} options={{tabBarIcon: ({focused})=>(
        <Image style={{height: 24, width: 24}} source={focused ? require('../assets/footer/post.png'):require('../assets/footer/post.png')}/>
      )}} />

      <Tab.Screen name="shop" component={Shop} options={{tabBarIcon: ({focused})=>(
        <Image style={{height: 24, width: 24}} source={focused ? require('../assets/footer/shop.png'):require('../assets/footer/shop.png')}/>
      )}} />


      <Tab.Screen name="user" component={UserProfile} options={{tabBarIcon: ({focused})=>(
        <Image style={{height: 24, width: 24}} source={focused ? require('../assets/footer/user.png'):require('../assets/footer/user.png')}/>
      )}} />

    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
