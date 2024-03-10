import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import img1 from "../../../assets/img1.png"
import style, { colors, hr80 } from "../../globals/style";

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To QUECTO</Text>
      <View style={styles.logoContainer}>
        <Image source={img1} style={styles.logo} />
      </View>
      <View style={hr80}></View>
      <Text style={styles.text} >
        Find the best food around you at the lowest price
      </Text>
      <View style={hr80}></View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, {backgroundColor:"white"}]} onPress={()=>{navigation.navigate('login')}}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "white" }]}  onPress={()=>{navigation.navigate('signup')}}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    color: colors.text1,
    fontWeight: "900",
    color:"white",
    textAlign: "center",
    marginBottom: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 24,
    color: colors.text1,
    textAlign: "center",
    marginBottom: 20,
    marginTop:15,
   
    color:"white",
    marginBottom: 40,
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap:10,
  },
  button: {
    backgroundColor: colors.text2,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
