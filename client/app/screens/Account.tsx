import { Text, Input, Button, View } from "tamagui";
import React, { useState } from "react";
import { userService } from "../services/api/userService";
import { RouteNames, ROUTES } from "../navigation/constants";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type AccountScreenNavigationProp = StackNavigationProp<
  Record<RouteNames, undefined>
>;

export default function Account() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<AccountScreenNavigationProp>();

  const handleLogin = async () => {
    try {
      const response = await userService.login(email, password);
      if (response.success) {
        alert("Login successful");
      } else {
        console.error("Login failed", response.message);
      }
    } catch (error) {
      console.error("An error occurred during login", error);
    }
  };

  return (
    <View>
      <Text>Login or Register</Text>
      <Input
        placeholder="email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button onPress={handleLogin}>Login</Button>
      <Button onPress={() => navigation.navigate(ROUTES.REGISTER as RouteNames)}>Register</Button>
    </View>
  );
}