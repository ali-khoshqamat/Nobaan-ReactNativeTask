import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

interface AuthScreenProps {
  navigation: NavigationProp<any>;
}

const Tab = createBottomTabNavigator();

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AuthScreen;

// const AuthScreen = () => {
//   const dispatch = useDispatch();
//   const navigation = useNavigation();

//   const handleRegisterSuccess = () => {
//     // Handle successful registration here
//     navigation.navigate("HomeScreen");
//   };

//   const handleLogin = () => {
//     // Handle login submission here
//     // Dispatch action to Redux for login
//     // Navigate to home screen on successful login
//     navigation.navigate("HomeScreen");
//   };

//   return (
//     <View>
//       <Login onLogin={handleLogin} />
//       <Register onSuccess={handleRegisterSuccess} />
//     </View>
//   );
// };

// export default AuthScreen;

// const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
//   const [isLogin, setIsLogin] = useState(true);

//   const handleLogin = () => {
//     // Handle login logic
//     navigation.navigate('Home');
//   };

//   const handleRegister = () => {
//     // Handle register logic
//     navigation.navigate('Home');
//   };

//   return (
//     <View style={styles.container}>
//       {isLogin ? (
//         <Login onLogin={handleLogin} toggleForm={() => setIsLogin(false)} />
//       ) : (
//         <Register onRegister={handleRegister} toggleForm={() => setIsLogin(true)} />
//       )}
//     </View>
//   );
// };

// export default AuthScreen;
