import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';

const HomeScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const result = await fetch(
                'https://sylirw.000webhostapp.com/wp-json/wc/v2/products?in_stock=true&consumer_secret=cs_c4d7cbd910852527b4941dbf6ac1c1f579ca02f9&consumer_key=ck_26397419a08edb8a7a01c1eb02316ddd53b46ea1&per_page=100'
            )
                .then((response) => response.json())
                .then((response) => {
                    setProducts(response);
                })
                .then(console.log(products))
                .catch((error) => console.warn(error));
        }

        fetchProducts();
    }, []);

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
