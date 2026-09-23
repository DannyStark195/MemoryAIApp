import { type ReactNode } from "react"
import Navbar from "./Navbar.tsx"

function Layout({children}: {children: ReactNode}) {
  return (
    <div className="text-Primary-text dark:text-dark-Primary-text md:flex flex-row-reverse justify-end relative min-h-[80dvh] overflow-y-hidden">
        <div className="flex-1 px-4 pt-4 md:px-8 md:pt-8 pb-6">
          {children}
        </div>
        <Navbar />
    </div>
  )
}

export default Layout