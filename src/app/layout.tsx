import { Manrope, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import BottomTabBar from "@/components/layout/BottomTabBar";
import PageShell from "@/components/layout/PageShell";
import { ToastProvider } from "@/components/ui/Toast";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <ToastProvider>
          <Navbar />
          <PageShell>{children}</PageShell>
          <BottomTabBar />
        </ToastProvider>
      </body>
    </html>
  );
}
