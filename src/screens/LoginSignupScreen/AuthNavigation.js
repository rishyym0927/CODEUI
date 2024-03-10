import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './WelcomeScreen'
import SignupScreen from './SignupScreen'
import LoginScreen from './LoginScreen'
import HomeScreen from '../HomeScreen'
import ProfileScreen from '../ProfileScreen'
import { Settings } from 'react-native'
import SettingsScreen from '../SettingsScreen'
import NewScreen from '../NewScreen'
import MenuScreen from '../MenuScreen'
import DetailedBillScreen from '../DetailedBillScreen'
import OrderSuccessScreen from '../final.'

const Stack = createNativeStackNavigator()
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='WelcomePage'>
    <Stack.Screen name="WelcomePage" component={WelcomeScreen} options={{headerShown:false}} />
    <Stack.Screen name="signup" component={SignupScreen} options={{headerShown:false}}/>
    <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
    <Stack.Screen name="homepage" component={HomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name="profile" component={ProfileScreen} options={{headerShown:false}}/>
    <Stack.Screen name="setting" component={SettingsScreen} options={{headerShown:false}}/>
    <Stack.Screen name="error" component={NewScreen} options={{headerShown:false}}/>
    <Stack.Screen name="MenuScreen" component={MenuScreen} options={{headerShown:false}}/>
    <Stack.Screen name="bill" component={DetailedBillScreen} options={{headerShown:false}}/>
    <Stack.Screen name="final" component={OrderSuccessScreen} options={{headerShown:false}}/>
  </Stack.Navigator>
  )
}

export default AuthNavigation