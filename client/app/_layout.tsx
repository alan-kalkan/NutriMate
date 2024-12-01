import React from "react";
import { AuthProvider } from "./context/AuthContext";
import AppNav from "./navigation/AppNav";



export default function RootLayout() {

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
