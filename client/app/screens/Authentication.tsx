import { Text, Input, Button, View } from "tamagui";
import React, { useState } from "react";

import { RouteNames, ROUTES } from "../navigation/constants";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useAuth } from "../context/AuthContext";
import handleLogin from "../services/utils/handleLogin";

type AccountScreenNavigationProp = StackNavigationProp<
  Record<RouteNames, undefined>
>;

export default function Authentication() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<AccountScreenNavigationProp>();
  const { isLoggedIn, setIsLoggedIn, setUserId } = useAuth();
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View 
      flex={1}
    justifyContent="center"
    alignItems="center"
    padding={16}
    >
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
      {isLoggedIn ? (
        <>
          <Text>Logged in</Text>
          <Button onPress={handleLogout}>Logout</Button>
        </>
      ) : (
        <>
          <Button onPress={() => handleLogin(email, password, setIsLoggedIn, setUserId)}>Login</Button>
          <Button onPress={() => navigation.navigate(ROUTES.REGISTER as RouteNames)}>Register</Button>
        </>
      )}
    </View>
  );
}