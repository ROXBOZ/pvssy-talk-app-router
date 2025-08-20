import "./styles/globals.css";

import Footer from "./components/Footer/Footer";

import HomeHero from "./components/Header/HomeHero";
import ButtonLink from "./components/UI/ButtonLink/ButtonLink";

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
        <div className="flex justify-center pt-24">
          <ButtonLink
            label="Retour aux articles"
            color="primary"
            href="#articles-directory"
          />
        </div>
        <Footer />
      </body>
    </html>
  );
}
