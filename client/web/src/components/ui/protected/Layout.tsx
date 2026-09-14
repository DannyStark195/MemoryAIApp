import { type ReactNode } from "react"

function Layout({children}: {children: ReactNode}) {
  return (
    <div className="text-Primary-text px-8 py-10">
        {children}
    </div>
  )
}

export default Layout