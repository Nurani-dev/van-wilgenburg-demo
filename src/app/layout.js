import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata = {
    title: "Las en Constructiebedrijf van Wilgenburg",
    description: "Specialist in scheepsbouw, constructie, en leidingbouw systemen.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="nl" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
