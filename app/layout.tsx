import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammed Nizamudheen | Software developer",
  description: "Self-directed full-stack developer proficient in creating innovative web solutions. Skilled in both frontend and backend development with a creative approach to problem-solving. Also passionate about creating customised solutions for my clients.",
  keywords:'nizamudheen,Muhammed Nizamudheen,web developer,web development,software,software engineer',
  metadataBase: new URL('https://nizamudheen.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content='Muhammed Nizamudheen | Software developer' />
        <meta property="og:description" content='Self-directed full-stack developer proficient in creating innovative web solutions. Skilled in both frontend and backend development with a creative approach to problem-solving. Also passionate about creating customised solutions for my clients.' />
        <meta property="og:image" content='https://nizamudheen.com/opengraph-image.png' />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nizamudheen.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content='Muhammed Nizamudheen | Software developer' />
        <meta name="twitter:description" content='Self-directed full-stack developer proficient in creating innovative web solutions. Skilled in both frontend and backend development with a creative approach to problem-solving. Also passionate about creating customised solutions for my clients.' />
        <meta name="twitter:image" content='https://nizamudheen.com/opengraph-image.png' />
      </head>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </body>
    </html>
  );
}
