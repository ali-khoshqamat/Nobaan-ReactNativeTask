import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import ProfileScreen from "./ProfileScreen";
import SearchScreen from "./SearchScreen";
import SettingsScreen from "./SettingsScreen";

const IMAGES_DATA = [
  {
    id: "1",
    imageUri: require("../assets/image1.jpg"),
    caption: "Beautiful sunset",
  },
  {
    id: "2",
    imageUri: require("../assets/image2.jpg"),
    caption: "Fun at the beach",
  },
  {
    id: "3",
    imageUri: require("../assets/image3.jpg"),
    caption: "Fun at the beach",
  },
  {
    id: "4",
    imageUri: require("../assets/image4.jpg"),
    caption: "Fun at the beach",
  },
];

const HomeScreen = () => {
  //   const images = useSelector((state: RootState) => state.images);
  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item.imageUri} style={styles.image} />
      <Text style={styles.caption}>{item.caption}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={IMAGES_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              // source={{ uri: user.profileImage }}
              source={{ uri: require("../assets/profileImage.jpg") }}
              style={{
                width: 25,
                height: 25,
                borderRadius: 12.5,
                borderWidth: focused ? 2 : 0,
                borderColor: "blue",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  imageContainer: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
  },
  caption: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: "20px",
  },
});
