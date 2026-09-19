import Layout from "../../components/ui/protected/Layout.tsx"
import Header from "../../components/ui/protected/Header.tsx"
import SearchBar from "../../components/ui/protected/SearchBar.tsx"
import QuickCaptureCard from "../../components/ui/protected/Home/AddFile.tsx"
import { getHourOfDay } from "../../utils/helpers.ts"
import { Type } from "lucide-react"
import { 
  CaretLeftIcon, CaretRightIcon, OpenAiLogoIcon, PlusCircleIcon, ShareNetworkIcon, 
} from "@phosphor-icons/react"
import AddFile from "../../components/ui/protected/Home/AddFile.tsx"
import { useState } from "react"

function Home() {
  const [addFilePanelOpen, setAddFilePanelOpen] = useState(false);
  function toggleAddFilePanel(){
    setAddFilePanelOpen(prev => !prev)
  }
  return (
    <Layout>
      <Header>
        <div>
          <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">
            Good {getHourOfDay()},
            <span className="text-Accent ml-1">
            Daniel
            </span> 👋
          </h1>
          <p className="w-45 md:w-full text-sm ml-2">Your memories, always within reach.</p>
        </div>
      </Header>
      {/* <Navbar /> */}
      <main>
        <div className="grid justify-center">
          <div className="relative">
            <div className="w-90 xl:w-180 md:w-150 h-100 md:h-[80dvh] lg:h-[67dvh]  rounded-lg bg-Surface2 dark:bg-dark-Surface2">
              
            </div>
            <div className="grid gap-4 absolute top-[30%] right-0 md:right-1 lg:-right-20">
                <div className="px-2 py-2 rounded-full transition-all duration-200 cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 hover:scale-110">
                  <ShareNetworkIcon size={30} weight="fill"/>
                </div>
                <div className="px-2 py-2 rounded-full transition-all duration-200 cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 hover:scale-110">
                  <OpenAiLogoIcon size={30} weight="fill"/>
                </div>
                <div onClick={toggleAddFilePanel} className="relative px-2 py-2 rounded-full transition-all duration-200 cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 hover:scale-110">
                  <PlusCircleIcon size={30} weight="fill"/>
                  <AddFile style={`${addFilePanelOpen? 'flex': 'hidden'}`}/>
                </div>
            </div>
          </div>
          <div className="hidden mt-4 gap-6 lg:flex justify-center">
            <div className="py-2 px-2 rounded-full hover:bg-Surface2 dark:hover:bg-dark-Surface2 transition-all duration-200 cursor-pointer hover:scale-110">
              <CaretLeftIcon size={20} weight="regular"/>
            </div>
            <div className="py-2 px-2 rounded-full hover:bg-Surface2 dark:hover:bg-dark-Surface2 transition-all duration-200 cursor-pointer hover:scale-110">
              <CaretRightIcon size={20} weight="regular"/>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home