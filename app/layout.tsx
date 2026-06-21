import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Потемкин Александр",
  description: "Портфолио разработчика. UI/UX дизайн, веб-разработка.",
  manifest: "/manifest.json",
  keywords: ["портфолио", "дизайнер", "разработчик", "UI/UX", "веб-разработка"],
  authors: [{ name: "Потемкин Александр" }],
  openGraph: {
    title: "Потемкин Александр",
    description: "Портфолио разработчика. UI/UX, веб-разработка, графика.",
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#f0f0f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {
          process.env.NODE_ENV === "production"
          // && <YandexMetrika />
        }
      </body>
    </html>
  );
}
