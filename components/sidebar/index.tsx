"use client"
interface SidebarProps {
  className?: string;
  isProPlan?: boolean;
  userLimitCount: number;
}

import { UserButton, useUser } from "@clerk/nextjs";

import Logo from "../Logo";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "../ui/progress";
import React from "react";
import SidebarToggle from "./sidebar-toggle";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebar-store";

const SideBar = ({ className, isProPlan, userLimitCount }: SidebarProps) => {
  const { isMinimal } = useSidebarStore();
  const { user } = useUser();
  
  return (
    <div className={cn("text-white", className)}>
      <div className="h-20 pl-7 pr-6">
        <div className="flex items-center justify-between w-full">
          {!isMinimal && <Logo />}
          <SidebarToggle />
        </div>
      </div>
      <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
        {/* <Navbar /> */}
      </div>
      <div className="mb-4 p-4 rounded-lg bg-gray-900">
          <div className="mb-4 flex items-center">
            <UserButton />
            {
              !isMinimal &&
              <span className="text-sm ml-4">
                {user?.emailAddresses?.[0]?.emailAddress}
              </span>
            }
          </div>
          {
            !isMinimal &&
            <div className="border-t border-t-gray-950 pt-2">
              <div className="mb-4">
                <div className="text-center mb-2 text-muted-foreground font-semibold">
                  1/{MAX_FREE_COUNTS} Free Generations
                </div>
                <Progress
                  value={10}
                  className="bg-gray-950 h-3"
                  indicatorClassName="gradient-btn"
                />
              </div>
{/* 
              <Link href="/pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white w-full font-semibold hover:text-white border-none gradient-btn">
                  <span className="mr-2">Upgraded to Pro</span>
                  <Sparkles />
                </Button>
              </Link> */}
            </div>
          }
        </div>
    </div>
  );
};

export default SideBar;
