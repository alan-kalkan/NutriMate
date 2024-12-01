
export const ROUTES = {
    INDEX: 'Index',
    HOME: 'Home',
    SETTINGS: 'Settings',
    FAVORITES: 'Favorites',
    ACCOUNT: 'Account',
    REGISTER: 'Register',
    SEARCH: 'Search',
    PRODUCT_LIST: 'ProductList',
    PRODUCT_DETAILS: 'ProductDetails',
    AUTHENTIFICATION: 'Authentification',
    ROOT: 'RootLayout',
  } as const;
  
  export type RouteNames = keyof typeof ROUTES;

  export const TAB_BAR_HEIGHT = 70;
  export const HEADER_HEIGHT = 0;
