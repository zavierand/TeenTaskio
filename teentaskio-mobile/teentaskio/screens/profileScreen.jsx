import { StyleSheet } from 'react-native';
import * as React from 'react';
import MainContainer from '../components/mainContainer.jsx';
import StyledText from '../components/Text/styledText.jsx'; 

function ProfileScreen() 
{
  return (
    <MainContainer>
        <StyledText style={styles.title} large> Profile </StyledText>
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

export default ProfileScreen;