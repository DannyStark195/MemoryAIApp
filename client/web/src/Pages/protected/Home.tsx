import Layout from "../../components/ui/protected/Layout.tsx"
import Header from "../../components/ui/protected/Header.tsx"
import SearchBar from "../../components/ui/protected/SearchBar.tsx"
import QuickCaptureCard from "../../components/ui/protected/Home/QuickCaptureCard.tsx"
import { getHourOfDay } from "../../utils/helpers.ts"
import { Type } from "lucide-react"
import { CameraIcon, FilePdfIcon, ImageIcon, TextTIcon, WaveformIcon } from "@phosphor-icons/react"

function Home() {
  
  return (
    <Layout>
      <Header>
        <div>
          <h1 className="text-2xl md:text-3xl font-medium leading-wider mb-2">Good {getHourOfDay()}, Daniel 👋</h1>
          <p className="w-45 md:w-full text-md">Your memories, always within reach.</p>
        </div>
        <SearchBar placeHolder="Search your memories..."/>
      </Header>
      {/* <Navbar /> */}
      <main>
        <div className="flex gap-4">
          <div className="">
            <h2>Quick Capture</h2>
            <div className="flex">
              <QuickCaptureCard text={"Note"} icon={<TextTIcon/>}/>
              <QuickCaptureCard text={"Photo"} icon={<CameraIcon/>}/>
              <QuickCaptureCard text={"Document"} icon={<FilePdfIcon/>}/>
              <QuickCaptureCard text={"Audio"} icon={<WaveformIcon/>}/>
            </div>
          </div>
          <div className="hidden md:block">
            <h2>Popula</h2>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home