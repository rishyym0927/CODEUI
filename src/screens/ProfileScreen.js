import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  // Dummy user data
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1234567890",
    address: "123 Main St, City",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // Add more dummy data as needed
  };

  return (
    <View style={styles.container}>
      {/* Profile header */}
      <View style={styles.header}>
        <Ionicons name="person-circle" size={120} color="#333" />
        <Text style={styles.name}>{userData.name}</Text>
      </View>

      {/* User details */}
      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Ionicons name="mail-outline" size={24} color="#333" />
          <Text style={styles.detailText}>{userData.email}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="call-outline" size={24} color="#333" />
          <Text style={styles.detailText}>{userData.phoneNumber}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="location-outline" size={24} color="#333" />
          <Text style={styles.detailText}>{userData.address}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="person-outline" size={24} color="#333" />
          <Text style={styles.detailText}>{userData.bio}</Text>
        </View>
        {/* Add more user details as needed */}
      </View>

      {/* Button to go back to homepage */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('homepage')}>
        <Text style={styles.buttonText}>Back to Homepage</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  details: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#ff6347",
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
});

export default ProfileScreen;
