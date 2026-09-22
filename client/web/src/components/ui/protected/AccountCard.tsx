import profile from '../../../assets/profile.png'

function AccountCard() {
  return (
    <div className='relative hover:bg-Surface dark:hover:bg-dark-Surface transition-all duration-300 rounded-lg p-2 cursor-pointer'>
        <div className='flex gap-2'>
            <div className="">
                <img src={profile} alt="profile picture" className='w-10 h-10 rounded-full'/>
            </div>
            <div>
                <p className='text-sm'>Daniel Okafor</p>
                <p className='text-sm text-Secondary-text dark:text-dark-Secondary-text'>Free</p>
            </div>
        </div>

        <div className='absolute -top-12 py-4 px-4 rounded-md bg-Surface dark:bg-dark-Surface'>
            <div className='flex gap-2 border-b pb-1 border-Border dark:border-dark-Surface2'>
                <div className="">
                    <img src={profile} alt="profile picture" className='w-8 h-8 rounded-full'/>
                </div>
                <div>
                    <p className='text-sm'>Daniel Okafor</p>
                    <p className='text-sm text-Secondary-text dark:text-dark-Secondary-text'>Free</p>
                </div>
            </div>
            <div className='mt-3 text-sm'>
                <SignOutIcon size={18} weight="bold" />
                Log out
            </div>
        </div>
    </div>
  )
}

export default AccountCard