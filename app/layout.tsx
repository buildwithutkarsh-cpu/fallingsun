import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Falling Sun 2026",
  description: "Falling Sun — a teen hackathon for ages 13–18.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
