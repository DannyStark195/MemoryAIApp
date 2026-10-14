import { PlayCircleIcon, BugBeetleIcon, ChatTextIcon, LightbulbIcon, EnvelopeIcon } from "@phosphor-icons/react"
import BackButton from "../../BackButton.tsx"
import Layout from "../Layout.tsx"

function Help() {
  return (
     <Layout>
      <div className="flex justify-between mb-8">
        <h1 className="text-xl md:text-xl font-medium leading-wider">Help & FeedBack</h1>
        <BackButton />
      </div>
      <main className="mt-8 overflow-y-auto max-h-[78dvh] no-scrollbar">
        <div>
          <h2 className="font-medium text-lg">Help</h2>
            <div className="my-4">
              <a href={"https://memoryaiapp.pxxl.click"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-3">
                <PlayCircleIcon size={24} className="text-Accent"/>
                <span>Get Started</span>
              </a>
            </div>
        </div>
         <div>
          <h2 className="font-medium text-lg">Feedback</h2>
            <div className="my-4">
              <a href={"https://wa.me/2348101836183"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-3">
                <BugBeetleIcon size={24} className="text-Accent"/>
                <span>Report a problem</span>
              </a>
               <a href={"https://wa.me/2348101836183"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-3">
                  <ChatTextIcon size={24} className="text-Accent"/>
                  <span>Send feedback</span>
              </a>
               <a href={"https://wa.me/2348101836183"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-3">
                  <LightbulbIcon size={24} className="text-Accent"/>
                  <span>Suggest a feature</span>
              </a>
            </div>
        </div>
         <div>
          <h2 className="font-medium text-lg">Contact</h2>
            <div className="my-4">
              <a href={"https://wa.me/2348101836183?text=Hi%2C%20I%20how%20to%20can%20I%20help"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-3">
                <EnvelopeIcon size={24} className="text-Accent"/>
                <span>Contact support</span>
              </a>
            </div>
        </div>


      </main>
   </Layout>
  )
}

export default Help