import Card from "../UIElements/Card";
import React from "react";

function PagesDirectory() {
  return (
    <section>
      <div className="p-4">
        <h2 className="font-heading text-3xl">Lorem Ipsum</h2>
      </div>
      <div className="customGrid">
        <Card showButton={true} />
        <Card showButton={true} />
        <Card showButton={true} />
      </div>
    </section>
  );
}

export default PagesDirectory;
