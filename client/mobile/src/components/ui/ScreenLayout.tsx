import { View } from "react-native";

export default function ScreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View className="bg-Background dark:bg-dark-Background text-Primary-text dark:text-dark-Primary-text  relative min-h-dvh overflow-y-hidden">
      <View className="flex-1 px-4 pt-4 md:px-8 md:pt-8 pb-6">
                {children}
      </View>
    </View>
  );
}