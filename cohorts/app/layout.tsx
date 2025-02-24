"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider/index.web";
const inter = Inter({ subsets: ["latin"] });
import StyledJsxRegistry from "../registry";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledJsxRegistry>
          <GluestackUIProvider mode="light" mode="light">
            {children}
          </GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
