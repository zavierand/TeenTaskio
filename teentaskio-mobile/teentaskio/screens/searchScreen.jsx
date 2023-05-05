import { StyleSheet } from 'react-native';
import * as React from 'react';
import MainContainer from '../components/mainContainer.jsx';
import StyledText from '../components/Text/styledText.jsx'; 

function SearchScreen() 
{
  return (
    <MainContainer>
        <StyledText style={styles.title} large> Search </StyledText>
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

export default SearchScreen;