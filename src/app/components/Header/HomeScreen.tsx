import HeaderBar from "../Header/TopBar";
import React from "react";

function HomeScreen() {
  return (
    <div className="flex h-[95vh] flex-col bg-violet-300">
      <HeaderBar />
      <div className="flex flex-1 flex-col items-center justify-center p-4 lg:flex-row">
        <div className="flex-1">img</div>
        <h1 className="font-heading flex-1 text-6xl lg:text-8xl">
          avoir mal n’est pas normal.
        </h1>
      </div>
    </div>
  );
}

export default HomeScreen;
