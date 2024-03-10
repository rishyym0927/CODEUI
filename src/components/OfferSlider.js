import React from "react";
import { View, ScrollView, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const OfferSlider = () => {
  const images = [
    require('../../assets/img1.png'),
    require('../../assets/img2.png'),
    require('../../assets/img2.png'),
    // Add more image paths here
  ];

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ width: width * images.length }}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          source={image}
          style={{  height: "100%" }}
          resizeMode="cover"
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default OfferSlider;
