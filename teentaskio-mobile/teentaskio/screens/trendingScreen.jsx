import { StyleSheet } from 'react-native';
import * as React from 'react';
import MainContainer from '../components/mainContainer.jsx';
import StyledText from '../components/Text/styledText.jsx'; 
import NewsFeed from '../components/News/newsfeed.jsx'

function TrendingScreen() 
{
  return (
    <MainContainer>
        <StyledText style={styles.title} large> Trending </StyledText>
        <NewsFeed />
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

export default TrendingScreen;