import Layout from "../components/ui/Layout"
import { Link } from "react-router-dom"
function NotFound() {
  return (
    <Layout>
      <div className="text-Tertiary-text text-center dark:text-dark-Tertiary-text/50 font-extrabold flex flex-col items-center lg:justify-center h-[80dvh] md:h-screen">
        <div className="text-[40px] md:text-[400px] lg:text-[460px] leading-tight">404</div>
      </div>
      <div className="fixed top-0 w-full h-full bg-black/70 flex items-center justify-center">
        <div className="bg-Background dark:bg-dark-Background px-6 py-6 rounded-lg">
          <h1 className="text-6xl font-medium">404</h1>
          <p className="mt-2">Page not found</p>
          <p className="mb-3">We could not find the page you requested.</p>
          <div>
            <Link to={"/"}>
              <button className={`bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text text-sm font-semibold py-1.5 px-2 rounded-lg cursor-pointer hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300 `}>
                Go home
                </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound