import { SignOutIcon } from "@phosphor-icons/react"
function LogoutButton() {
    function logOut(){
        console.log("logged out")
        
    }
  return (
    <div
        className="flex gap-1 items-center"
        onClick={logOut}
    >
        <SignOutIcon size={16} weight="bold" />
        Log out
    </div>
  )
}

export default LogoutButton