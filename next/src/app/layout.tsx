import "./styles/globals.css";

import CustomLink from "./components/UI/CustomLink/CustomLink";
import Footer from "./components/Footer/Footer";
import HomeHero from "./components/Header/HomeHero";

export const metadata = {
  title: "pvssy talk version 3 is a demo for coding best practices",
};

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
          <CustomLink href="#articles-directory">
            Retour aux articles
          </CustomLink>
        </div>
        <Footer />
      </body>
    </html>
  );
}
