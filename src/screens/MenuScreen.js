import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const MenuScreen = ({navigation}) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const foodItems = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 8 },
    { id: 3, name: 'Pasta', price: 12 },
    { id: 4, name: 'Salad', price: 6 },
    { id: 5, name: 'Sushi', price: 15 },
    { id: 6, name: 'Sandwich', price: 7 },
    { id: 7, name: 'Steak', price: 20 },
    { id: 8, name: 'Fries', price: 4 },
    { id: 9, name: 'Soup', price: 5 },
    { id: 10, name: 'Tacos', price: 9 },
  ];

  const addToCart = (food) => {
    const existingItemIndex = cart.findIndex((item) => item.id === food.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
    setTotalPrice(totalPrice + food.price);
  };

  const removeFromCart = (food) => {
    const existingItemIndex = cart.findIndex((item) => item.id === food.id);
    if (existingItemIndex !== -1 && cart[existingItemIndex].quantity > 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity -= 1;
      setCart(updatedCart);
      setTotalPrice(totalPrice - food.price);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Menu</Text>
      <ScrollView style={styles.foodListContainer}>
        <View style={styles.foodList}>
          {foodItems.map((item) => (
            <View key={item.id} style={styles.foodItem}>
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodPrice}>${item.price}</Text>
              </View>
              <View style={styles.quantityControls}>
                <TouchableOpacity onPress={() => addToCart(item)} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>
                  {cart.find((food) => food.id === item.id)?.quantity || 0}
                </Text>
                <TouchableOpacity onPress={() => removeFromCart(item)} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.totalPrice}>Total Price: ${totalPrice.toFixed(2)}</Text>
        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.proceedButtonText}   onPress={() => {
    navigation.navigate('bill', { cart: cart, totalPrice: totalPrice });
  }}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  foodListContainer: {
    flex: 1,
    overflow: 'scroll',
  },
  foodList: {},
  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  foodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  foodName: {
    fontSize: 18,
    color: '#333',
  },
  foodPrice: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 20,
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  proceedButton: {
    backgroundColor: 'green',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 5,
  },
  proceedButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MenuScreen;
