import { EvilIcons, MaterialIcons, SimpleLineIcons } from "@/components/icons";
import { colors } from "@/theme/colors";
import { useColorScheme } from "nativewind";
import { Pressable, TextInput, View, Text } from "react-native";

function ChangePassword({ email }: { email: string }) {
    const { colorScheme } = useColorScheme();
    const inputTextColor =
        colorScheme === "dark"
            ? colors.dark["Primary-text"]
            : colors.light["Primary-text"];

    return (
        <View className="my-4 flex flex-col gap-4">
            <View className="relative">
                <View className="absolute top-2 left-3">
                    <EvilIcons
                        name="envelope"
                        size={24}
                        className="base-text"
                    />
                </View>
                <TextInput
                    keyboardType="email-address"
                    placeholder="Email"
                    placeholderTextColor={inputTextColor}
                    /* value={email} */
                    className="w-full py-2.5 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md text-[1rem] base-text"
                    style={{ color: inputTextColor }}
                />
            </View>
            <View className="relative">
                <View className="absolute top-2.5 left-3">
                    <MaterialIcons
                        name="password"
                        size={24}
                        className="base-text"
                    />
                </View>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Code"
                    placeholderTextColor={inputTextColor}
                    className="w-full py-2.5 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md text-[1rem] base-text"
                    style={{ color: inputTextColor }}
                />
            </View>
            <View className="relative">
                <View className="absolute top-2.5 left-3">
                    <SimpleLineIcons
                        name="lock"
                        size={17}
                        className="base-text"
                    />
                </View>
                <TextInput
                    secureTextEntry={true}
                    placeholder="New password"
                    placeholderTextColor={inputTextColor}
                    className="w-full py-2.5 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md text-[1rem] base-text"
                    style={{ color: inputTextColor }}
                />
            </View>
            <View className="relative">
                <View className="absolute top-2.5 left-3">
                    <SimpleLineIcons
                        name="lock"
                        size={17}
                        className="base-text"
                    />
                </View>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Confirm New password"
                    placeholderTextColor={inputTextColor}
                    className="w-full py-2.5 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md text-[1rem] base-text"
                    style={{ color: inputTextColor }}
                />
            </View>
            {/* <Pressable className="bg-dark-Background dark:bg-Background py-2.5 px-4 rounded-lg cursor-pointer w-full "> */}
                <Text className="text-dark-Primary-text dark:text-Primary-text font-semibold text-center text-[1rem] ">
                    Change password
                </Text>
            {/* </Pressable> */}
        </View>
    );
}

export default ChangePassword;
