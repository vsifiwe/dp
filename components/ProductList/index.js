import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tab, TabBar } from '@ui-kitten/components';
import { ProductListScreen } from './ProductList';

//change the location name

const ProductsTabBar = ({ navigation, state }) => {
    const onTabSelect = (index) => {
        navigation.navigate(state.routeNames[index]);
    };

    const renderTab = (route) => (
        <Tab key={route} title={route.toUpperCase()} />
    );

    return (
        <TabBar selectedIndex={state.index} onSelect={onTabSelect}>
            {state.routeNames.map(renderTab)}
        </TabBar>
    );
};

const TopTabs = createMaterialTopTabNavigator();

export default () => <ProductListScreen />;
