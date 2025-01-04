import { View, Text, Button, Input } from "tamagui";
import React, { useState } from "react";
import { handleAddProduct } from "../services/utils/handleAddProduct";
import { Product } from "../types/Product";
import { useNavigation } from "@react-navigation/core";
import { ArrowLeft } from "lucide-react-native";

export default function ProductForm() {
    const navigation = useNavigation();
    const [product, setProduct] = useState<Partial<Product>>({
        name: "",
        price: 0,
        description: "",
        image_url: "",
        treatmentDuration: 0,
        brand: { name: "" },
    });

    const [error, setError] = useState<string>("");

    const addProduct = async () => {
        if (!product.name || !product.price || !product.description || 
            !product.image_url || !product.treatmentDuration || !product.brand?.name) {
            setError("Every field is required!");
            return;
        }
        setError("");
        await handleAddProduct(product as Product);
        navigation.goBack();
    }

    const getRandomImage = () => {
        const randomId = Math.floor(Math.random() * 1000);
        const imageUrl = `https://picsum.photos/seed/${randomId}/500`;
        setProduct({ ...product, image_url: imageUrl });
    };

    return (
        <View flex={1} margin={20}>
            <View position="absolute" top={60} left={0}>
                <ArrowLeft color="black" size={24} onPress={() => navigation.goBack()} />
            </View>

            <View flex={1} justifyContent="center" gap="$4" maxWidth={600} width="100%" alignSelf="center">
                <Text fontSize="$3" fontWeight="bold" textAlign="center" mb="$4">
                    Add New Product
                </Text>

                <Input
                    size="$4"
                    borderRadius="$4"
                    placeholder="Product Name"
                    value={product.name}
                    onChangeText={(text) => setProduct({ ...product, name: text })}
                />

                <View>
                    <Text mb="$2">Price</Text>
                    <Input 
                        size="$4"
                        borderRadius="$4"
                        value={product.price?.toString()}
                        onChangeText={(text) => setProduct({ ...product, price: Number(text) })}
                    />
                </View>

                <Input 
                    size="$4"
                    borderRadius="$4"
                    placeholder="Description"
                    multiline
                    numberOfLines={3}
                    value={product.description}
                    onChangeText={(text) => setProduct({ ...product, description: text })}
                />

                <Button 
                    size="$4" 
                    borderRadius="$4"
                    variant="outlined"
                    onPress={getRandomImage}
                >
                    {product.image_url ? 'Generate New Image' : 'Generate Random Image'}
                </Button>

                {product.image_url && (
                    <Text color="$success" textAlign="center">
                        Image URL generated ✓
                    </Text>
                )}

                <View>
                    <Text mb="$2">Treatment Duration</Text>
                    <Input
                        size="$4"
                        borderRadius="$4"
                        value={product.treatmentDuration?.toString()}
                        onChangeText={(text) => setProduct({ ...product, treatmentDuration: Number(text) })}
                    />
                </View>

                <Input 
                    size="$4"
                    borderRadius="$4"
                    placeholder="Brand"
                    value={product.brand?.name}
                    onChangeText={(text) => setProduct({ ...product, brand: { name: text } })}
                />

                {error && (
                    <Text color="$red" textAlign="center">
                        {error}
                    </Text>
                )}

                <Button 
                    size="$4"
                    borderRadius="$4"
                    themeInverse
                    onPress={addProduct}
                    mt="$4"
                >
                    Add Product
                </Button>
            </View>
        </View>
    );
}