import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Circumvent MB",
  description: "Nothing to say",
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
