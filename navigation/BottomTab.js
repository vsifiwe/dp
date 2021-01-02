import * as React from 'react';
import {
    BottomNavigation,
    BottomNavigationTab,
    Icon,
} from '@ui-kitten/components';

const PersonIcon = (props) => <Icon {...props} name='person-outline' />;
const SearchIcon = (props) => <Icon {...props} name='search-outline' />;
const WheelIcon = (props) => <Icon {...props} name='pricetags-outline' />;
const DollarIcon = (props) => <Icon {...props} name='settings-outline' />;

export const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
        <BottomNavigationTab title='Home' icon={PersonIcon} />
        <BottomNavigationTab title='Search' icon={SearchIcon} />
        <BottomNavigationTab title='Local Prices' icon={WheelIcon} />
        <BottomNavigationTab title='Settings' icon={DollarIcon} />
    </BottomNavigation>
);
