"use client";
import { UIProvider } from "@/shared/contexts/UIContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
};
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
