import { View, Text, TextInput, Pressable, Image, ScrollView, FlatList } from "react-native";
import ScreenLayout from "@/components/ui/ScreenLayout";
import Header from "@/components/ui/Header";
import { AntDesign, Ionicons, StyledFontAwesome6 } from "@/components/icons";
import {useTheme} from "@/context/ThemeContext";
import AddMemoryFlow from "@/components/ui/AddMemoryFlow";
import {useState} from "react";
export default function index() {
  
  const {changeTheme} = useTheme()
  // changeTheme("system")
  const [addFilePanelOpen, setAddFilePanelOpen] = useState(false);

  function toggleAddFilePanelOpen(){
    setAddFilePanelOpen(prev => !prev);
  }
  return (
    <ScreenLayout>
        <Header>
          <View className="flex-row gap-1">
            <Text className="text-xl md:text-xl font-medium leading-wider mb-2 text-Primary-text dark:text-dark-Primary-text">
              Good evening,
            </Text>
            <Text className="text-Accent text-xl font-medium">
              Daniel
            </Text> 
          </View> 
        </Header>
            <View>
                      <View className="relative">
                        <Image source={require("../../../assets/images/profile.png")} className="" resizeMode="contain" style={
                        {width: "100%",
                        height:"90%",
                        // borderRadius: 50,
                        }
                        } />
                        <View className="absolute top-0 w-full h-full bg-black/10"></View>
                          <ScrollView className="absolute bottom-20 left-2 w-[65%] h-[25%] p-1 overflow-y-auto no-scrollbar">
                            <Text className="base-text font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus, officia sunt, soluta delectus pariatur dolorum distinctio perspiciatis veritatis hic dicta ratione. Expedita repellat saepe, laborum natus laboriosam rem, aliquam modi iusto ut dignissimos ipsa molestias dolor ea itaque aut ad aliquid consectetur architecto nam unde animi vel perspiciatis mollitia? Quam minima repellendus tempore aperiam impedit! Officiis quod dignissimos sit aliquid amet, distinctio, asperiores nisi est quis beatae libero, aspernatur tenetur praesentium natus placeat. Repellat iste tempora ut harum doloribus dolore, incidunt esse fugit numquam quod delectus eveniet repellendus, nihil labore laudantium sit dolorem quas porro. Neque, vero libero. Dolorem magnam officiis nesciunt saepe eaque. Ullam fuga architecto unde dolor. Provident minus debitis vitae unde praesentium odit officia temporibus vel, error iste aut quisquam exercitationem ipsum odio reprehenderit esse assumenda dolor. Quis vel necessitatibus quasi. Modi dicta, sapiente quam, minus et mollitia atque architecto doloribus, facilis consectetur tempora eum sit voluptas voluptatum. Corporis quibusdam commodi natus ipsa deleniti reprehenderit quo error repellat maxime ipsam consequatur accusamus, voluptate quidem sunt, id vel debitis porro quasi, aliquam similique ratione repellendus? Rem amet debitis voluptatem officiis numquam nisi odit reiciendis porro eaque quos corrupti, labore ducimus similique sit, in expedita? Dolor quis molestias unde eveniet, magni beatae laudantium possimus esse consectetur rerum voluptatum maiores ea accusantium corporis necessitatibus harum tempore ipsam fugiat nobis deserunt soluta quos molestiae veniam reprehenderit. Et doloribus non, aspernatur molestiae maiores asperiores, rem laboriosam, maxime necessitatibus illum a magnam? Aspernatur nobis ipsa ipsum. Repellat iure consequatur, ipsam voluptas accusamus ad. Laborum nobis suscipit, autem aspernatur at laboriosam aliquam omnis excepturi est quisquam nisi quibusdam quaerat quos amet dolorum? Quaerat, sint iure! Delectus praesentium corporis laboriosam eius ratione, accusamus esse voluptate asperiores eaque? Est ratione, adipisci, necessitatibus rerum mollitia ut animi dolores nostrum quis dolorem quisquam voluptates, autem soluta omnis.
                            </Text>
                          </ScrollView>
                      </View>
                    {/* <View className="relative">
                      <Text className="text-Secondary-text dark:text-dark-Secondary-text cursor-pointer text-sm" onClick={toggleNewFolderOptions}>+ New Folder</Text>
                      <NewFolderOptions style={newFolderOptionsOpen? 'flex':'hidden'}/>
                    </View> */}
                    <View className="flex flex-col gap-5 absolute top-[30%] right-1 md:right-1 lg:-right-20">
                          <Pressable onPress={() => changeTheme("system")} className="px-2 py-2 rounded-full  cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 ">
                            <Ionicons name="share-social" size={24} color="" className="text-Primary-text dark:text-dark-Primary-text"/>
                          </Pressable>
                        <Pressable className="px-2 py-2 rounded-full  cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 hover:scale-110">
                          <AntDesign name="open-ai" size={24} className="text-Primary-text dark:text-dark-Primary-text" />
                        </Pressable>
                        <Pressable onPress={toggleAddFilePanelOpen} className="relative px-2 py-2 rounded-full cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2">
                          <StyledFontAwesome6 name="circle-plus" size={24} className="text-Primary-text dark:text-dark-Primary-text" />
                        </Pressable>
                      </View>
                      <View className="relative">
                        <AddMemoryFlow style={addFilePanelOpen ? "flex-row bottom-40" : "hidden"} />
                      </View>
                  </View>
    </ScreenLayout>
  );
}