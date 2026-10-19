import ScreenLayout from "../ScreenLayout"
import { View, Image, Pressable, Text, TextInput } from "react-native"
import BackButton from "../BackButton"
import { FontAwesome6 } from "@/components/icons";
import LogoutButton from "../LogoutButton"
import React, { useEffect, useState } from "react"
function AccountInfo() {
    const [accountNameInput, setAccountNameInput] = useState('Daniel Okafor')
    const [isChangingName, setIsChangingName] = useState(false);

    function ChangingAccountName(e:React.ChangeEvent<HTMLInputElement>) {
        setAccountNameInput(e.target.value);
        if(!isChangingName){
            setIsChangingName(true)
        }
        console.log("is typing")
    }

    useEffect(()=>{
        if(!accountNameInput){
            setIsChangingName(false)
        }

        const delayTimer = setTimeout(()=>{
            setIsChangingName(false)
        }, 5000)

        return () => clearTimeout(delayTimer)
    }, [accountNameInput])


  return (
    <ScreenLayout>
        <View className="flex-row justify-end mb-8">
            <BackButton />
        </View>
        <View>
            <View className="flex justify-center">
                <View className="flex flex-col items-center">
                    <View className="mb-2">
                        <Image source={require("../../../../assets/images/profile.png")} className="!w-[120px] !h-[120px] rounded-full object-cover"/>
                    </View>
                    <Text className="font-semibold text-xl text-Primary-text dark:text-dark-Primary-text">Daniel Okafor</Text>
                    <Text className="text-Secondary-text dark:text-dark-Secondary-text text-[1rem]">dannystark195@gmail.com</Text>
                    <View className="flex-row justify-center gap-2 my-4">
                        <View className="px-4 py-0.5 flex flex-col items-center">
                            <Text className="text-lg mb-1 font-semibold text-Primary-text dark:text-dark-Primary-text">128</Text>
                            <Text className="text-[1rem] text-Primary-text dark:text-dark-Primary-text">Memories</Text>
                        </View>
                        <View className="px-4 py-0.5 flex flex-col items-center border-r border-l border-Border">
                            <Text className="text-lg mb-1 font-semibold text-Primary-text dark:text-dark-Primary-text">12</Text>
                            <Text className="text-[1rem] text-Primary-text dark:text-dark-Primary-text">Folders</Text>
                        </View>
                        <View className="px-4 py-0.5 flex flex-col items-center">
                            <Text className="text-lg mb-1 font-semibold text-Primary-text dark:text-dark-Primary-text">30</Text>
                            <Text className="text-[1rem] text-Primary-text dark:text-dark-Primary-text">Favourites</Text>
                        </View>
                    </View>
                    <View className="relative mt-4 mb-12 flex-row items-center gap-2">
                        <View className="absolute top-2.5 left-3">
                            <FontAwesome6 name="user" size={16}  className="text-Primary-text dark:text-dark-Primary-text"/>
                        </View>
                        <TextInput 
                            placeholder={`Daniel Okafor`} 
                            className="w-[85%] py-2 px-2 pl-10 rounded-md text-[1.05rem] base-text"
                            value={accountNameInput}
                            onChangeText={(text) => {
                                setAccountNameInput(text);
                                if(!isChangingName){
                                    setIsChangingName(true)
                                }
                            }}
                        />
                        <Pressable
                            className={`${isChangingName? '':'hidden'} bg-dark-Background dark:bg-Background px-4 py-2 !rounded-[40px] cursor-pointer hover:bg-Accent active:bg-Accent active:text-dark-Primary-text`}
                            style={({ pressed }) => ({
                                backgroundColor: pressed ? "#F3EAF7" : "#6A1B9A",
                            })}
                            >
                                <Text className="text-dark-Primary-text dark:text-Primary-text text-sm font-semibold">Save</Text>
                        </Pressable>
                    </View>
                    <View className="cursor-pointer border border-Surface2 dark:border-dark-Surface2 hover:bg-Surface dark:hover:bg-dark-Surface w-[320px] p-3 rounded-lg transition-all duration-300">
                        <LogoutButton/>
                    </View>
                </View>
            </View>
        </View>
    </ScreenLayout>
  )
}

export default AccountInfo