import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farrux va Sabina | Nikoh to'yi",
  description: "Farrux va Sabinaning nikoh to'yiga taklifnoma.",
  applicationName: 'Farrux va Sabina',
  icons: { icon: '/favicon.ico', apple: '/apple-icon' },
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    title: "Farrux va Sabina | Nikoh to'yi",
    description: "Farrux va Sabinaning nikoh to'yiga taklifnoma.",
    siteName: 'Farrux va Sabina',
  },
  twitter: {
    card: 'summary',
    title: "Farrux va Sabina | Nikoh to'yi",
    description: "Farrux va Sabinaning nikoh to'yiga taklifnoma.",
  },
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'Farrux va Sabina' },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: '#090806' };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="h-full antialiased">
      <body className="min-h-full bg-[#090806]">{children}</body>
    </html>
  );
}
