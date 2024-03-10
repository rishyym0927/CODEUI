import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const colors = {
  primary: '#ff6347',
  secondary: '#4682b4',
  text: '#333',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textLink: {
    marginTop: 10,
    color: colors.secondary,
    textAlign: "center",
  },
});

const LoginScreen = ({ navigation }) => {
  const handleSignIn = () => {
    // Simulate fetching user data from a database
    const userData = { name: 'John', email: 'john@example.com' };
    // Navigate to the homepage screen with user data
    navigation.navigate('homepage', { userData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textLink}>Forgot Password</Text>
      <Text style={styles.textLink}>OR</Text>
      <Text style={styles.textLink}>Don't have an account? <TouchableOpacity onPress={() => { navigation.navigate('signup') }}><Text style={{ color: colors.primary }}>Sign Up</Text></TouchableOpacity></Text>
    </View>
  );
};

export default LoginScreen;
