import Layout from "../../components/ui/protected/Layout.tsx"
import Header from "../../components/ui/protected/Header.tsx"
import SearchBar from "../../components/ui/protected/SearchBar.tsx"
import QuickCaptureCard from "../../components/ui/protected/Home/AddFile.tsx"
import { getHourOfDay } from "../../utils/helpers.ts"
import { Type } from "lucide-react"
import { 
  CaretLeftIcon, CaretRightIcon, CameraIcon, FilePdfIcon, 
  ImageIcon, OpenAiLogoIcon, PlusCircleIcon, ShareNetworkIcon, 
  TextTIcon, WaveformIcon 
} from "@phosphor-icons/react"

function Home() {
  
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
        <SearchBar placeHolder="Search your memories..."/>
      </Header>
      {/* <Navbar /> */}
      <main>
        <div className="grid justify-center">
          <div className="relative">
            <div className="w-90 md:w-180 h-100 md:h-[80dvh] lg:h-[67dvh]  rounded-lg bg-Surface2 dark:bg-dark-Surface2">
              
            </div>
            <div className="grid gap-4 absolute top-[30%] right-0 md:right-1 lg:-right-20">
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
          <div className="hidden mt-4 gap-6 lg:flex justify-center">
            <div className="py-2 px-2 rounded-full hover:bg-Surface2 dark:hover:bg-dark-Surface2 transition-colors duration-200 cursor-pointer">
              <CaretLeftIcon size={20} weight="regular"/>
            </div>
            <div className="py-2 px-2 rounded-full hover:bg-Surface2 dark:hover:bg-dark-Surface2 transition-colors duration-200 cursor-pointer">
              <CaretRightIcon size={20} weight="regular"/>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home