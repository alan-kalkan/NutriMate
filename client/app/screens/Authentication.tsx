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
      padding={32}
      gap={16}
      backgroundColor="$background"
    >
      <Input
        placeholder="email"
        value={email}
        onChangeText={setEmail}
        width="100%"
        size="$4"
        marginBottom={8}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        width="100%"
        size="$4"
        marginBottom={16}
      />
      {isLoggedIn ? (
        <View gap={12}>
          <Text fontSize={16}>Logged in</Text>
          <Button 
            onPress={handleLogout}
            size="$4"
            width={200}
            theme="active"
          >
            Logout
          </Button>
        </View>
      ) : (
        <View gap={12}>
          <Button 
            onPress={() => handleLogin(email, password, setIsLoggedIn, setUserId)}
            size="$4"
            width={200}
            theme="active"
          >
            Login
          </Button>
          <Button 
            onPress={() => navigation.navigate(ROUTES.REGISTER as RouteNames)}
            size="$4"
            width={200}
          >
            Register
          </Button>
        </View>
      )}
    </View>
  );
}