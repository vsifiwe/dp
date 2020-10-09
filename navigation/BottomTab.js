import * as React from 'react';
import {
    BottomNavigation,
    BottomNavigationTab,
    Icon,
} from '@ui-kitten/components';

const PersonIcon = (props) => <Icon {...props} name='person-outline' />;

const BellIcon = (props) => <Icon {...props} name='bell-outline' />;

const EmailIcon = (props) => <Icon {...props} name='email-outline' />;

export const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
        <BottomNavigationTab title='Home' icon={PersonIcon} />
        <BottomNavigationTab title='Details' icon={BellIcon} />
    </BottomNavigation>
);
