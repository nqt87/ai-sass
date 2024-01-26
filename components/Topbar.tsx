"use client";

import { Button } from "./ui/button";
import Logo from "./Logo";
import { Menu } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebar-store";

const Topbar = () => {
  const { handleOpenOrClose } = useSidebarStore();
  return (
    <div
      className={cn(
        "flex items-center p-4 justify-between sticky top-0",
        "lg:hidden"
      )}
    >
      <Logo />
      <Button variant="ghost" size={"icon"} onClick={handleOpenOrClose}>
        <Menu />
      </Button>
    </div>
  );
};

export default Topbar;
