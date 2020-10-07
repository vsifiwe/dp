import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={HomeScreen} />
            <HomeStack.Screen name='Details' component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name='Settings' component={SettingsScreen} />
            <SettingsStack.Screen name='Details' component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeStackScreen} />
                <Tab.Screen name='Settings' component={SettingsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
