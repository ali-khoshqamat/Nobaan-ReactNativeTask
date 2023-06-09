import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../redux/user/userActions";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { RNCamera } from "react-native-camera";
// import { logout } from '../redux/user/userActions';

const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [editing, setEditing] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [fullName, setFullName] = useState(user.fullName);
  const [profileImage, setProfileImage] = useState(user.profileImage);
  const navigation = useNavigation();
  const cameraRef = useRef(null);

  useEffect(() => {
    setProfileImage(user.profileImage);
  }, [user.profileImage]);

  const saveHandler = () => {
    dispatch(updateUserProfile({ fullName, email, password, profileImage }));
    setEditing(false);
  };

  const logoutHandler = () => {
    // dispatch(logout());
    navigation.navigate("Login");
  };

  const inputChangeHandler = (text: string) => {
    setFullName(text);
    dispatch(updateUserProfile({ fullName: text }));

    // dispatch(setTextFieldData(e.target.value));
  };

  const openCameraHandler = () => {
    launchCamera({ mediaType: "photo", cameraType: "back" }, (response) => {
      if (response && !response.didCancel) {
        setProfileImage(response.uri);
      }
    });
  };

  const openGalleryHandler = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (response && !response.didCancel) {
        setProfileImage(response.uri);
      }
    });
  };

  const cameraTypeToggleHandler = () => {
    if (cameraRef.current) {
      const newType =
        cameraRef.current.props.type === RNCamera.Constants.Type.back
          ? RNCamera.Constants.Type.front
          : RNCamera.Constants.Type.front;
      cameraRef.current.props.setType(newType);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            editing ? saveHandler() : setEditing(true);
          }}
        >
          <Text style={styles.editButton}>{editing ? "Save" : "Edit"}</Text>
        </TouchableOpacity>
        {/* <Text style={styles.title}>Profile</Text> */}
        <TouchableOpacity onPress={logoutHandler}>
          <Text style={styles.logoutButton}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        {profileImage ? (
          <Image
            // source={{ uri: user.profileImage }}
            source={{ uri: require("../assets/profileImage.jpg") }}
            // source={{ uri: profileImage }}
            style={styles.profileImage}
          />
        ) : (
          <Text style={styles.emptyText}>No Image!</Text>
        )}
        <Text style={styles.fullName}>{user.fullName}</Text>
      </View>

      <View style={styles.profileInformation}>
        {editing && (
          <>
            {Platform.OS === "android" && (
              <RNCamera
                ref={cameraRef}
                style={styles.camera}
                type={RNCamera.Constants.Type.back}
              />
            )}
            <TouchableOpacity
              onPress={cameraTypeToggleHandler}
              style={styles.cameraToggle}
            >
              <Text style={styles.cameraToggleText}>Toggle Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={openCameraHandler}
              style={styles.cameraButton}
            >
              <Text style={styles.cameraButtonText}>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={openGalleryHandler}
              style={styles.galleryButton}
            >
              <Text style={styles.galleryButtonText}>Open Gallery</Text>
            </TouchableOpacity>
          </>
        )}
        <Text style={styles.text}>UserName</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={inputChangeHandler}
          />
        ) : (
          <Text style={styles.userInformation}>{user.fullName}</Text>
        )}
        <Text style={styles.text}>Email</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        ) : (
          <Text style={styles.userInformation}>{user.email}</Text>
        )}
        <Text style={styles.text}>Password</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        ) : (
          <Text style={styles.userInformation}>{user.password}</Text>
        )}
      </View>
    </View>
  );
};

// ProfileScreen.navigationOptions = ({ navigation }) => ({
//   headerTitle: () => (
//     <View style={{ flexDirection: "row", alignItems: "center" }}>
//       <Image
//         source={{ uri: require("../../assets/image1.jpg") }}
//         style={{
//           width: 30,
//           height: 30,
//           borderRadius: 15,
//           marginRight: 8,
//         }}
//       />
//       <Text style={{ fontSize: 20, fontWeight: "bold" }}>My Profile</Text>
//     </View>
//   ),
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  editButton: {
    fontSize: 18,
    // color: "blue",
    color: "#007AFF",
  },
  logoutButton: {
    fontSize: 18,
    // color: "red",
    color: "#007AFF",
  },
  emptyText: {
    width: 60,
    color: "gray",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  profileInformation: {
    alignItems: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  userInformation: {
    width: "100%",
    height: 40,
    fontSize: 20,
    fontWeight: "bold",
    // paddingHorizontal: 16,
    marginBottom: 16,
  },
  profileImageHeader: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  fullName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    width: "100%",
    height: 20,
  },
  camera: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  cameraToggle: {
    alignSelf: "flex-end",
    padding: 8,
  },
  cameraToggleText: {
    color: "#007AFF",
  },
  cameraButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 4,
    marginBottom: 8,
  },
  cameraButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  galleryButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 4,
  },
  galleryButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default ProfileScreen;
