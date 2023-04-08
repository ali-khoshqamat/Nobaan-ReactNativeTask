import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
// import { register } from "../redux/user/userActions";
import { registerSuccess } from "../redux/user/userActions";
import { useNavigation } from "@react-navigation/native";

interface Props {
  onRegisterSuccess: () => void;
}

// const RegisterScreen: React.FC<Props> = ({ onRegisterSuccess }) => {
const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const registerHandler = () => {
    if (!email || !password || !confirmPassword || !fullName) {
      alert("Please Fill all the Fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not Match");
      return;
    }

    dispatch(registerSuccess({ email, password, fullName}));

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFullName("");
    // onRegisterSuccess();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SingUp</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFullName(text)}
        value={fullName}
        placeholder="Enter your full name"
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Enter your password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        placeholder="Confirm your password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={registerHandler}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 16,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default RegisterScreen;
