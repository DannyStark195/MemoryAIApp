import Layout from "../Layout"
import BackButton from "../../BackButton"
import Logo from "../../Logo"
import { Link } from "react-router-dom"

function About() {
  return (
    <Layout>
      <div className="flex justify-end mb-8">
                  {/* <h1 className="text-xl md:text-xl font-medium leading-wider mb-4">About</h1> */}
                  <BackButton />
              </div>
              <main>
                  <div className="flex flex-col items-center justify-center mb-4">
                     <div>
                        <Logo classname="w-20"/>
                     </div>
                      <h2 className="text-2xl font-semibold mt-2">Memorii</h2>
                      <p className="mb-1 text-Secondary-text dark:text-dark-Secondary-text">Your Memories organized beautifully</p>
                      <p className="text-Secondary-text dark:text-dark-Secondary-text text-sm">Version 1.0.0</p>
                  </div>
                  <div className="md:px-0">
                    <p className="text-center mb-10">Memorii helps you rediscover the things you've saved by bringing meaningful memories to you at the right time.</p>
                    <div className="overflow-y-auto max-h-[60dvh] no-scrollbar">
                        <div>
                          <Link to={"/privacy-policy"}>
                            <div  className="flex items-center justify-between w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-4">Privacy Policy</div>
                          </Link>
                          <Link to={"/terms-of-service"}>
                            <div  className="flex items-center justify-between w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-4">Terms of service</div>
                          </Link>
                        </div>
                        <div>
                          <Link to={"/"}>
                            <div  className="flex items-center justify-between w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-4">Website</div>
                          </Link>
                          <Link to={"/contact"}>
                            <div  className="flex items-center justify-between w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-4">Contact support</div>
                          </Link>
                        </div>
                    </div>
                  </div>
              </main>
    </Layout>
  )
}

export default About