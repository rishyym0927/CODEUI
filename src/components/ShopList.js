import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

const ShopList = ({ navigation }) => {
  // Sample array of shops
  const shops = [
    {
      id: 1,
      name: "Sample Shop 1",
      rating: 4.5,
      image: "https://imgs.search.brave.com/uvR79Fr1KSourd8v_yv2FkWonsHx39lKCNL2EZ81Tk4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dm94LWNkbi5jb20v/dGh1bWJvci91SlYy/eTlMM3Q1aE1TR1Ro/cnk1Zi1LUGNoSmM9/LzB4MDoxNTAweDgw/MC8xMjAweDkwMC9m/aWx0ZXJzOmZvY2Fs/KDYzMHgyODA6ODcw/eDUyMCk6bm9fdXBz/Y2FsZSgpL2Nkbi52/b3gtY2RuLmNvbS91/cGxvYWRzL2Nob3J1/c19pbWFnZS9pbWFn/ZS83MjQ5Mjg0Ny93/aWxsaWFtc2J1cmdf/aW1hZ2UuMC4wLmpw/Zw",
    },
    {
      id: 2,
      name: "Sample Shop 2",
      rating: 3.8,
      image: "https://imgs.search.brave.com/ShK6bC41vU2pIs8_MQGR_lYTnyPAJDAeFjT3YJWMw8k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMzLnRocmlsbGlz/dC5jb20vdjEvaW1h/Z2UvMjg4NTkwMC83/NTB4NTAwL2ZsYXR0/ZW47Y3JvcDt3ZWJw/PWF1dG87anBlZ19x/dWFsaXR5PTUwLmpw/Zw",
    },
    {
      id: 3,
      name: "Sample Shop 3",
      rating: 4.0,
      image: "https://imgs.search.brave.com/aO6Mlhd2tm7qBCFMW1ZUArMFfcaty6MtGyobCDXp2uU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdG9y/ZS5ibHVlYmlyZGNh/ZmUuY29tL2Nkbi9z/aG9wL2ZpbGVzLzFh/LWJsdWViaXJkLWNh/ZmVfMTQwMHguanBn/P3Y9MTYyNTA2NTgx/NQ",
    },
    {
      id: 4,
      name: "Sample Shop 4",
      rating: 4.2,
      image: "https://imgs.search.brave.com/eYa_klfIzibTDsxveSjBilOOFsTK6t3bzTshUERD5tc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hcmNoaXRlY3R1/cmFsZGlnZXN0LmNv/bS9waG90b3MvNTVl/NzY0YjEzMDJiYTcx/ZjMwMTY0OTVjL21h/c3Rlci93XzMyMCxj/X2xpbWl0L2RhbS1p/bWFnZXMtYXJjaGl0/ZWN0dXJlLTIwMTQt/MDktY29mZmUtc2hv/cHMtc3R5bGlzaC1j/b2ZmZWUtc2hvcHMt/MDQtbXktYm9vbi1z/ZW91bC5qcGc",
    },
    {
      id: 5,
      name: "Sample Shop 5",
      rating: 3.6,
      image: "https://imgs.search.brave.com/nyjXNp9LekoV3_nAdvGr_yi7L1ku7jYXrQrIFWwf-XI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9odW5n/cnlmb3JldmVyLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8xMC9waG90bzE2/OTY2NTEyNjMtNDAw/eDI0MC5qcGVn",
    },
    // Add more sample shops here
  ];

  const handleShopPress = (shop) => {
    // Handle shop press action, e.g., navigate to shop details screen
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {shops.map((shop) => (
        <TouchableOpacity
          key={shop.id}
          style={styles.shopContainer}
          onPress={() => {
            shop.id === 1
              ? navigation.navigate("MenuScreen")
              : navigation.navigate("error");
          }}
        >
          <Image source={{ uri: shop.image }} style={styles.shopImage} />
          <View style={styles.shopInfo}>
            <Text style={styles.shopName}>{shop.name}</Text>
            <Text style={styles.shopRating}>Rating: {shop.rating}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  shopContainer: {
    marginBottom: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    overflow: "hidden",
  },
  shopImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  shopInfo: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  shopName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  shopRating: {
    fontSize: 14,
    color: "#666",
  },
});

export default ShopList;
