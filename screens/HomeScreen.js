import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { TopNavigation } from '@ui-kitten/components';
import { ProductListScreen } from '../components/ProductList/ProductList';

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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center' />
            <ProductListScreen />
        </SafeAreaView>
    );
};

export default HomeScreen;
