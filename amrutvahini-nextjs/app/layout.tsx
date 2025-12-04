import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "अमृतवाहिनी प्रक्रिया | Amrutvahini Prakriya | 100% Natural, Chemical-Free Foods",
  description: "Stone-ground flours, cold-pressed oils & natural products from our solar-powered facility. Direct from farmers, zero chemicals. Trust in every bite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
