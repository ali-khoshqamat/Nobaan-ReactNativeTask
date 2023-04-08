import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Search Screen!</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
