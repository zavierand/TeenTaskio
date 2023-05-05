import * as React from 'react';
import { Text, View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import MainContainer from '../components/mainContainer.jsx';
import StyledText from '../components/Text/styledText.jsx';

function SettingsScreen() 
{
  return (
    <MainContainer>
      <StyledText style={styles.title} large>
        Settings
      </StyledText>
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

export default SettingsScreen;