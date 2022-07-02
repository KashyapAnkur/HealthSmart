import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Registration from './Screens/Registration';
import DoC from './Screens/DoC';
import {Ionicons, AntDesign, FontAwesome5, MaterialIcons} from '@expo/vector-icons';
import { NativeBaseProvider } from 'native-base';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer >
          <Tab.Navigator
            tabBarOptions={{
              showLabel: false,
              activeTintColor: "#ffc107"
            }}
          >
            <Tab.Screen 
              name="Home" 
              component={Home} 
              options={{
                headerShown: false,
                tabBarIcon: (props) => (
                  <Ionicons 
                    name="md-home" 
                    size={24} 
                    color={props.color}
                  />
                )
              }} 

            />
            <Tab.Screen 
              name="Profile"
              component={Profile}
              options={{
                headerShown: false,
                tabBarIcon: (props) => (
                  <FontAwesome5 
                    name="business-time" 
                    size={24} 
                    color={props.color}
                  />
                )
              }}
            />
            <Tab.Screen 
              name="DoC"
              component={DoC}
              options={{
                headerShown: false,
                tabBarIcon: (props) => (
                  <AntDesign 
                    name="heart" 
                    size={24} 
                    color={props.color}
                  />
                )
              }}
            />
            <Tab.Screen 
              name="Registration"
              component={Registration}
              options={{
                headerShown: false,
                tabBarIcon: (props) => (
                  <MaterialIcons 
                    name="sports-baseball" 
                    size={24} 
                    color={props.color}
                  />
                )
              }}
            />          
          </Tab.Navigator>
          <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
