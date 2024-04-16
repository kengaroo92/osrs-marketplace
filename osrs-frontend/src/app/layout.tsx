import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "OSRS-Marketplace",
    description:
        "Discover the ultimate RuneScape marketplace for buying and selling in-game gold. Secure, fast, and reliable, our platform connects you with a vibrant community of players to enhance your RuneScape experience. Join now and explore a range of services designed to boost your gameplay!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
