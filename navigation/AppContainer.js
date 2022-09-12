import React from "react";
import { Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import PatchnoteScreen from "../screens/Patchnote";
import HistoryScreen from "../screens/History";
import logo from "../assets/img/logo2.png";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function LogoTitle() {
  return (
    <View>
      <Image
        style={{
          width: 100,
          height: 75,
          resizeMode: "contain",
        }}
        source={logo}
      />
    </View>
  );
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: () => <LogoTitle /> }}
      />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
      <HomeStack.Screen name="Patchnote" component={PatchnoteScreen} />
    </HomeStack.Navigator>
  );
};

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Hamham" component={HomeStackScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
