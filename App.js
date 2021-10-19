import React from "react"
import { StyleSheet, Text, View, Button} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator} from "@react-navigation/stack"
import { DrawerContent } from "./src/screens/DrawerContent"
import SignInScreen from "./src/screens/SignInScreen.js"
import RootStackScreen from "./src/screens/RootStackScreen"
import HomeScreen from "./src/screens/HomeScreen"


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;