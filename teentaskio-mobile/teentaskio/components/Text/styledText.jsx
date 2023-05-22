// dependencies
import * as React from 'react';
import { Text } from 'react-native';
import { colors } from '../../config/themes.js';

function StyledText( { children , style, small, large, bold, ...props } )
{
    let activeColor = colors;

    return(
        <Text style={[{
            color: activeColor.lightFont,
            fontSize: small ? 14: large ? 24 : 16,
            fontWeight: bold || large ? "bold" : "normal",
            }, style] }
            { ...props } 
        >
            { children }
        </Text>
    );
} 

export default StyledText;