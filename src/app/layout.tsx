import "globals.css";

import { type Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { lazy } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const ElementSelector = lazy(() =>
  process.env.NODE_ENV === "development"
    ? import("@/components/ElementSelector")
    : Promise.resolve({ default: () => null }),
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Scalator X Ventures",
  description: "Sports. Health. Longevity.",
  icons: "https://vybe.build/vybe-icon.svg",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
    >
      <body className="min-h-screen bg-[#0a0a0a]">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <main>{children}</main>
          <Toaster richColors />
          <ElementSelector />
        </ThemeProvider>
      </body>
    </html>
  );
}
