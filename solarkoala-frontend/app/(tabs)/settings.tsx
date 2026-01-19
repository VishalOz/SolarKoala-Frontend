/*
Author: Imandi Vidara
Created: 2026-01-19 - SK005 - Settings screen UI
Description: Settings screen with user profile, navigation options, and logout button
Last Update: Imandi Vidara - 2026-01-19 - SK005 - Initial creation of settings screen
*/

import { View, Text, StyleSheet, Pressable, ScrollView, Image } from "react-native";
import { router } from "expo-router";

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Profile Section */}
      <View style={styles.profileBox}>
        <Image
        source={{ uri: "https://api.dicebear.com/7.x/adventurer/png?seed=solarGirl&glasses=variant05&smile=1&backgroundColor=ffdf00,fff3bf" }}
        style={styles.avatar}
        />

        <Text style={styles.name}>User Name</Text>
      </View>

      {/* Options */}
    <Pressable style={styles.item} onPress={() => router.push("account" as any)}>
    <Text style={styles.itemText}>Account</Text>
    </Pressable>

    <Pressable style={styles.item} onPress={() => router.push("notifications" as any)}>
    <Text style={styles.itemText}>Notifications</Text>
    </Pressable>

    <Pressable style={styles.item} onPress={() => router.push("privacy" as any)}>
    <Text style={styles.itemText}>Privacy</Text>
    </Pressable>


      {/* Logout */}
      <Pressable style={styles.logout} onPress={() => router.replace("/")}>
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileBox: {
    alignItems: "center",
    marginVertical: 30,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  item: {
    padding: 18,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  itemText: {
    fontSize: 16,
  },
  logout: {
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: "black",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  logoutText: {
    color: "white",
    fontSize: 16,
  },
});
