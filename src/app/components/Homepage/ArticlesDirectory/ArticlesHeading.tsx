import ArticleFilters from "./ArticleFilters";
import React from "react";

function Heading() {
  return (
    <div className="customGrid py-8 items-baseline">
      <div className="col-start-1 col-end-6 lg:col-end-3">
        <h2 className="text-3xl font-heading">S’informer sur ses douleurs</h2>
      </div>
      <div className="col-start-1 lg:col-start-3 col-end-6 flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto
          quaerat, laborum consequatur alias quas accusamus laudantium illo id.
          Sit, magni harum? Voluptatibus deleniti ut, nobis voluptatum itaque
          delectus distinctio.
        </p>
        <ArticleFilters />
      </div>
    </div>
  );
}

export default Heading;
