import React from 'react'
import { UserButton } from "@clerk/nextjs";
const LandingPage = () => {
  return (
    <>
      <div>LandingPage</div>
      <div className="h-screen">
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default LandingPage;