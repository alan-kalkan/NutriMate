import React, { useEffect, useState } from 'react';
import { View, Text } from 'tamagui';
import { productService } from '../services/api/productService';
import { Product } from '../types/Product';
import { ArrowLeft, X } from 'lucide-react-native';
import { handleDeleteProduct } from '../services/utils/handleDeleteProduct';
import { TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export default function ReviewProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const navigation = useNavigation();

    useEffect(() => {
        productService.getProducts().then((products) => {
            setProducts(products);
        });
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            productService.getProducts().then((products) => {
                setProducts(products);
            });
        }, [])
    );

    const handleDelete = async (productId: string) => {
        await handleDeleteProduct(productId);
        setProducts(products.filter(p => p.id !== productId));
    };

    return (
        <View margin={20} flex={1} justifyContent="center" alignItems="flex-start">
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft color="black" size={24} />
            </TouchableOpacity>
            {products.map((product) => (
                <View padding={5} marginVertical={5} borderWidth={1} borderColor="black" key={product.id}>
                    <Text>{product.name}</Text>
                    <Text>{product.description}</Text>
                    <Text>{product.price}</Text>
                    <TouchableOpacity onPress={() => handleDelete(product.id)}>
                        <X size={24} color="red" />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}
