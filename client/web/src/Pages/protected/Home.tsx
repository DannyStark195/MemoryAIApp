import Layout from "../../components/ui/protected/Layout.tsx"
import Header from "../../components/ui/protected/Header.tsx"
import SearchBar from "../../components/ui/protected/SearchBar.tsx"
import QuickCaptureCard from "../../components/ui/protected/Home/QuickCaptureCard.tsx"
import { getHourOfDay } from "../../utils/helpers.ts"
import { Type } from "lucide-react"
import { CameraIcon, FilePdfIcon, ImageIcon, OpenAiLogoIcon, PlusCircleIcon, ShareNetworkIcon, TextTIcon, WaveformIcon } from "@phosphor-icons/react"

function Home() {
  
  return (
    <Layout>
      <Header>
        <div>
          <h1 className="text-xl md:text-2xl font-medium leading-wider mb-2">
            Good {getHourOfDay()},
            <span className="text-Accent ml-1">
            Daniel
            </span> 👋
          </h1>
          <p className="w-45 md:w-full text-sm ml-2">Your memories, always within reach.</p>
        </div>
        <SearchBar placeHolder="Search your memories..."/>
      </Header>
      {/* <Navbar /> */}
      <main>
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-75 md:w-150 h-100 rounded-lg bg-Surface2 dark:bg-dark-Surface2">
              
            </div>
            <div className="grid gap-4 absolute top-[30%] right-0 md:-right-22">
                <div className="px-2 py-2 rounded-full transition-colors duration-200 cursor-pointer bg-Surface2 dark:bg-dark-Surface2">
                  <ShareNetworkIcon size={30} weight="fill"/>
                </div>
                <div className="px-2 py-2 rounded-full transition-colors duration-200 cursor-pointer bg-Surface2 dark:bg-dark-Surface2">
                  <OpenAiLogoIcon size={30} weight="fill"/>
                </div>
                <div className="px-2 py-2 rounded-full transition-colors duration-200 cursor-pointer bg-Surface2 dark:bg-dark-Surface2">
                  <PlusCircleIcon size={30} weight="fill"/>
                </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home