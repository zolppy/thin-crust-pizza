import { ReactNode } from "react";
import type { Metadata } from "next";
import { amaticSc } from "@/utils/fonts";
import { MenuTypeProvider } from "@/context/MenuTypeCtx";
import { NavProvider } from "@/context/NavCtx";
import "./globals.css";

export const metadata: Metadata = {
    title: "Thin Crust Pizza",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veniam eaque dignissimos ipsum nobis voluptate! Cumque nostrum possimus perspiciatis sequi animi adipisci nihil minus repellat, doloribus earum assumenda officia sint.",
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
        </html>
    );
};

RootLayout.displayName = "RootLayout";

export default RootLayout;
