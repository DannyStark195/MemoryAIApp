import BackButton from "../../BackButton"
import Layout from "../Layout"
import profilePic from '../../../../assets/profile.png'
import { UserIcon } from "@phosphor-icons/react"
import LogoutButton from "../LogoutButton"
import React, { useEffect, useState } from "react"
function AccountInfo() {
    const [accountNameInput, setAccountNameInput] = useState('Daniel Okafor')
    const [isChangingName, setIsChangingName] = useState(false);

    function ChangingAccountName(e:React.ChangeEvent<HTMLInputElement>) {
        setAccountNameInput(e.target.value);
        if(!isChangingName){
            setIsChangingName(true)
        }
        console.log("is typing")
    }

    useEffect(()=>{
        if(!accountNameInput){
            setIsChangingName(false)
        }

        const delayTimer = setTimeout(()=>{
            setIsChangingName(false)
        }, 5000)

        return () => clearTimeout(delayTimer)
    }, [accountNameInput])


  return (
    <Layout>
        <div className="flex justify-between mb-8">
            <h1 className="text-xl md:text-xl font-medium leading-wider mb-4">Account Info</h1>
            <BackButton />
        </div>
        <main>
            <div className="flex justify-center">
                <div className="flex flex-col items-center">
                    <div className="mb-2">
                        <img src={profilePic} alt="profile picture" className="w-30 h-30 rounded-full object-cover"/>
                    </div>
                    <h2 className="font-semibold text-xl">Daniel Okafor</h2>
                    <p className="text-Secondary-text dark:text-dark-Secondary-text">dannystark195@gmail.com</p>
                    <div className="flex justify-center gap-2 my-4">
                        <div className="px-4 flex flex-col items-center">
                            <p className="text-lg font-semibold">128</p>
                            <p>Memories</p>
                        </div>
                        <div className="px-4 flex flex-col items-center border-r border-l">
                            <p className="text-lg font-semibold">12</p>
                            <p>Folders</p>
                        </div>
                        <div className="px-4 flex flex-col items-center">
                            <p className="text-lg font-semibold">30</p>
                            <p>Favourites</p>
                        </div>
                    </div>
                    <div className="relative mt-4 mb-12 flex gap-2">
                        <div className="absolute top-3 left-3">
                            <UserIcon size={18}/>
                        </div>
                        <input 
                            type="text" placeholder={`Daniel Okafor`} 
                            className="w-full py-2 px-2 pl-10 rounded-md"
                            onChange={ChangingAccountName}
                            value={accountNameInput}
                        />
                        <button className={`${isChangingName? '':'hidden'} bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text text-sm font-semibold px-4 rounded-4xl cursor-pointer hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300`}>
                            Save
                        </button>
                    </div>
                    <div className="text-red-900 cursor-pointer border border-Surface2 dark:border-dark-Surface2 hover:bg-Surface dark:hover:bg-dark-Surface w-full p-2 rounded-lg flex justify-center transition-all duration-300">
                        <LogoutButton/>
                    </div>
                </div>
            </div>
        </main>
    </Layout>
  )
}

export default AccountInfo