import React, { ReactNode } from 'react'

import Sidebar from '@/components/sidebar';
import Topbar from '@/components/Topbar'
import { cn } from '@/lib/utils'

const DashboardLayout = ({children} : {children: ReactNode }) => {
  return (
    <div>
      <header>
        <Topbar />
      </header>
      <main
        className={cn(
          "lg:bg-gray-950 lg:overflow-hidden lg:pl-80 lg:pr-7 lg:py-7 [&:has([is-navbar-minimal])]:lg:pl-20",
          "bg-gray-950"
        )}
      >
        <Sidebar userLimitCount={0}/>
      </main>
      {children}
    </div>
  );
}

export default DashboardLayout