 // dependencies
import * as React from 'react';
import { ScrollView, SafeAreaView, StyleSheet, FlatList } from 'react-native';

// components
import NewsItem from './newsItem.jsx';

function NewsFeed( { data  } )
{
    return(
        <FlatList 
            data={ data }
            renderItems={( {item} ) => <NewsItem {...items}/> }
        
        />
    );
}

export default NewsFeed;