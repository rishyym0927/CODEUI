import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
        {/* Category 1 */}
        <View style={styles.category}>
          <Ionicons name="fast-food-outline" size={40} color="#333" style={styles.icon} />
          <Text style={styles.label}>Food</Text>
        </View>
        {/* Category 2 */}
        <View style={styles.category}>
          <Ionicons name="restaurant-outline" size={40} color="#333" style={styles.icon} />
          <Text style={styles.label}>Restaurants</Text>
        </View>
        {/* Category 3 */}
        <View style={styles.category}>
          <Ionicons name="cart-outline" size={40} color="#333" style={styles.icon} />
          <Text style={styles.label}>Grocery</Text>
        </View>
        {/* Category 4 */}
        <View style={styles.category}>
          <Ionicons name="pizza-outline" size={40} color="#333" style={styles.icon} />
          <Text style={styles.label}>Pizza</Text>
        </View>
        {/* Add more categories here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  categoriesContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  category: {
    alignItems: "center",
    justifyContent: "center",
    width: 100, // Fixed width for each category
    height: 100, // Fixed height for each category
    marginHorizontal: 5, // Adjust spacing between categories
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  icon: {
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Categories;
