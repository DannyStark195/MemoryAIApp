import { View, Text, TextInput, Pressable, Image, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import {Link, router} from "expo-router"
import { useColorScheme } from "nativewind";

export default function HomeScreen() {
  const {setColorScheme} = useColorScheme();
  // setColorScheme('dark')

  return (
    <View>
      <Text className="text-Accent dark:bg-dark-Background">Testing 1 2</Text>
    </View>
  );
}