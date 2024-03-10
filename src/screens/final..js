import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const OrderSuccessScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img1.png")}
        style={styles.successImage}
      />
      <Text style={styles.heading}>Order Successful!</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Order ID: ABC123</Text>
        <Text style={styles.detailText}>
          Delivery Address: 123 Main Street, Salt Lake, 211003 Kolkata West
          Bengal, India
        </Text>
        <Text style={styles.detailText}>Phone No. : 9369831243</Text>
      </View>
      <TouchableOpacity
        style={styles.trackButton}
        onPress={() => navigation.navigate("TrackOrder")}
      >
        <Text
          style={styles.buttonText}
          onPress={() => {
            navigation.navigate("error");
          }}
        >
          Track Order
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.buttonText}onPress={() => {
            navigation.navigate("error");
          }}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.helpButton}>
        <Text style={styles.buttonText}onPress={() => {
            navigation.navigate("error");
          }}>Need Help?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  successImage: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  detailsContainer: {
    marginBottom: 30,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  trackButton: {
    backgroundColor: "#28a745",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 10,
  },
  contactButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 10,
  },
  helpButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default OrderSuccessScreen;
