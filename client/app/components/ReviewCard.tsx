import { View, Text } from "tamagui"
import React, { useEffect, useState } from "react"
import { productService } from "../services/api/productService";
import { Product } from "../types/Product";
import { Rating } from "react-native-ratings";
import { X } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { handleDeleteReview } from "../services/utils/handleDeleteReview";


export const ReviewCard = ({ comment, rating, created_at, productId, id, onDelete, onPress }: { comment?: string, rating?: number, created_at?: Date, productId?: string, id?: string, onDelete?: () => void, onPress?: () => void }) => {
    const [product, setProduct] = useState<Product | null>(null);
    
    useEffect(() => {
        if (productId) {
            productService.getProductById(productId).then((product) => {
                setProduct(product);
            });
        }
    }, [productId]);

    return (
        <View backgroundColor="white" padding={6} borderColor="black" borderWidth={1} marginBottom={5}>
            <View flexDirection="row" justifyContent="space-between" alignItems="center">
                <TouchableOpacity onPress={onPress}>
                <View>
                    <View flexDirection="row" alignItems="center">
                        <Text paddingRight={10} fontSize={16} fontWeight="bold">{product?.name}</Text>
                        <Rating
                            readonly={true}
                            tintColor="white"
                            startingValue={rating}
                            imageSize={15}
                        />
                    </View>
                    <Text fontSize={14}>{product?.brand.name}</Text>
                    <Text fontSize={14} numberOfLines={2}>{comment}</Text>
                    <Text fontSize={14}>
                        {created_at && new Date(created_at).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                        })}
                    </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={async () => {
                    if (id) {
                        try {
                            await handleDeleteReview(id);
                            onDelete?.();
                        } catch (error) {
                            if (error instanceof Error && error.message === 'Review deleted') {
                                onDelete?.();
                            } else {
                                console.error('Error deleting review:', error);
                                alert('Failed to delete review');
                            }
                        }
                    }
                }}>
                    <X size={20} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    )
}