import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';

const HomeScreen = ({ navigation }) => {
    const themeContext = React.useContext(ThemeContext);
    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center' />
            <Divider />
            <Layout
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Button onPress={navigateDetails}>OPEN DETAILS</Button>
                <Button
                    style={{ marginVertical: 4 }}
                    onPress={themeContext.toggleTheme}
                >
                    TOGGLE THEME
                </Button>
            </Layout>
        </SafeAreaView>
    );
};

export default HomeScreen;
