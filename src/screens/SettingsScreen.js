import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const handleLogout = () => {
    // Implement logout functionality
    console.log('User logged out');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.option}>
        <TouchableOpacity style={styles.optionButton} >
          <Text style={styles.optionText}>Edit Profile</Text>
          <Ionicons name="person-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Notification Settings</Text>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Payment Settings</Text>
          <Ionicons name="card-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Privacy & Security</Text>
          <Ionicons name="lock-closed-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Language & Region</Text>
          <Ionicons name="language-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>App Settings</Text>
          <Ionicons name="settings-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Feedback & Support</Text>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <TouchableOpacity style={styles.optionButton} onPress={handleLogout}>
          <Text style={styles.optionText}>Log Out</Text>
          <Ionicons name="log-out-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#ff6347',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  option: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SettingsScreen;
