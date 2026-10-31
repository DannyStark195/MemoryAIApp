import { PencilSimpleIcon, PlusIcon } from "@phosphor-icons/react";
import Layout from "../Layout.tsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import File from "./File.tsx";
import BackButton from "../../BackButton.tsx";
import AddMemoryFlow from "../AddMemoryFlow.tsx";
import { type Memory } from "../../../../types/model.ts";

function FolderDetail() {
  const { folderId } = useParams();
  const [folder, setFolder] = useState<Memory[]>([]);
  useEffect(() =>{
    setFolder(
      [
          {
            id: '1',
            name: "file1",
            url: "//Personal",
            created_at: "Yesterday",
            favourite: true,
            category: "Personal"
          },
          {
            id: '2',
            name: "file2",
            url: "//Personal",
            created_at: "Yesterday",
            favourite: true,
            category: "Personal"
          },
          {
            id: '3',
            name: "file3",
            url: "//Personal",
            created_at: "Today",
            favourite: false,
            category: "Personal"
          },
          {
            id: '4',
            name: "file4",
            url: "//Personal",
            created_at: "Yesterday",
            favourite: true,
            category: "Personal"
          },
        ]
    )

  }, [])
  const [addFilePanelOpen, setAddFilePanelOpen] = useState(false);
   function toggleAddFilePanel(){
     setAddFilePanelOpen(prev => !prev)
   } 
  return (
    <Layout>
      <div className="flex justify-between">
        <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">{folderId}</h1>
        <BackButton />
      </div>
      <main>
          <div className="flex justify-end items-center gap-2 my-4">
            <span className="cursor-pointer text-lg hover:bg-Surface2 dark:hover:bg-dark-Surface2 px-2 py-1 rounded-full">
              <PencilSimpleIcon size={18}/>
            </span>
          </div>
          <div>
            <div className="overflow-y-scroll max-h-[90dvh] grid grid-cols-1 md:grid-cols-2 w-full gap-x-4">
                                    {folder.map((file) =>(
                                      <File fileProps={file} key={file.id}/>
                                    ))}
            </div>
          </div>
          <div>
            <div className="relative">
              <AddMemoryFlow style={addFilePanelOpen? 'flex -top-4 md:top-20':'hidden'}/>
            </div>
            <button onClick={toggleAddFilePanel} className="absolute bottom-[16%] right-[5%] text-dark-Primary-text text-4xl bg-Accent px-4 py-1 cursor-pointer hover:scale-102 rounded-lg">
              +
            </button>
          </div>
      </main>
    </Layout>
  )
}

export default FolderDetail