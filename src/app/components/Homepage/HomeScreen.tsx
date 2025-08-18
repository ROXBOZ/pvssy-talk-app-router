import HeaderBar from "../Header/TopBar";
import React from "react";

function HomeScreen() {
  return (
    <div className="flex flex-col h-[95vh] bg-gray-200">
      <HeaderBar />
      <div className="flex-1 flex items-center justify-center">HomeScreen</div>
    </div>
  );
}

export default HomeScreen;
