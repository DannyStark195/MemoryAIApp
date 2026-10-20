import { useState } from "react"
import Logo from "../components/ui/Logo"
import { EnvelopeIcon} from "@phosphor-icons/react"
import Layout from "../components/ui/Layout.tsx"
import ChangePassword from "../components/ui/AuthPage/ChangePassword.tsx"
import { useToast } from "../context/ToastContext.tsx"
function VerifyOtp() {
  const [forgotPasswordTab, setforgotPasswordTab] = useState(true)
  const {showToast} = useToast()
  function sendCode(){
    setforgotPasswordTab(false)
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
              <h2 className="text-xl lg:text-5xl font-semibold mt-1 lg:mb-2">Memorii</h2>
              <p className="lg:text-lg">Your memories organized beautifully.</p>
            </div>
          </div>
          <div className="lg:flex-1 flex items-center justify-center ">
            <div>
              
              <div className="w-85 md:w-100">
                {forgotPasswordTab? (
                  <div>
                    <h2 className="text-3xl font-bold mb-2 ">Verify Code</h2>
                    <p className="mb-10 text-Secondary-text dark:text-dark-Secondary-text">Enter your email and we'll send you a reset code.</p>

                     <form action="" className="w-full">
                      <div className="flex flex-col gap-4 mb-4">
                        <div className="relative">
                          <div className="absolute top-3 left-3">
                            <EnvelopeIcon size={18} />
                          </div>
                          <input type="email" placeholder="Email" className="w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"/>
                        </div>
                      </div>
                      <button type="button" onClick={sendCode} className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">Send Code</button>
                    </form>
                    <p className="mt-4 text-sm">Didn't recieve code? <button onClick={()=>{showToast({type:"success", message:"Verification code resent!"})}} className="text-Accent font-medium cursor-pointer">Resend code</button></p>
                  </div>
                ):(
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Change password</h2>
                    <p className="mb-10 text-Secondary-text dark:text-dark-Secondary-text">Enter a new password</p>
                    <div>
                      <ChangePassword email={"dannystark195@gmail.com"}/>
                    </div>
                  </div>
                )}
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default VerifyOtp