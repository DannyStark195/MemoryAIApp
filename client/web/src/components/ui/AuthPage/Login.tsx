import { LockIcon, EnvelopeIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="">
      <form action="" className="w-full">
        <div className="flex flex-col gap-4 mb-4">
          <div className="relative">
            <div className="absolute top-3 left-3">
              <EnvelopeIcon size={18} />
            </div>
            <input type="email" placeholder="Email" className="w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"  required/>
          </div>
          <div className="relative">
            <div className="absolute top-3 left-3">
              <LockIcon size={18}/>
            </div>
            <input type="password" placeholder="Password" className="w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0" required/>
          </div>
        </div>
        <Link to={"forgot-password"}>
          <p className="text-end hover:text-Accent transition-colors duration-200 cursor-pointer my-2 text-sm">forgot password?</p>
        </Link>
        <button type="submit" className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">Log in</button>
      </form>
    </div>
  )
}

export default Login