/*
Author: Imandi Vidara
Created: 2026-01-19 - SK005 - Settings screen UI
Description: Settings screen with user profile, navigation options, and logout button
Last Update: Imandi Vidara - 2026-01-19 - SK005 - Initial creation of settings screen
*/

/*import { View, Text, Pressable, ScrollView } from "react-native";
import { router } from "expo-router";
import { Image } from "expo-image";

export default function SettingsScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      
      //Profile Section 
      <View className="items-center my-7">
        <Image
          source={{ uri: "https://api.dicebear.com/7.x/adventurer/png?seed=solarGirl&glasses=variant05&smile=1&backgroundColor=ffdf00,fff3bf" }}
          className="w-[90px] h-[90px] rounded-full mb-2.5"
        />

        <Text className="text-lg font-semibold">User Name</Text>
      </View>

      //Options
      <Pressable className="p-4.5 border-b border-[#eee]" onPress={() => router.push("account" as any)}>
        <Text className="text-base">Account</Text>
      </Pressable>

      <Pressable className="p-4.5 border-b border-[#eee]" onPress={() => router.push("notifications" as any)}>
        <Text className="text-base">Notifications</Text>
      </Pressable>

      <Pressable className="p-4.5 border-b border-[#eee]" onPress={() => router.push("privacy" as any)}>
        <Text className="text-base">Privacy</Text>
      </Pressable>

      //Logout 
      <Pressable className="mt-10 mx-5 bg-black p-4 rounded-[30px] items-center" onPress={() => router.replace("/")}>
        <Text className="text-white text-base">Log Out</Text>
      </Pressable>

    </ScrollView>
  );
}
*/