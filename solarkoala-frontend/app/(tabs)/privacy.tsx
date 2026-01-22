/*
Author: Imandi Vidara
Created: 2026-01-19 - SK005 - Settings sub screens
Description: Placeholder screen for Privacy settings
Last Update: Imandi Vidara - 2026-01-19 - SK005 - Initial creation of privacy screen
*/

import { View, Text, StyleSheet } from "react-native";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <Text style={styles.text}>Coming soon </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});


