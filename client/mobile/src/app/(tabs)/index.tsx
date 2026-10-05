import { View, Text, TextInput, Pressable, Image, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import {Link, router} from "expo-router"
import { useColorScheme } from "nativewind";
import ScreenLayout from "@/components/ui/ScreenLayout";
import Header from "@/components/ui/Header";

export default function HomeScreen() {
  return (
    <ScreenLayout>
      <View>
        <Header>
          <View className="flex flex-1 justify-between">
          <View>
            <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">
              Good evening,
              <span className="text-Accent ml-1">
              Daniel
              </span> 
            </h1>
            {/* <p className="w-45 md:w-full text-sm">Your memories, always within reach.</p> */}
          </View>
          
        </View>
        </Header>
      </View>
    </ScreenLayout>
  );
}