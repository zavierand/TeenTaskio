// dependencies
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//components
// import NavBar from './components/navbar.jsx';

// screens
import HomeScreen from './screens/homeScreen.jsx';
import SettingsScreen from './screens/settingsScreen.jsx';
import ProfileScreen from './screens/profileScreen.jsx';
import TrendingScreen from './screens/trendingScreen.jsx';
import SearchScreen from './screens/searchScreen.jsx';

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={HomeScreen} />
            <Tab.Screen name="Trending" component={TrendingScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

/*backgroundColor: '#192C41'
*/
