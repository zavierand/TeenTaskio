import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, Button } from 'react-native';
//import SettingsScreen from '../components/settngsScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() 
{
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      //backgroundColor: '#192C41'
      }}>
      <Text> TeenTaskio Home! </Text>
      <Button title='Click for Settings'/>
      <Button title='Click for Profile'/>
    </View>
  );
}

function SettingsScreen() 
{
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      //backgroundColor: '#192C41'
      }}>
      <Text> TeenTaskio Settings! </Text>
      <Button title='Click for Home'/>
      <Button title='Click for Profile'/>
    </View>
  );
}

function ProfileScreen() 
{
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      //backgroundColor: '#192C41'
      }}>
      <Text> TeenTaskio Profile! </Text>
      <Button title='Click for Home'/>
      <Button title='Click for Settings'/>
      
    </View>

  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

//backgroundColor: '#192C41'
