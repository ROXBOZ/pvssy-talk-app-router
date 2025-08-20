import "./styles/globals.css";

import Footer from "./components/Footer/Footer";

import HomeHero from "./components/Header/HomeHero";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="font-paragraph flex min-h-screen flex-col">
      <body className="flex min-h-screen flex-col">
        <HomeHero />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
