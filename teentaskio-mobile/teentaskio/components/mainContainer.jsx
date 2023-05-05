// dependencies
import * as React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { colors } from '../config/themes.js';

function MainContainer( { children, style, ...props } )
{
    var theme = {mode: "dark"};
    let activeColor = colors[theme.mode];

    return(
        <SafeAreaView style={styles.container} >
            <ScrollView style={  [{
                backgroundColor: activeColor.lightPrimary,
            }, style] }
            
                showsVerticalScrollIndicator={ false } 
                { ...props } 
                >
                { children }
                <StatusBar style='auto' />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    }
});

export default MainContainer;