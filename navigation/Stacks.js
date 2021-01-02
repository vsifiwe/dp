import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator();

export function HomeStackScreen() {
    return (
        <HomeStack.Navigator headerMode='none'>
            <HomeStack.Screen name='Home' component={HomeScreen} />
            <HomeStack.Screen name='Details' component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createStackNavigator();

export function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator headerMode='none'>
            <SettingsStack.Screen name='Settings' component={SettingsScreen} />
            <SettingsStack.Screen name='Details' component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}

const PriceStack = createStackNavigator();

export function PriceStackScreen() {
    return (
        <PriceStack.Navigator headerMode='none'>
            <PriceStack.Screen name='Settings' component={SettingsScreen} />
            <PriceStack.Screen name='Details' component={DetailsScreen} />
        </PriceStack.Navigator>
    );
}

const SearchStack = createStackNavigator();

export function SearchStackScreen() {
    return (
        <SearchStack.Navigator headerMode='none'>
            <SearchStack.Screen name='Settings' component={SettingsScreen} />
            <SearchStack.Screen name='Details' component={DetailsScreen} />
        </SearchStack.Navigator>
    );
}
