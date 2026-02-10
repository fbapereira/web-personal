import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Freelance Web Engineer – Minimal Studio";
const siteDescription =
  "Freelance web engineer designing and building fast, scalable, and thoughtful web platforms for people who care about doing things properly.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://example.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://example.com",
    siteName: siteTitle,
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

