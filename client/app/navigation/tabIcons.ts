import { Home, Heart, Search, CircleUser, MessageSquareCode } from "lucide-react-native";
import { ROUTES } from './constants';

export const TAB_ICONS = {
  [ROUTES.HOME]: Home,
  [ROUTES.SETTINGS]: MessageSquareCode,
  [ROUTES.FAVORITES]: Heart,
  [ROUTES.ACCOUNT]: CircleUser,
  [ROUTES.SEARCH]: Search,
  [ROUTES.AUTHENTIFICATION]: CircleUser,
} as const;
