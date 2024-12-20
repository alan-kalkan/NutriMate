import { NavigationProp } from "@react-navigation/native";
import { ROUTES } from "../../navigation/constants";

export const handleProductPress = (navigation: NavigationProp<any>, productId: string) => {
    navigation.navigate(ROUTES.PRODUCT_DETAILS, { productId });
  };