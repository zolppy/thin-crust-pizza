import { ReactNode } from "react";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { amaticSc } from "@/utils/fonts";
import { MenuTypeProvider } from "@/context/MenuTypeCtx";
import { NavProvider } from "@/context/NavCtx";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thin Crust Pizza",
  description:
    "Experience authentic artisanal pizza by chef. Cozy atmosphere, fresh ingredients, and unforgettable flavors. Book your table online and enjoy a unique dining experience!",
  authors: [
    {
      name: "Gabriel Cavalcante de Jesus Oliveira",
      url: "https://github.com/zolppy",
    },
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <MenuTypeProvider>
        <NavProvider>
          <body className={`${amaticSc.className} antialiased`}>
            {children}
          </body>
        </NavProvider>
      </MenuTypeProvider>
      <GoogleAnalytics gaId="G-8VW35R4VDN" />
    </html>
  );
};

RootLayout.displayName = "RootLayout";

export default RootLayout;
