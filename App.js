import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Home from "./src/page/Home";
import Profile from "./src/page/Profile/Index";
import DetailsScreen from "./src/page/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "./src/page/CreatePostScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  cosnt = [dataUser] = useState("Roma Debrian");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Profile">
          {(props) => <Profile {...props} extraData={"Roma Debrian"} />}
        </Stack.Screen>

        {/* Initial params */}
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          initialParams={{ itemId: 42 }}
        />
        <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
