import { Text, Input, Button, View } from "tamagui";
import React, { useEffect, useState } from "react";
import { userService } from "../services/api/userService";
import { RouteNames, ROUTES } from "../navigation/constants";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useAuth } from "../context/AuthContext";

type AccountScreenNavigationProp = StackNavigationProp<
  Record<RouteNames, undefined>
>;

export default function Account() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<AccountScreenNavigationProp>();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    console.log("User state changed:", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("Veuillez entrer un email et un mot de passe.");
        return;
      }
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
      }    
      console.log('email, password', email, password);
      const response = await userService.login(email, password);
      if (response.success) {
        alert("Login successful");
        setIsLoggedIn(true);
        console.log(isLoggedIn);
      } else {
        console.error("Login failed", response.message);
      }
    } catch (error) {
      console.error("An error occurred during login", error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View>
      <Text>Login or Register</Text>
      <Input
        placeholder="email"
        value={email}
        onChangeText={setEmail}
      />
      {isLoggedIn ? <Text>Logged in</Text> : <Text>Not logged in</Text>}
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text>{isLoggedIn}</Text>
      <Button onPress={handleLogin}>Login</Button>
      <Button onPress={() => navigation.navigate(ROUTES.REGISTER as RouteNames)}>Register</Button>
      <Button onPress={handleLogout}>Logout</Button>
    </View>
  );
}