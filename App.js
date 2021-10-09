import React from "react"
import { StyleSheet, Text, View, Button} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator} from "@react-navigation/stack"
import { DrawerContent } from "./screens/DrawerContent"
import SignInScreen from "./screens/SignInScreen"
import RootStackScreen from "./screens/RootStackScreen"
import HomeScreen from "./screens/HomeScreen"


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