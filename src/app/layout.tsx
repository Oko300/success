import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "success | MCP Tools & Software",
  description:
    "Statistics student building MCP servers, data pipelines, and AI tools. Exploring ideas and shipping real software.",
  keywords: [
    "MCP",
    "Model Context Protocol",
    "AI tools",
    "Python",
    "Full-stack Dev",
    "Statistics",
    "success",
    "Oko300",
  ],
  authors: [{ name: "success" }],
  openGraph: {
    title: "success | MCP Tools & Software",
    description:
      "Statistics student building MCP servers, data pipelines, and AI tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
