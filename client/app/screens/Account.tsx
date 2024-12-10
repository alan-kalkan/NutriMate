import React, { useEffect, useState } from "react";
import { View, Text, Input, Button } from "tamagui";
import { useAuth } from "../context/AuthContext";
import { ArrowLeft } from "lucide-react-native";
import { fetchUserInformation } from "../services/utils/fetchUserInformation";
import { handlePasswordChange } from "../services/utils/handlePasswordChange";
interface UserInformation {
  name: string;
  last_name: string;
  email: string;
  gender: string;
  password?: string;
}
export default function Account() {

  const { setIsLoggedIn, userId } = useAuth();
  const [userInformation, setUserInformation] = useState<UserInformation | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  console.log('userId', userId);
  useEffect(() => {
    fetchUserInformation(userId).then((data) => {
      console.log('data', data);
      setUserInformation(data);
    });
  }, []);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Text>Account</Text>
      <View position="absolute" top={65} left={16}>
        <ArrowLeft color="black" onPress={handleLogout}/>
      </View>
      <View>
        <Text>My information: </Text>
        <Text>{userInformation?.name}</Text>
        <Text>{userInformation?.last_name}</Text>
        <Text>{userInformation?.email}</Text>
        <Text>{userInformation?.gender}</Text>
        <Text>
          {showPassword ? userInformation?.password : "••••••••"}
        </Text>
        <Button onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide Password" : "Show Password"}
        </Button>
      </View>
      <View>
        <Input
          placeholder="Enter new password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!showPassword}
        />
        <Button onPress={() => handlePasswordChange(userId, newPassword)}>
        </Button>
      </View>
    </View>
  );
}
