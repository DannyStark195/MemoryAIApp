import Layout from "../Layout.tsx"
import BackButton from "../../BackButton.tsx"
import ChangePassword from "../../AuthPage/ChangePassword.tsx"
import { useState } from "react"

function PasswordSecurity() {
  const [passwordChangeFormOpen, setPasswordChangeFormOpen] = useState(false)

  function sendResetLink(){
    setPasswordChangeFormOpen(true)
  }
  return (
   <Layout>
     <div className="flex justify-between mb-8">
            <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">Password & Security</h1>
            <BackButton />
      </div>
      <main>
        <div>
          <h2>Change Password</h2>
          {
            !passwordChangeFormOpen? 
              <div>
                <p className="my-4 text-Secondary-text dark:text-dark-Secondary-text">A reset code will be sent to our email</p>
                <button onClick={sendResetLink} className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">
                    Send reset code
                </button>
              </div>
              :
                <ChangePassword email=""/>

          }
        </div>
      </main>
   </Layout>
  )
}

export default PasswordSecurity