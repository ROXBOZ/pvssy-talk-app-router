import "./styles/globals.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { headers } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Use Next.js headers to get the current pathname on the server
  const headerList = await headers();
  const pathname = headerList.get("x-invoke-path") || "/";
  const isHome = pathname === "/";

  return (
    <html lang="fr" className="font-paragraph flex min-h-screen flex-col">
      <body className="flex min-h-screen flex-col">
        <Header isHome={isHome} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
