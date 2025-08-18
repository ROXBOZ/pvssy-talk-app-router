"use client";

import HomeScreen from "../Homepage/HomeScreen";
import React from "react";
import TopBar from "./TopBar";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return <>{isHome ? <HomeScreen /> : <TopBar />}</>;
}

export default Header;
