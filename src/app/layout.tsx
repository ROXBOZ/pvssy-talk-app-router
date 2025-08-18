import "./styles/globals.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="flex min-h-screen flex-col">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
