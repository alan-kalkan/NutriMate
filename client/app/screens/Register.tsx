import React, { useState } from "react";
import { View, Button, Input } from "tamagui";
import { ArrowLeft } from "lucide-react-native";
import { useAuth } from "../context/AuthContext";
import handleRegister from "../services/utils/handleRegister";
import { useNavigation } from "@react-navigation/native";
import { RouteNames } from "../navigation/constants";
import { StackNavigationProp } from "@react-navigation/stack";

type AccountScreenNavigationProp = StackNavigationProp<
  Record<RouteNames, undefined>
>;

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const { setIsLoggedIn } = useAuth();
    const navigation = useNavigation<AccountScreenNavigationProp>();

    return (
        <View 
            flex={1}
            justifyContent="center"
            alignItems="center"
            padding={16}
        >   
            <View position="absolute" top={65} left={16}>
                <ArrowLeft
                    color="black"
                    onPress={() => navigation.goBack()} 
                />
            </View>
            <View gap={16}>
                <Input
                    placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Input
                placeholder="First Name"
                value={name}
                onChangeText={setName}
            />
            <Input
                placeholder="Last Name"
                value={last_name}
                onChangeText={setLastName}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 8 }}>
                <Button
                    onPress={() => setGender('M')}
                    backgroundColor={gender === 'M' ? 'lightblue' : 'transparent'}
                >
                    Male
                </Button>
                <Button
                    onPress={() => setGender('F')}
                    backgroundColor={gender === 'F' ? 'lightblue' : 'transparent'}
                >
                    Female
                </Button>
                <Button
                    onPress={() => setGender('Other')}
                    backgroundColor={gender === 'Other' ? 'lightblue' : 'transparent'}
                >
                    Other
                    </Button>
                </View>
            </View>
            <Button onPress={() => handleRegister(email, password, name, last_name, gender, setIsLoggedIn, navigation.navigate)}>Register</Button>
        </View>
    );
}