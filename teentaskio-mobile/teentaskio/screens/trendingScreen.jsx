import { Text, View, ScrollView } from 'react-native';
import * as React from 'react';

function TrendingScreen() 
{
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      //backgroundColor: '#192C41'
      }}>
      <Text> Trending News! </Text>
    </View>

  );
}

//backgroundColor: '#192C41' - dark mode color

export default TrendingScreen;