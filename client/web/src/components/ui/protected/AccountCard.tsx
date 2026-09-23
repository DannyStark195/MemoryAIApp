import { useState } from 'react'
import { Link } from 'react-router-dom';
import profile from '../../../assets/profile.png'
import LogoutButton from './LogoutButton.tsx';
function AccountCard({open}:{open:boolean}) {
    const [accountCardOpen, setAccountCardOpen] =useState(false);
    function toggleAccountCard(){
        setAccountCardOpen(prev => !prev)
    }
  return (
    <div
        onClick={toggleAccountCard}
        className='relative hover:bg-Surface2 dark:hover:bg-dark-Surface transition-all duration-300 rounded-lg p-2 cursor-pointer'>
        <div className='flex gap-2'>
            <div className="">
                <img src={profile} alt="profile picture" className='w-10 h-10 rounded-full'/>
            </div>
            <div className={`${open?"":"hidden"}`}>
                <p className='text-sm'>Daniel Okafor</p>
                <p className='text-sm text-Secondary-text dark:text-dark-Secondary-text'>Free</p>
            </div>
        </div>

        <div className={`absolute -top-28 -right-48 w-42 py-3 px-3 rounded-md bg-Background dark:bg-dark-Surface shadow-Border shadow-lg dark:shadow-none ${accountCardOpen? '': 'hidden'}`}>
            <Link to={"/settings"}>
                <div className='flex gap-2 border-b p-2 border-Surface2 dark:border-dark-Surface2 hover:bg-Surface2 dark:hover:bg-dark-Surface2 transion-all duration-200 rounded-md'>
                    <div className="">
                        <img src={profile} alt="profile picture" className='w-8 h-8 rounded-full'/>
                    </div>
                    <div>
                        <p className='text-sm'>Daniel Okafor</p>
                        <p className='text-sm text-Secondary-text dark:text-dark-Secondary-text'>Free</p>
                    </div>
                </div>
            </Link>
            <div className='mt-3 text-sm  w-full hover:bg-Surface2 dark:hover:bg-dark-Surface2 transion-all p-2 duration-200 rounded-md'>
                <LogoutButton />
            </div>
        </div>
    </div>
  )
}

export default AccountCard