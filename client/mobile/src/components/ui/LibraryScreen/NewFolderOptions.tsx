import AddFolderModal from "./AddFolderModal";
import CreateFolderModal from "./CreateFolderModal";
import { useState } from "react";
import { Feather } from "@/components/icons";
import { Pressable, Text, View } from "react-native";

type NewFolderOptionsProps = {
  style?: string;
};

function NewFolderOptions({ style}: NewFolderOptionsProps) {
  const files:string[] = ["Create Folder", "Add Folder"] 
  const [addFolderModalOpen, setAddFolderModalOpen]  = useState(false);
  const [createFolderModalOpen, setCreateFolderModalOpen]  = useState(false)

  return (
    <>
      <Pressable className={`rounded-lg gap-1 bg-Background dark:bg-dark-Surface2 shadow-Border shadow-lg dark:shadow-none py-3 px-3 !w-[210px] justify-between absolute top-[101%] right-0 lg:right-10 ${style}`}>
        {files.map(file =>(
          <View key={file} className={``}>
            {file === "Create Folder" && 
              <Pressable onPress={() => setCreateFolderModalOpen(true)} className="text-sm border-Border flex flex-col items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer hover:bg-Surface2 dark:hover:bg-dark-Surface duration-200 transition-colors">
                <Feather name="folder" size={18} className="base-text" />
                  <Text className="base-text">{file}</Text>
              </Pressable>
        }
            {file === "Add Folder" && 
            <Pressable onPress={() => setAddFolderModalOpen(true)} className="text-sm border-Border flex flex-col items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer hover:bg-Surface2 dark:hover:bg-dark-Surface duration-200 transition-colors">
              <Feather name="folder-plus" size={18} className="base-text" />
                 <Text className="base-text">{file}</Text>
              </Pressable>}
          </View>
        ))}
      </Pressable>
      {
        addFolderModalOpen? 
        <AddFolderModal onClose={() => setAddFolderModalOpen(false)}/>: ''
      }
      {
        createFolderModalOpen? 
        <CreateFolderModal onClose={() => setCreateFolderModalOpen(false)}/>: ''
      }
    </>
  )
}

export default NewFolderOptions
