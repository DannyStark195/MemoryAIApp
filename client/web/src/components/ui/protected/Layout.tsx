import { type ReactNode } from "react"
import Navbar from "./Navbar.tsx"

function Layout({children}: {children: ReactNode}) {
  return (
    <div className="text-Primary-text dark:text-dark-Primary-text md:flex flex-row-reverse justify-end relative min-h-screen">
        <div className="flex-1 px-8 pt-8 pb-6">
          {children}
        </div>
        <Navbar />
    </div>
  )
}

export default Layout