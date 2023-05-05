 // dependencies
import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../../config/themes.js';

function NewsItem( { children, style, ...props } )
{
    let activeColor = colors;

    return(
        <Text> Item #1 </Text>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    }
});

export default NewsItem ;