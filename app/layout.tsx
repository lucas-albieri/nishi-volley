import type React from "react"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const _workSans = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucas | Vôlei",
  description: "Jogador de vôlei versátil inspirado em Nishinoya. Defesas criativas, levantadas e cortadas - explorando todas as posições da quadra.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
