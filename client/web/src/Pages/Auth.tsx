import { useState } from "react"
import Logo from "../components/ui/Logo"
import Login from "../components/ui/AuthPage/Login.tsx"
import Signup from "../components/ui/AuthPage/Signup.tsx"
import Layout from "../components/ui/Layout.tsx"
import GoogleButton from "../components/ui/AuthPage/GoogleButton.tsx"
import FacebookButton from "../components/ui/AuthPage/FacebookButton.tsx"
import AppleButton from "../components/ui/AuthPage/AppleButton.tsx"

function Auth() {
  const [loginTabOpen, setLoginTabOpen] = useState(true)
  function openLoginTab(){
    setLoginTabOpen(true)
  }
  function closeLoginTab(){
    setLoginTabOpen(false)
  }
  return (
    <Layout >
      <div>
        <div className="flex flex-col justify-center gap-4 lg:justify-start lg:flex-row min-h-dvh">
          <div className="lg:w-[50%] lg:flex items-center justify-center mb-4">
            <div className="flex flex-col items-center">
              <div>
                <Logo classname="w-20 lg:w-50"/>
              </div>
              <h2 className="text-2xl lg:text-5xl font-semibold mt-1 lg:mb-2">Memorii</h2>
              <p className="lg:text-lg">Your memories organized beautifully.</p>
            </div>
          </div>
          <div className="lg:flex-1 flex items-center justify-center ">
            <div>
              <div className="relative mb-8 flex justify-between gap-10 lg:gap-5 mx-4 md:mx-auto rounded-lg border border-Border dark:border-dark-Border py-3 px-16 lg:border-0">
                <h2
                  onClick={openLoginTab}
                  className={`text-lg lg:text-2xl font-medium cursor-pointer relative z-1 ${loginTabOpen?'text-dark-Primary-text':'text-Primary-text dark:text-dark-Primary-text'} lg:text-Primary-text dark:lg:text-dark-Primary-text`}
                >
                  Log in
                </h2>
               
                <h2
                  onClick={closeLoginTab}
                  className={`text-lg lg:text-2xl font-medium cursor-pointer relative z-1 ${loginTabOpen?'text-Primary-text dark:text-dark-Primary-text':'text-dark-Primary-text'} lg:text-Primary-text dark:lg:text-dark-Primary-text`}
                >
                  Sign up
                </h2>
                <div className={`h-13 w-42 lg:h-0.75 rounded-lg lg:w-45 lg:rounded-full bg-Accent absolute bottom-0 ${loginTabOpen? 'left-0':'right-0'} transition-all duration-900`}>
                </div>
              </div>
              <div className="w-85 md:w-100">
                {loginTabOpen? <Login />:<Signup/>}
                 <div className="text-center text-sm text-Secondary-text my-4 relative before:absolute before:top-[50%] before:left-0 before:w-[35%] before:h-0.5 before:bg-Surface2 dark:before:bg-dark-Surface2 before:content-[''] after:absolute after:top-[50%] after:right-0 after:w-[35%] after:h-0.5 after:bg-Surface2 dark:after:bg-dark-Surface2 after:content-['']">
                    or continue with
                  </div>
                  <div className="flex justify-center gap-2">
                    <GoogleButton/>
                    <FacebookButton />
                    <AppleButton />
                  </div>

                   
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Auth