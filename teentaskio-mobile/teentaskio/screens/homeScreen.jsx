import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet } from 'react-native'

function HomeScreen() 
{
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'top', 
      alignItems: 'center',
      }}>
      <Text> TeenTaskio Home Feed! </Text>
    </View>
  );
}

const styles = StyleSheet.create(
    {

    }
)

//backgroundColor: '#192C41' - dark mode color

export default HomeScreen;