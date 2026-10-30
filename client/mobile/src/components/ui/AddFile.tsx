import { Feather, FontAwesome6, MaterialIcons} from "@expo/vector-icons";
import { View,Text, Pressable  } from "react-native";
type AddFileProps = {
  style: string;
  onAddMemory: () => void;
};

function AddFile({ style, onAddMemory }: AddFileProps) {
  const files:string[] = ["Photo", "Document", "Audio", "Note"] 

  function AddMemory(){
    onAddMemory()
  }
  return (
      <View
       className={`flex-row rounded-lg gap-1 bg-Background dark:bg-dark-Surface shadow-Border shadow-lg dark:shadow-none py-3 px-3 absolute top-[60%] right-8 lg:right-10 z-4 ${style}`}>
        {files.map(file =>(
          <View key={file} className={``}>
            {file === "Photo" && <Pressable onPress={AddMemory} className="text-md border-Border flex flex-col items-center justify-center gap-2 py-2 px-2 rounded-lg hover:bg-Surface2 dark:hover:bg-dark-Surface"><Feather name="camera" size={24} className="text-blue-500"/><Text className="text-blue-500">{file}</Text></Pressable>}
            {file === "Document" && <Pressable onPress={AddMemory} className="text-md border-Border flex flex-col items-center justify-center gap-2 py-2 px-2 rounded-lg hover:bg-Surface2 dark:hover:bg-dark-Surface "><FontAwesome6 name="file-pdf" size={24} className="text-red-500" /><Text className="text-red-500">{file}</Text></Pressable>}
            {file === "Audio" && <Pressable onPress={AddMemory} className="text-md border-Border flex flex-col items-center justify-center gap-2 py-2 px-2 rounded-lg hover:bg-Surface2 dark:hover:bg-dark-Surface"><MaterialIcons name="multitrack-audio" size={24} className="text-pink-500" /><Text className="text-pink-500">{file}</Text></Pressable>}
            {file === "Note" && <Pressable onPress={AddMemory} className="text-md border-Border flex flex-col items-center justify-center gap-2 py-2 px-2 rounded-lg hover:bg-Surface2 dark:hover:bg-dark-Surface"><Feather name="type" size={24} className="text-Accent" /><Text className="text-Accent">{file}</Text></Pressable>}
            
          </View>
        ))}
      </View>
  )
}

export default AddFile
