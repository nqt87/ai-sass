"use client"

import { Button } from "../ui/button";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebar-store";

const SidebarToggle = () => {
  const {isMinimal, handleChangeSideBar, handleOpenOrClose} = useSidebarStore();

  return (
    <div>
      <div
        className={cn("cursor-pointer hidden", "lg:block")}
        onClick={handleChangeSideBar}
        is-navbar-minial={isMinimal}
      >
        <Image src={`icons/menu-${isMinimal ? "open" : "close"}.svg`} width={24} height={24} alt="navbar icon"/>
      </div>
      <Button variant={"ghost"} size={"icon"} onClick={handleOpenOrClose} className={"lg:hidden"}><X /></Button>
    </div>
  );
}

export default SidebarToggle