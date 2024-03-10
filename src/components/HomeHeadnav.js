import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const HomeHeadnav = ({navigation}) => {
  return (
    <View style={styles.headnav}>
      {/* Settings icon */}
      <TouchableOpacity>
        <Ionicons name="settings-outline" size={24} color="#333"   onPress={() => { navigation.navigate('setting') }} />
      </TouchableOpacity>
      {/* Company name */}
      <Text style={styles.logo}>Foodie</Text>
      {/* Profile icon */}
      <TouchableOpacity>
        <Ionicons name="person-circle-outline" size={24} color="#333" onPress={() => { navigation.navigate('profile') }}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headnav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HomeHeadnav;
