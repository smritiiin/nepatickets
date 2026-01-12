import type { Metadata } from "next";
import { Geist, Geist_Mono ,Oswald} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap', // Ensures text remains visible while the font loads
  variable: '--font-oswald', // Optional: for use with CSS variables (especially Tailwind CSS)
});

export const metadata: Metadata = {
  title: "NepaTickets",
  description: "Your gateway to unforgettable events in Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true} // Add this line
      >
        {children}
      </body>
    </html>
  );
}

