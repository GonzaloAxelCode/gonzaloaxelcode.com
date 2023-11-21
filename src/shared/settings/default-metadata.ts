import { Metadata } from "next";
import siteMetadata from "./sitemetdata";
const defaultMetadata: any = {};
export default defaultMetadata;
export const iconsMetadata: Metadata = {
  icons: {
    icon: "https://res.cloudinary.com/ddksrkond/image/upload/v1700192308/channels4_profile-removebg-preview_gsrqy7.png",

    shortcut:
      "https://res.cloudinary.com/ddksrkond/image/upload/v1700192308/channels4_profile-removebg-preview_gsrqy7.png",
    apple: [
      {
        url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700192308/channels4_profile-removebg-preview_gsrqy7.png",
      },
      {
        url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700192308/channels4_profile-removebg-preview_gsrqy7.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700192308/channels4_profile-removebg-preview_gsrqy7.png",
      },
    ],
  },
};

export const robotsDefault: Metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const othersMetadata: Metadata = {
  verification: {
    google: "google",
  },
};
