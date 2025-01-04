import React, { useEffect, useState } from "react";
import { View, Text, Input, Button } from "tamagui";
import { useAuth } from "../context/AuthContext";
import { ArrowLeft } from "lucide-react-native";
import { handlePasswordChange } from "../services/utils/handlePasswordChange";
import { fetchUserInformation } from "../services/utils/fetchUserInformation";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ROUTES } from "../navigation/constants";

import { handleDeleteAccount } from "../services/utils/handleDeleteAccount";

type RootStackParamList = {
  ProductDetails: { productId: string };
  AdminReviewScreen: undefined;
  ReviewProducts: undefined;
};

interface UserInformation {
  name: string;
  last_name: string;
  email: string;
  gender: string;
  password?: string;
  role: string;
}

export default function Account() {
  const { setIsLoggedIn, userId } = useAuth();
  const [userInformation, setUserInformation] = useState<UserInformation | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    fetchUserInformation(userId).then((data) => {
      setUserInformation(data);
    });
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View flex={1} justifyContent="center" alignItems="center" padding={20} backgroundColor="#f5f5f5">
      <Text fontSize={24} fontWeight="bold" marginBottom={20}>Account</Text>
      <View position="absolute" top={65} left={16}>
        <ArrowLeft color="black" onPress={handleLogout}/>
      </View>
      <View padding={20} backgroundColor="white" borderRadius={10} shadowColor="#000" shadowOffset={{ width: 0, height: 2 }} shadowOpacity={0.25} shadowRadius={3.84}>
        <Text fontSize={18} fontWeight="bold" marginBottom={10}>My information:</Text>
        <Text marginBottom={5}>Name: {userInformation?.name}</Text>
        <Text marginBottom={5}>Last Name: {userInformation?.last_name}</Text>
        <Text marginBottom={5}>Email: {userInformation?.email}</Text>
        <Text marginBottom={5}>Gender: {userInformation?.gender}</Text>
        { userInformation?.role === 'admin' && (
          <Text color="green" marginBottom={5}>Role: <Text fontWeight="bold" color="green" fontStyle="italic">{userInformation?.role}</Text></Text>
        )}
      <View marginTop={20} width="100%">
        <Input
          marginBottom={10}
          borderWidth={1}
          borderColor="black"
          borderRadius={3}
          placeholder="Enter new password"
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <Button onPress={() => handlePasswordChange(userId, newPassword)} backgroundColor="green" color="white" borderRadius={5}>
          Change Password
        </Button>
      </View>
      </View>
      {userInformation?.role === 'admin' && (
        <View marginTop={20} width="100%" alignItems="center" gap={10}>
          <Button borderWidth={1} borderRadius={3} borderColor="black" backgroundColor="white" onPress={() => navigation.navigate(ROUTES.ADMIN_REVIEW_SCREEN)}>Check reviews</Button>
          <Button borderWidth={1} borderRadius={3} borderColor="black" backgroundColor="white" onPress={() => navigation.navigate(ROUTES.REVIEW_PRODUCTS)}>Check new products</Button>
        </View>
      )}
      <Button 
        marginTop={20}
        backgroundColor="red" 
        color="white"
        onPress={() => handleDeleteAccount(userId, navigation, setIsLoggedIn)}
      >
        Delete account
      </Button>
    </View>
  );
}
