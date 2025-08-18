import ArticlesHeading from "./ArticlesHeading";
import Card from "../../Card";
import React from "react";

function ArticlesDirectory() {
  return (
    <div>
      <ArticlesHeading />
      <div className="customGrid">
        <Card showButton={false} />
        <Card showButton={false} />
        <Card showButton={false} />
        <Card showButton={false} />
        <Card showButton={false} />
        <Card showButton={false} />
      </div>
    </div>
  );
}

export default ArticlesDirectory;
