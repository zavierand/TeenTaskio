// dependencies
import * as React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { colors } from '../config/themes.js';

// components
import MainContainer from '../components/mainContainer.jsx';

function HomeScreen() 
{
    let activeColor = colors;

    return (
      <View>
        <MainContainer />
      </View>
    );
}

const styles = StyleSheet.create(
    {

    }
)

//backgroundColor: '#192C41' - dark mode color

export default HomeScreen;