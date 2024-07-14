import Footer from "@/shared/components/Footer/Footer";
import Header from "@/shared/components/Header";
import Subheader from "@/shared/components/Header/Subheader";
import "@/shared/styles/globals.css";
import "@/shared/styles/tailwindcss-custom.css";
import "@splidejs/react-splide/css/core";
import { Metadata } from "next";

import GlobalProviders from "../providers";
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
      <body
        id="body-id"
        className="body  overflow-x-hidden dark:text-white text-gray-15  antialiased selection:bg-primary-purple relative bg-white dark:bg-[#222222] "
      >
        <GlobalProviders>
          <div className="relative w-full dark:text-white text-gray-15  ">
            <Header />
            <Subheader />
            <div className="my-4">{children}</div>
            <Footer />
          </div>
        </GlobalProviders>
      </body>
    </html>
  );
}
