import "@/shared/styles/globals.css";
import "@/shared/styles/tailwindcss-custom.css";
import "@splidejs/react-splide/css/core";
import { Metadata } from "next";

import Layoutclient from "./layoutclient";
export const metadata: Metadata = {
  metadataBase: new URL("https://gonzaloaxelcode.com"),
  title: {
    template: "%s | Gonzalo Axel",
    default: "Gonzalo Axel Fullstack Developer",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="es">
      <Layoutclient >
        {children}
      </Layoutclient>
    </html>
  );
}


