import { Home, Settings, Heart, User, Search } from "lucide-react-native";
import { ROUTES } from './constants';

export const TAB_ICONS = {
  [ROUTES.HOME]: Home,
  [ROUTES.SETTINGS]: Settings,
  [ROUTES.FAVORITES]: Heart,
  [ROUTES.ACCOUNT]: User,
  [ROUTES.SEARCH]: Search,
  [ROUTES.AUTHENTIFICATION]: User,
} as const;
