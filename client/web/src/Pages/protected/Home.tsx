import Layout from "../../components/ui/protected/Layout.tsx"
import Header from "../../components/ui/protected/Header.tsx"
import { getHourOfDay } from "../../utils/helpers.ts"
// import NewFolderOptions from "../../components/ui/protected/LibraryPage/NewFolderOptions.tsx"
import profile from '../../assets/profile.png'
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
            <h1 className="text-lg md:text-lg semibold leading-wider mb-2">
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
          <div className="relative md:w-100 lg:w-125 h-[65dvh] md:h-[70dvh]">
            <img src={profile} className="w-full h-full rounded-lg  overflow-hidden" />
            {/* <div className="relative">
              <span className="text-Secondary-text dark:text-dark-Secondary-text cursor-pointer text-sm" onClick={toggleNewFolderOptions}>+ New Folder</span>
              <NewFolderOptions style={newFolderOptionsOpen? 'flex':'hidden'}/>
            </div> */}
            <div className="absolute top-0 w-full h-full bg-black/10"></div>
                <div className="absolute bottom-2 left-2 w-[65%] h-[30%] p-1 overflow-y-auto no-scrollbar">
                  <p className="text-dark-Primary-text font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus, officia sunt, soluta delectus pariatur dolorum distinctio perspiciatis veritatis hic dicta ratione. Expedita repellat saepe, laborum natus laboriosam rem, aliquam modi iusto ut dignissimos ipsa molestias dolor ea itaque aut ad aliquid consectetur architecto nam unde animi vel perspiciatis mollitia? Quam minima repellendus tempore aperiam impedit! Officiis quod dignissimos sit aliquid amet, distinctio, asperiores nisi est quis beatae libero, aspernatur tenetur praesentium natus placeat. Repellat iste tempora ut harum doloribus dolore, incidunt esse fugit numquam quod delectus eveniet repellendus, nihil labore laudantium sit dolorem quas porro. Neque, vero libero. Dolorem magnam officiis nesciunt saepe eaque. Ullam fuga architecto unde dolor. Provident minus debitis vitae unde praesentium odit officia temporibus vel, error iste aut quisquam exercitationem ipsum odio reprehenderit esse assumenda dolor. Quis vel necessitatibus quasi. Modi dicta, sapiente quam, minus et mollitia atque architecto doloribus, facilis consectetur tempora eum sit voluptas voluptatum. Corporis quibusdam commodi natus ipsa deleniti reprehenderit quo error repellat maxime ipsam consequatur accusamus, voluptate quidem sunt, id vel debitis porro quasi, aliquam similique ratione repellendus? Rem amet debitis voluptatem officiis numquam nisi odit reiciendis porro eaque quos corrupti, labore ducimus similique sit, in expedita? Dolor quis molestias unde eveniet, magni beatae laudantium possimus esse consectetur rerum voluptatum maiores ea accusantium corporis necessitatibus harum tempore ipsam fugiat nobis deserunt soluta quos molestiae veniam reprehenderit. Et doloribus non, aspernatur molestiae maiores asperiores, rem laboriosam, maxime necessitatibus illum a magnam? Aspernatur nobis ipsa ipsum. Repellat iure consequatur, ipsam voluptas accusamus ad. Laborum nobis suscipit, autem aspernatur at laboriosam aliquam omnis excepturi est quisquam nisi quibusdam quaerat quos amet dolorum? Quaerat, sint iure! Delectus praesentium corporis laboriosam eius ratione, accusamus esse voluptate asperiores eaque? Est ratione, adipisci, necessitatibus rerum mollitia ut animi dolores nostrum quis dolorem quisquam voluptates, autem soluta omnis.</p>
                </div>
            <div className="grid gap-4 absolute top-[30%] right-1 lg:-right-20">
                <button className="px-2 py-2 rounded-full transition-all duration-200 cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 hover:scale-110">
                  <ShareNetworkIcon size={28} weight="fill"/>
                </button>
                <button className="px-2 py-2 rounded-full transition-all duration-200 cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 hover:scale-110">
                  <OpenAiLogoIcon size={28} weight="fill"/>
                </button>
                <button onClick={toggleAddFilePanel} className="relative px-2 py-2 rounded-full cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2">
                  <PlusCircleIcon size={28} weight="fill"/>
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
