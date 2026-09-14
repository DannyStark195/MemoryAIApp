import { type ReactNode } from "react"

function Layout({children}: {children: ReactNode}) {
  return (
    <div className="text-Primary-text px-8 py-10 dark:text-dark-Primary-text">
        {children}
    </div>
  )
}

export default Layout