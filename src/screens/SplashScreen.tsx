import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Auth");
    }, 2000); // 2 secods
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/NightSilent.jpeg")}
        style={styles.logo}
      />

      <Text style={styles.text}>Nobaan</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  text: {
    position: "absolute",
    color: "#fff",
    fontSize: 48,
    fontWeight: "bold",
  },
});
