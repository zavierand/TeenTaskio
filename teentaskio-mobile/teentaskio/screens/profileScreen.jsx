// dependencies
import * as React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../config/themes.js';

// components

// screens

// component
function ProfileScreen() 
{
    let activeColor = colors;

    return (
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: activeColor.darkPrimary,
        }}>
        <Text> TeenTaskio Profile! </Text>
      </View>

  );
}

//backgroundColor: '#192C41' - dark mode color

export default ProfileScreen;