import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/navbar/Navbar";

const inter = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devjobs App",
  description: "An app to search for developer jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar></Navbar>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
