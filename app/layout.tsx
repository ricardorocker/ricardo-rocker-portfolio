import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Nav } from "@/components/shared/nav";
import { Footer } from "@/components/shared/footer";
import { LenisProvider } from "@/components/motion/lenis-provider";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import "@/styles/globals.css";
import { ricardo } from "@/lib/ricardo";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: `${ricardo.name} — ${ricardo.role}`,
  description: ricardo.bio.short,
  keywords: ["full-stack engineer", "n8n automation", "Python scripts", "landing page", "Next.js", "TypeScript", "React", "web performance", "workflow automation"],
  authors: [{ name: ricardo.name }],
  openGraph: {
    title: `${ricardo.name} — ${ricardo.role}`,
    description: ricardo.bio.short,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${ricardo.name} — ${ricardo.role}`,
    description: ricardo.bio.short,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <ScrollProgress />
          <LenisProvider>
            <Nav />
            <main>{children}</main>
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
