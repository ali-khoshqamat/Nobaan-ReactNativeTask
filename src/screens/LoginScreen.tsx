import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Login Screen!</Text>
    </View>
  );
};

export default LoginScreen;

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
