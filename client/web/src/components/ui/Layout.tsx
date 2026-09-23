import { type ReactNode } from "react"

function Layout({children}: {children: ReactNode}) {
  return (
    <div className="min-h-dvh">
        {children}
    </div>
  )
}

export default Layout