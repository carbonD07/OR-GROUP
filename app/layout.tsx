import type React from "react"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import { Suspense } from "react"
import "./globals.css"
import LoadingTransition from "@/components/loading-transition"
import ThemeRegistry from "./ThemeRegistry"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "OR GROUP - Efficient AI Solutions for Smarter Businesses",
  description:
    "AI-powered solutions to enhance productivity, streamline business operations, and improve customer interactions.",
    generator: 'v0.dev'
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <LoadingTransition />
        </Suspense>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

// import './globals.css'