import { BellIcon } from "@phosphor-icons/react"

function NotificationBell() {
  return (
    <div className="cursor-pointer rounded-full p-2 hover:bg-Surface2 dark:hover:bg-dark-Surface2">
        <BellIcon size={18}/>
    </div>
  )
}

export default NotificationBell