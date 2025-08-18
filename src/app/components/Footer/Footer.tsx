import FooterNav from "./FooterNav";
import React from "react";
import Sponsors from "./Sponsors";

function Footer() {
  return (
    <>
      <Sponsors />
      <footer
        aria-label="Footer"
        className="bg-gray-300 py-12 p-4 flex flex-col md:flex-row gap-12 justify-between"
      >
        <div>
          <h2 className="font-heading text-2xl">Collab</h2>
          <h2 className="font-heading text-2xl">Newsletter</h2>
        </div>
        <FooterNav />
      </footer>
    </>
  );
}

export default Footer;
