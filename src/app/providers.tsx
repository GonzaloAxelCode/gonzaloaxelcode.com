"use client";
import { UIProvider } from "@/shared/contexts/UIContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GlobalProviders = ({ children }: any) => {
  return (
    <UIProvider>
      <GoogleOAuthProvider clientId="157232541478-1dgf60smuro9tevfo0o4lbg5igk7jmnm.apps.googleusercontent.com">
        {children}
      </GoogleOAuthProvider>
    </UIProvider>
  );
};

export default GlobalProviders;
