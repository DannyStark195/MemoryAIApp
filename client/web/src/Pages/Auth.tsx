import { useState } from "react"
import Logo from "../components/ui/Logo"
import Login from "../components/ui/AuthPage/Login.tsx"
import Signup from "../components/ui/AuthPage/Signup.tsx"
import Layout from "../components/ui/Layout.tsx"

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
        <div className="flex items-center justify-center min-h-dvh">
          <div>
            <div>
              <div>
                <Logo classname="w-20"/>
              </div>
              <h2>Memorii</h2>
              <p>Your memories organized beautifully</p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h2
                  onClick={openLoginTab}
                >
                  Log in
                </h2>
                <h2
                  onClick={closeLoginTab}
                >Sign up</h2>
              </div>
              <div>
                {loginTabOpen? <Login />:<Signup/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Auth