import React, { useEffect, useState } from "react";
import { View, Text, Input, Button } from "tamagui";
import { useAuth } from "../context/AuthContext";
import { ArrowLeft } from "lucide-react-native";
import { handlePasswordChange } from "../services/utils/handlePasswordChange";
import { fetchUserInformation } from "../services/utils/fetchUserInformation";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ROUTES } from "../navigation/constants";

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

  console.log('userInformation', userInformation?.role);

  return (
    <View flex={1} justifyContent="center" alignItems="center" padding={20} backgroundColor="#f5f5f5">
      <Text fontSize={24} fontWeight="bold" marginBottom={20}>Account</Text>
      <View position="absolute" top={65} left={16}>
        <ArrowLeft color="black" onPress={handleLogout}/>
      </View>
      <View padding={20} backgroundColor="white" borderRadius={10} shadowColor="#000" shadowOffset={{ width: 0, height: 2 }} shadowOpacity={0.25} shadowRadius={3.84} elevation={5}>
        <Text fontSize={18} fontWeight="bold" marginBottom={10}>My information:</Text>
        <Text marginBottom={5}>Name: {userInformation?.name}</Text>
        <Text marginBottom={5}>Last Name: {userInformation?.last_name}</Text>
        <Text marginBottom={5}>Email: {userInformation?.email}</Text>
        <Text marginBottom={5}>Gender: {userInformation?.gender}</Text>
      <View marginTop={20} width="100%">
        <Input
          placeholder="Enter new password"
          value={newPassword}
          onChangeText={setNewPassword}
          style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}
        />
        <Button onPress={() => handlePasswordChange(userId, newPassword)} backgroundColor="#007bff" color="white" padding={10} borderRadius={5}>
          Change Password
        </Button>
      </View>
      </View>
      {userInformation?.role === 'admin' && (
        <>
          <Button onPress={() => navigation.navigate(ROUTES.ADMIN_REVIEW_SCREEN)}>Check reviews</Button>
          <Button onPress={() => navigation.navigate(ROUTES.REVIEW_PRODUCTS)}>Check new products</Button>
        </>
      )}
    </View>
  );
}
