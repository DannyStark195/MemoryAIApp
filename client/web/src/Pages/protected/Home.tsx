import Layout from "../../components/ui/protected/Layout.tsx"
import Header from "../../components/ui/protected/Header.tsx"
import { getHourOfDay } from "@client/shared/utils/helpers.ts"
// import NewFolderOptions from "../../components/ui/protected/LibraryPage/NewFolderOptions.tsx"
import { 
  // BellIcon,
  CaretLeftIcon, CaretRightIcon, OpenAiLogoIcon, PlusCircleIcon, ShareNetworkIcon, 
} from "@phosphor-icons/react"
import AddMemoryFlow from "../../components/ui/protected/AddMemoryFlow.tsx"
import { useState } from "react"

function Home() {
  const [addFilePanelOpen, setAddFilePanelOpen] = useState(false);
  function toggleAddFilePanel(){
    setAddFilePanelOpen(prev => !prev)
  }
  // const [newFolderOptionsOpen, setNewFolderOptionsOpen] = useState(false)
  // function toggleNewFolderOptions(){
  //     setNewFolderOptionsOpen(prev => !prev)
  //   }
  return (
    <Layout>
      <Header>
        <div className="flex flex-1 justify-between">
          <div>
            <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">
              Good {getHourOfDay()},
              <span className="text-Accent ml-1">
              Daniel
              </span> 
            </h1>
            {/* <p className="w-45 md:w-full text-sm">Your memories, always within reach.</p> */}
          </div>
          
        </div>
        
      </Header>
      <main className="overflow-y-scroll max-h-[84dvh]">
        <div className="grid justify-center">
          <div className="relative">
            <div className="w-82 xl:w-180 md:w-150 h-120 md:h-[80dvh] lg:h-[70dvh]  rounded-lg bg-Surface2 dark:bg-dark-Surface2">
              
            </div>
            {/* <div className="relative">
              <span className="text-Secondary-text dark:text-dark-Secondary-text cursor-pointer text-sm" onClick={toggleNewFolderOptions}>+ New Folder</span>
              <NewFolderOptions style={newFolderOptionsOpen? 'flex':'hidden'}/>
            </div> */}
            <div className="grid gap-4 absolute top-[30%] right-0 md:right-1 lg:-right-20">
                <button className="px-2 py-2 rounded-full transition-all duration-200 cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 hover:scale-110">
                  <ShareNetworkIcon size={30} weight="fill"/>
                </button>
                <button className="px-2 py-2 rounded-full transition-all duration-200 cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 hover:scale-110">
                  <OpenAiLogoIcon size={30} weight="fill"/>
                </button>
                <button onClick={toggleAddFilePanel} className="relative px-2 py-2 rounded-full cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2">
                  <PlusCircleIcon size={30} weight="fill"/>
                </button>
                <AddMemoryFlow style={addFilePanelOpen ? "flex" : "hidden"} />
            </div>
          </div>
          <div className="hidden mt-4 gap-6 lg:flex justify-center">
            <button className="py-2 px-2 rounded-full hover:bg-Surface2 dark:hover:bg-dark-Surface2 transition-all duration-200 cursor-pointer hover:scale-110">
              <CaretLeftIcon size={20} weight="regular"/>
            </button>
            <button className="py-2 px-2 rounded-full hover:bg-Surface2 dark:hover:bg-dark-Surface2 transition-all duration-200 cursor-pointer hover:scale-110">
              <CaretRightIcon size={20} weight="regular"/>
            </button>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
