
export const ROUTES = {
    INDEX: 'Index',
    REVIEW_FORM: 'ReviewForm',
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
    ADMIN_REVIEW_SCREEN: 'AdminReviewScreen',
    REVIEW_PRODUCTS: 'ReviewProducts',
    PRODUCT_FORM: 'ProductForm',
  } as const;
  
  export type RouteNames = keyof typeof ROUTES;

  export const TAB_BAR_HEIGHT = 70;
  export const HEADER_HEIGHT = 0;
