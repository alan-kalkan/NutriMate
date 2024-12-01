import React from "react";
import { View, Text, Button } from "tamagui";
import { useAuth } from "../context/AuthContext";
import { ArrowLeft } from "lucide-react-native";

export default function Account() {

  const { setIsLoggedIn } = useAuth();
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Text>Account</Text>
      <View position="absolute" top={65} left={16}>
        <ArrowLeft color="black" onPress={handleLogout}/>
      </View>
    </View>
  );
}
