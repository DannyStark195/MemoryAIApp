import { LockIcon, EnvelopeIcon, PasswordIcon } from "@phosphor-icons/react"

function ChangePassword({email}:{email:string}) {
  return (
    <form className="my-4 flex flex-col gap-4">
        <div className="relative">
            <div className="absolute top-3 left-3">
            <EnvelopeIcon size={18} />
            </div>
            <input type="email" placeholder="Email" value={email} className="w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"  required/>
        </div>
         <div className="relative">
            <div className="absolute top-3 left-3">
            <PasswordIcon size={18} />
            </div>
            <input type="password" placeholder="Code" className="w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"/>
        </div>
        <div className="relative">
            <div className="absolute top-3 left-3">
            <LockIcon size={18}/>
            </div>
            <input type="password" placeholder="New password" className="w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"/>
        </div>
        <div className="relative">
            <div className="absolute top-3 left-3">
            <LockIcon size={18}/>
            </div>
            <input type="password" placeholder="Confirm New password" className="w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"/>
        </div>
        <button className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">
            Change password
        </button>
    </form>
  )
}

export default ChangePassword