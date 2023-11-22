"use client";
import { UIProvider } from "@/shared/contexts/UIContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GlobalProviders = ({ children }: any) => {
  // eslint-disable-next-line
  const uri = process.env["NEXT_PUBLIC_GOOGLE_ID"];
  return (
    <UIProvider>
      <GoogleOAuthProvider clientId={uri || ""}>{children}</GoogleOAuthProvider>
    </UIProvider>
  );
};

export default GlobalProviders;
