// dependencies
import * as React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { colors } from '../config/themes.js';
import StyledText from '../components/Text/styledText.jsx';

// components
import MainContainer from '../components/mainContainer.jsx';

function HomeScreen() 
{

    let activeColor = colors;

    return (
        <MainContainer>
            <StyledText style={styles.title} large> Home </StyledText>
        </MainContainer>
    );
}

const styles = StyleSheet.create( {
    title:
    {
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 25,
    }
});

//backgroundColor: '#192C41' - dark mode color

export default HomeScreen;