import React from 'react';
import { StatusBar } from 'expo-status-bar';
import NavBar from './components/navbar.jsx'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192C41',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
