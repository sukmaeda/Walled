import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import TransferPage from "./screens/TransferPage";
import TopupPage from "./screens/TopupPage";
import LoginScreen from "./screens/LoginScreen";
import Register from "./screens/Register";
import TnC from "./screens/TnC";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           if (route.name === "Home") {
//             iconName = focused ? "home" : "home-outline";
//           } else if (route.name === "TopUp") {
//             iconName = focused ? "cash" : "cash-outline";
//           } else if (route.name === "Transfer") {
//             iconName = focused ? "send" : "send-outline";
//           } else if (route.name === "HalamanApi") {
//             iconName = focused ? "code" : "code-outline";
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "#007AFF",
//         tabBarInactiveTintColor: "gray",
//       })}
//     >
//       <Tab.Screen
//         name="HomePage"
//         component={HomePage}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen name="TopupPage" component={TopupPage} />
//       <Tab.Screen name="TransferPage" component={TransferPage} />
//       {/* <Tab.Screen name="HalamanApi" component={HalamanApi} /> */}
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide the header for HomePage
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }} // Hide the header for HomePage
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }} // Hide the header for HomePage
        />
        <Stack.Screen
        name="TnC"
        component={TnC}
        options={{
          headerShown: true,
          title: 'Terms and Conditions'}}
        />
        <Stack.Screen
          name="Transfer"
          component={TransferPage}
          options={{}}
        />
        <Stack.Screen
          name="TopUp"
          component={TopupPage}
          options={{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}