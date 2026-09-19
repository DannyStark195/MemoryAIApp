import Header from "../../components/ui/protected/Header"
import Layout from "../../components/ui/protected/Layout.tsx"
import Navbar from "../../components/ui/protected/Navbar.tsx"
import { useState } from "react";
function Library() {
  const [categories, setCategories]= useState<string[]>(["All", "Favourites"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [folders, setFolders] = useState([
    {
      "name": "Personal",
      "files":[
        {
          name: "file1",
          url: "//Personal"
        },
        {
          name: "file2",
          url: "//Personal"
        },
      ],
    },
    {
      "name": "School",
      "files":[
        {
          name: "file1",
          url: "//School"
        },
        {
          name: "file2",
          url: "//School"
        },
      ],
    }
  ]);
  return (
    <Layout>
            <Header>
              <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">Library</h1>
            </Header>
            <main>
              <div className="">
                <div className="my-4 mb-4 flex gap-2 text-sm font-semibold flex-wrap ">
                  {categories.map((category) =>(
                    <div className={`px-5 py-2 rounded-lg border border-Border cursor-pointer 
                      ${activeCategory===category?'bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text':''}
                      `}
                      onClick={() => setActiveCategory(category)}
                      >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row font-medium justify-between overflow-y-scroll">
               <div className="flex justify-between lg:w-[55%] pr-6 md:h-[70dvh]">
                <h2 className="flex-1">Folders</h2>
                <span className="text-Secondary-text dark:text-dark-Secondary-text cursor-pointer text-sm">+ New</span>
                <div className="overflow-y-scroll">

                </div>
               </div>
               <div className="flex-1 lg:pl-6">
                  <h3>Recent</h3>
                  <div className="overflow-y-scroll">

                  </div>
                </div>
              </div>
            </main>
        </Layout>
  )
}

export default Library