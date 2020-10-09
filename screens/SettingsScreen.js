import * as React from 'react';
import { Layout, Button, Text, Icon } from '@ui-kitten/components';

const FacebookIcon = (props) => <Icon name='facebook' {...props} />;

function SettingsScreen({ navigation }) {
    return (
        <Layout
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Settings screen</Text>
            <Button
                status={'info'}
                accessoryLeft={FacebookIcon}
                onPress={() => navigation.navigate('Details')}
            >
                Go to Details
            </Button>
        </Layout>
    );
}

export default SettingsScreen;
