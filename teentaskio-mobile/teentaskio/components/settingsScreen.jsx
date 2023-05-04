import * as React from 'react';
import {View, Text, ScrollView} from 'react-native'

function SettingsScreen() 
{
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
      }}>
      <Text> TeenTaskio Settings! </Text>
      <Button title='Click for Home'/>
      <Button title='Click for Profile'/>
    </View>
  );
}

export default SettingsScreen;