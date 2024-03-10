import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/LoginSignupScreen/WelcomeScreen';
import LoginScreen from './src/screens/LoginSignupScreen/LoginScreen';
import SignupScreen from './src/screens/LoginSignupScreen/SignupScreen';
import RootNavigation from './src/RootNavigation';

export default function App() {
  return (
    <RootNavigation /> 
    // <WelcomeScreen />
    // <LoginScreen  />
    // <SignupScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
