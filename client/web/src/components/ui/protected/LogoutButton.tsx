import { SignOutIcon } from "@phosphor-icons/react"
function LogoutButton() {
    function logOut(){
        console.log("logged out")
        
    }
  return (
    <button
        className="flex gap-1 items-center justify-center cursor-pointer"
        onClick={logOut}
        type="button"
        aria-label="logout"
    >
        <SignOutIcon size={16} weight="bold" />
        Log out
    </button>
  )
}

export default LogoutButton