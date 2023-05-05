import * as React from 'react';
import SettingsScreen from './components/settingsScreen.jsx';
import HomeScreen from './screens/homeScreen.jsx'
import ProfileScreen from './components/profileScreen.jsx'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Button, Text, ScrollView } from 'react-native';

const Tab = createBottomTabNavigator();

function NavBar() 
{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default NavBar;