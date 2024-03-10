  import React, { useState } from "react";
  import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar,
  } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  import HomeHeadnav from "../components/HomeHeadnav";
  import Categories from "../components/Categories";
  import OfferSlider from "../components/OfferSlider";
  import ShopList from "../components/ShopList";

  const HomePage = ({navigation}) => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
      // Implement your search logic here
      console.log("Searching for:", searchText);
    };

    return (
      <View style={styles.container}>
        {/* Status bar */}
        <HomeHeadnav navigation={navigation} />
        <StatusBar />

        {/* Search TextInput */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Categories />
      <ShopList  navigation={navigation}/>

        {/* Other components */}
        {/* ... */}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 20,
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    searchInput: {
      flex: 1,
      backgroundColor: "#f0f0f0",
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 12,
      marginRight: 10,
      fontSize: 16,
      color: "#333",
    },
    searchButton: {
      backgroundColor: "#007bff",
      borderRadius: 10,
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  export default HomePage;
