import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen, SettingsStackScreen } from './Stacks';
import { BottomTabBar } from './BottomTab';

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => (
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Screen name='Home' component={HomeStackScreen} />
        <Screen name='Details' component={SettingsStackScreen} />
    </Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
);

export default AppNavigator;
