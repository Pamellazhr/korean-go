import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { TogglerProvider } from "./context/TogglerProvider";
import { FirebaseProvider } from "./context/FirebaseProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "JapanTrip | Exclusive Journey to Japan",
  description: "JapanTrip | Exclusive Journey to Japan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FirebaseProvider>
      <TogglerProvider>
        <html lang="en" className="scroll-smooth">
          <body className={`overflow-x-hidden ${poppins.className}`}>
            {children}
          </body>
        </html>
      </TogglerProvider>
    </FirebaseProvider>
  );
}
