import defaultMetadata from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
import HeaderService from "./components/HeaderService";
export const metadata: Metadata = {
  ...defaultMetadata,
};
const ServicesPage = () => {
  return (
    <main>


       <HeaderService />
      
    </main>
  )
}

export default ServicesPage