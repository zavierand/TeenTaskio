import * as React from 'react';
import {View, Text } from 'react-native'

function SettingsScreen() 
{
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
    }}>
    <Text> TeenTaskio Settings! </Text>
    </View>
  );
}

//backgroundColor: '#192C41' - dark mode color

export default SettingsScreen;