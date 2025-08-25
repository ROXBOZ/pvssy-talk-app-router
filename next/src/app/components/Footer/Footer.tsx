import FooterNav from "./FooterNav";
import React from "react";
import Sponsors from "./Sponsors";

function Footer() {
  return (
    <>
      <Sponsors />
      <footer className="bg-primary-300 flex flex-col justify-between gap-12 p-4 py-12 md:flex-row">
        <div>
          <h2 className="typography__heading text-2xl">Collab</h2>
          <h2 className="typography__heading text-2xl">Newsletter</h2>
        </div>
        <FooterNav />
      </footer>
    </>
  );
}

export default Footer;
