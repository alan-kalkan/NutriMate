import React, { useEffect, useState } from 'react';
import { View, Text } from 'tamagui';
import { productService } from '../services/api/productService';
import { Product } from '../types/Product';
import { ArrowLeft, X } from 'lucide-react-native';
import { handleDeleteProduct } from '../services/utils/handleDeleteProduct';
import { TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { formatDate } from '../services/utils/formatDate';

export default function ReviewProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const navigation = useNavigation();

    const filterRecentProducts = (products: Product[]) => {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        
        return products.filter(product => {
            const productDate = new Date(product.created_at);
            return productDate >= oneWeekAgo;
        });
    };

    useEffect(() => {
        productService.getProducts().then((products) => {
            setProducts(filterRecentProducts(products));
        });
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            productService.getProducts().then((products) => {
                setProducts(filterRecentProducts(products));
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
                    <Text fontSize={16} fontWeight="bold">{product.name}</Text>
                    <Text fontSize={14} fontStyle="italic">{product.description}</Text>
                    <Text fontSize={14} fontWeight="bold">{product.price}$</Text>
                    <Text fontSize={14} fontStyle="italic">
                        {formatDate(product.created_at)}
                    </Text>
                    <TouchableOpacity onPress={() => handleDelete(product.id)}>
                        <X size={24} color="red" />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}
