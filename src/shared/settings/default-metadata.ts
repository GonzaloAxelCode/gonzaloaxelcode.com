import { Metadata } from "next";
import siteMetadata from "./sitemetdata";

const defaultMetadata: Metadata = {
  title: {
    template: "%s | Gonzalo Axel",
    default: "Inicio",
  },
  description: siteMetadata.description,
  openGraph: {
    title: "Inicio",
    description: "Pagina de inicio de mi web personal.",
    url: "https://nextjs.org",
    siteName: "Inicio",
    images: [
      {
        url: "https://res.cloudinary.com/djzt16xpp/image/upload/v1698246071/Negro_Morado_y_Cian_Ne%C3%B3n_Noir_Deportes_Vaporwave_YouTube_Banner_s5o5bd.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/djzt16xpp/image/upload/v1698246071/Negro_Morado_y_Cian_Ne%C3%B3n_Noir_Deportes_Vaporwave_YouTube_Banner_s5o5bd.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  themeColor: "black",
  manifest: "/manifest.json",

  twitter: {
    card: "app",
    title: "Next.js",
    description: "The React Framework for the Web",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: {
      url: "https://nextjs.org/og.png",
      alt: "Next.js Logo",
    },
    app: {
      name: "twitter_app",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
      url: {
        iphone: "https://iphone_url",
        ipad: "https://ipad_url",
      },
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
  appLinks: {
    ios: {
      url: "https://nextjs.org/ios",
      app_store_id: "app_store_id",
    },
    android: {
      package: "com.example.android/package",
      app_name: "app_name_android",
    },
    web: {
      url: "https://nextjs.org/web",
      should_fallback: true,
    },
  },

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
  metadataBase: new URL("https://acme.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },

  archives: ["https://nextjs.org/13"],

  assets: ["https://nextjs.org/assets"],

  bookmarks: ["https://nextjs.org/13"],
  category: "technology",

  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
  colorScheme: "dark",
  creator: "Jiachi Liu",
  publisher: "Sebastian Markbåge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  other: {
    custom: "meta",
  },
};

export default defaultMetadata;
