import { Feather, Ionicons } from "@/components/icons";
import { router } from "expo-router";
import BackButton from "./BackButton";
import { Pressable, View, Text } from "react-native";

type errorProps = {
    title: string;
    error: string;
    action: () => void;
};

function ErrorState({ errorProps }: { errorProps: errorProps }) {
    return (
        <View className="flex-1 items-center justify-center fixed top-0 w-full h-screen bg-Background dark:bg-dark-Background">
            <View className="flex flex-col items-center w-100">
                <View>
                    <Ionicons
                        name="warning-outline"
                        size={70}
                        className="text-red-600"
                    />
                </View>
                <Text className="text-3xl mb-1 base-text">
                    {errorProps.title}
                </Text>
                <Text className="text-lg base-text">{errorProps.error}</Text>
                <View className="flex-row gap-6 mt-6 items-center">
                    <Pressable
                        className="flex-row items-center gap-2 px-4 py-3 rounded-lg cursor-pointer bg-Surface2 dark:bg-dark-Surface2 hover:bg-Surface dark:hover:bg-dark-Surface"
                        onPress={() => router.push("/")}
                    >
                        <BackButton />
                        <Text className="base-text text-[1rem]">Go back</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => errorProps.action()}
                        className="flex-row items-center gap-2 bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-3 px-4 rounded-lg cursor-pointer hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 "
                    >
                        <Feather name="refresh-cw" size={21} color="black" />
                        <Text className="base-text-reverse text-[1rem] font-semibold">
                            Try Again
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default ErrorState;
