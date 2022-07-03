import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Login from './Screens/Login';
import Registration from './Screens/Registration';
import Prediction from './Screens/Prediction';
import Logout from './Screens/Logout';
import DoC from './Screens/DoC';
import {Ionicons, AntDesign, FontAwesome5, MaterialIcons} from '@expo/vector-icons';
import { VStack, HStack, Heading, Input, Icon, IconButton, NativeBaseProvider } from 'native-base';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

export default function AppChild() {
  const selector = useSelector(state => state);
  return (    
        <NativeBaseProvider>
            <VStack w="100%" space={5} alignSelf="center">        
            <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" borderWidth="0" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
            </VStack>
            <NavigationContainer >
            {selector.loggedInUserDetails.name &&
            <Drawer.Navigator initialRouteName="Login">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Prediction" component={Prediction} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="DoC" component={DoC} />
                <Drawer.Screen name="Logout" component={Logout} />
            </Drawer.Navigator>}
            {!selector.loggedInUserDetails.name &&
            <Drawer.Navigator initialRouteName="Login">
                <Drawer.Screen name="Login" component={Login} options={{
                title: "Login"
                }}/>
                <Drawer.Screen name="Register" component={Registration} />
            </Drawer.Navigator>}
            </NavigationContainer >
        </NativeBaseProvider>
    );
}