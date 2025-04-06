import { type Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";

import "@/assets/css/globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";

const madefor = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Recruitify",
  description: "Launch Your Recruitment Website in Minutes, Not Months",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("antialiased", madefor.className)}>
      <body>
        <TRPCReactProvider>
          <Navbar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
