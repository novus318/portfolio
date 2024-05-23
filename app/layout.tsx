import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammed Nizamudheen | Software developer",
  description: "Self-directed full-stack developer proficient in creating innovative web solutions. Skilled in both frontend and backend development with a creative approach to problem-solving. Also passionate about creating customised solutions for my clients.",
  keywords:'nizamudheen,Muhammed Nizamudheen,web developer,web development,software,software engineer',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
