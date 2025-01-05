import { View, Text } from "tamagui";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { ROUTES } from "../navigation/constants";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function ProductSubmit() {
    const { isLoggedIn } = useAuth();

    const navigation = useNavigation();
    return (
        <>
            {isLoggedIn ? (
                <View alignItems="flex-start" margin={20}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate(ROUTES.PRODUCT_FORM)}
                        style={{
                            borderWidth: 0,
                            borderColor: 'black',
                            backgroundColor: 'white',
                            padding: 15,
                            shadowColor: 'black',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.04,
                            shadowRadius: 1,
                            alignItems: 'center',
                            width: '50%'
                            
                        }}
                        
                    >
                        <Text style={{ color: 'black' }}>Add a new product</Text>
                        <View>
                            
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                    <Text fontSize={14} fontStyle="italic" textAlign="center" color="$gray10">Please <Text color="$gray10">login</Text> to add a product</Text>
                </View>
            )}
        </>
    );
}