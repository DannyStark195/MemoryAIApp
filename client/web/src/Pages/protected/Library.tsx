import Header from "../../components/ui/protected/Header"
import Layout from "../../components/ui/protected/Layout.tsx"
import File from "../../components/ui/protected/LibraryPage/File.tsx";
import Folder from "../../components/ui/protected/LibraryPage/Folder.tsx";
import { useState } from "react";
function Library() {
  const [categories, setCategories]= useState<string[]>(["All", "Favourites"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [folders, setFolders] = useState([
    {
      "id":1,
      "name": "Personal",
      "files":[
        {
          id: 1,
          name: "file1",
          url: "//Personal"
        },
        {
          id: 2,
          name: "file2",
          url: "//Personal"
        },
        {
          id: 3,
          name: "file3",
          url: "//Personal"
        },
        {
          id: 4,
          name: "file4",
          url: "//Personal"
        },
      ],
    },
    {
      "id":2,
      "name": "School",
      "files":[
        {
          id: 1,
          name: "file1",
          url: "//School", 
          created_at: "Today",
          favourite: false,
          category: "School"
        },
        {
          id: 2,
          name: "file2",
          url: "//School",
          created_at: "Yesterday",
          favourite: true,
          category: "School"
        },
        {
          id: 3,
          name: "file3",
          url: "//School",
          created_at: "Yesterday",
          favourite: true,
          category: "School"
        },
      ],
    },
    {
      "id":3,
      "name": "Work",
      "files":[
        {
          id: 1,
          name: "file1",
          url: "//Work", 
          created_at: "Today",
          favourite: false,
          category: "Work"
        },
        {
          id: 2,
          name: "file2",
          url: "//Work",
          created_at: "Yesterday",
          favourite: true,
          category: "Work"
        },
        {
          id: 3,
          name: "file3",
          url: "//Work",
          created_at: "Yesterday",
          favourite: true,
          category: "Work"
        },
      ],
    }
  ]);
  return (
    <Layout>
            <Header>
              <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">Library</h1>
            </Header>
            <main className=" ">
              <div className="">
                <div className="my-4 mb-4 flex gap-2 text-sm font-semibold flex-wrap ">
                  {categories.map((category) =>(
                    <div className={`px-5 py-2 rounded-lg border cursor-pointer 
                      ${activeCategory===category?'bg-Accent dark:bg-Accent border-Accent text-dark-Primary-text':'border-Border'}
                      `}
                      onClick={() => setActiveCategory(category)}
                      key={category}
                      >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row font-medium justify-between">
                <div className="flex flex-col gap-4 w-full md:pr-6">
                  <div className="flex justify-between">
                      <h2 className="flex-1">Folders</h2>
                      <span className="text-Secondary-text dark:text-dark-Secondary-text cursor-pointer text-sm">+ New Folder</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                    {folders.map((folder) =>(
                          <Folder name={folder.name} files={folder.files} key={folder.id}/>
                      ))}
                  </div>

                  {/* <span className="text-end text-sm cursor-pointer text-Secondary-text dark:text-dark-Secondary-text">See all</span> */}
                </div>
                <div className="flex-1 lg:pl-6 pb-4 hidden">
                    <h3 className="mb-2">Recent</h3>
                    <div className="overflow-y-scroll max-h-[40dvh]">
                      <div className="">
                        {folders[1].files.map((file) =>(
                          <File fileProps={file} key={file.id}/>
                        ))}
                      </div>
                    </div>
                </div>
              </div>
            </main>
        </Layout>
  )
}

export default Library