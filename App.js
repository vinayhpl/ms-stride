import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./src/components/screens/LandingScreen";
import { StyleSheet, Text, View } from "react-native";
import VerifyEmailScreen from "./src/components/auth/VerifyEmailScreen";
import RegisterScreen from "./src/components/auth/RegisterScreen";
import WorkDetailsScreen from "./src/components/screens/WorkDetailsScreen";
import AllSetScreen from "./src/components/screens/AllSetScreen";
import LoginScreen from "./src/components/auth/LoginScreen";
import HomeScreen from "./src/components/screens/HomeScreen";


const Stack = createStackNavigator();

function MainApp() {
  return (
<View>
  <Text>Main app</Text>
</View>
  );
}

// Main App function
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmailScreen}
          options={{ headerShown: false}}
        />
         <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false}}
        />
         <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false}}
        />
         <Stack.Screen
          name="WorkDetails"
          component={WorkDetailsScreen}
          options={{ headerShown: false}}
        />
         <Stack.Screen
          name="AllSet"
          component={AllSetScreen}
          options={{ headerShown: false}}
        />
         <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
