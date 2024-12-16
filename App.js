import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
// import TransferPage from "./screens/TransferPage";
// import TopupPage from "./screens/TopupPage";
import LoginScreen from "./screens/LoginScreen";
import Register from "./screens/Register";
import TnC from "./screens/TnC";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
          options={{ headerShown: false }} // Hide the header for HomePage
        />
        <Stack.Screen
        name="TnC"
        component={TnC}
        options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Transfer"
          component={TransferPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TopUp"
          component={TopupPage}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}