import React, { useState } from "react";
import { View, Button, Input } from "tamagui";
import { userService } from "../services/api/userService";
import { ROUTES } from "../navigation/constants";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAuth } from "../context/AuthContext";

export default function Register() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const { setIsLoggedIn } = useAuth();

    const handleRegister = async () => {
        try {
            const response = await userService.register(email, password, name, last_name, gender);
            alert(response.message);
            setIsLoggedIn(true);
            navigation.navigate("index");
        } catch (error) {
            console.error("An error occurred during registration", error);
        }
    };

    return (
        <View>
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
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Button
                        onPress={() => setGender('M')}
                        style={{ backgroundColor: gender === 'M' ? 'lightblue' : 'transparent' }}
                    >
                        Male
                    </Button>
                    <Button
                        onPress={() => setGender('F')}
                        style={{ backgroundColor: gender === 'F' ? 'lightblue' : 'transparent' }}
                    >
                        Female
                    </Button>
                    <Button
                        onPress={() => setGender('Other')}
                        style={{ backgroundColor: gender === 'Other' ? 'lightblue' : 'transparent' }}
                    >
                        Other
                    </Button>
                </View>
            </View>
            <Button onPress={handleRegister}>Register</Button>
        </View>
    );
}