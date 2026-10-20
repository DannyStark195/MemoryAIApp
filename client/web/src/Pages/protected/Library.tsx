import Header from "../../components/ui/protected/Header"
import Layout from "../../components/ui/protected/Layout.tsx"
import Folder from "../../components/ui/protected/LibraryPage/Folder.tsx";
import { useEffect, useState } from "react";
import NewFolderOptions from "../../components/ui/protected/LibraryPage/NewFolderOptions.tsx";
import { getFolders } from "../../api/getFolders.ts";
import { type FolderType } from "../../types/model.ts";
import LoadingState from "../../components/ui/LoadingState.tsx";
import ErrorState from "../../components/ui/ErrorState.tsx";

function Library() {
  // const [categories, setCategories]= useState<string[]>(["All", "Favourites"]);
  const categories = ["All", "Favourites"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [folders, setFolders] = useState<FolderType[]>([]);
  const [loading, setLoading] = useState(true);
  const [newFolderOptionsOpen, setNewFolderOptionsOpen] = useState(false)
  
  function toggleNewFolderOptions(){
    setNewFolderOptionsOpen(prev => !prev)
  }
  const [error, setError] =useState(false)
  useEffect(()=>{
      try{
        getFolders().then(setFolders)
        if(folders){
          throw new Error("Folders not found!")
        }
      }
      catch(error){
        console.log(error)
        setError(false)
      }
      finally{
        setLoading(false)
      }
  }, [])

  return (
    <>
      
      {
        error? <ErrorState errorProps={{
          title: "Error",
          error: "Folders not found!"
        }} />: loading? <LoadingState />
        :
      <Layout>
              <Header>
                <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">Library</h1>
              </Header>
              <main className=" ">
                <div className="">
                  <div className="my-4 mb-4 flex gap-2 text-sm font-semibold flex-wrap ">
                    {categories.map((category) =>(
                      <button className={`px-5 py-2 rounded-lg border cursor-pointer 
                        ${activeCategory===category?'bg-Accent dark:bg-Accent border-Accent text-dark-Primary-text':'border-Surface2 dark:border-dark-Surface2'}
                        `}
                        aria-pressed={activeCategory === category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        key={category}
                        >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row font-medium justify-between">
                  <div className="flex flex-col gap-4 w-full md:pr-6">
                    <div className="flex justify-between mb-2">
                        <h2 className="flex-1">Folders</h2>
                        <div className="relative">
                          <button className="text-Secondary-text dark:text-dark-Secondary-text cursor-pointer text-sm" onClick={toggleNewFolderOptions}>+ New Folder</button>
                          <NewFolderOptions style={newFolderOptionsOpen? 'flex':'hidden'}/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row">
                      {folders.map((folder) =>(
                            <Folder name={folder.name} files={folder.files} key={folder.id}/>
                        ))}
                    </div>
                  </div>
                </div>
              </main>
      </Layout>
    }
    </>
  )
}

export default Library