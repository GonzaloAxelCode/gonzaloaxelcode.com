"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { SessionProvider } from "next-auth/react";

const GlobalProviders = ({ children }: any) => {
  return (
    <GoogleOAuthProvider clientId="157232541478-1dgf60smuro9tevfo0o4lbg5igk7jmnm.apps.googleusercontent.com">
      <SessionProvider>{children}</SessionProvider>;
    </GoogleOAuthProvider>
  );
};

export default GlobalProviders;
