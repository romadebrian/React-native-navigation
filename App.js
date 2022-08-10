import { StyleSheet, Text, View, Image, Button } from "react-native";
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
      <Stack.Navigator
        initialRouteName="Home"

        // Sharing common options across screens
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: "#f4511e",
        //   },
        //   headerTintColor: "#fff",
        //   headerTitleStyle: {
        //     fontWeight: "bold",
        //   },
        // }}

        // screenOptions={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      >
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* Adjusting header styles */}
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        /> */}

        {/* Replacing the title with a custom component */}
        {/* <Stack.Screen
          name="Home"
          component={Home}
          // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        /> */}

        {/* Adding a button to the header */}
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#fff"
              />
            ),
          }}
        /> */}

        {/* Header interaction with its screen component */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation, route }) => ({
            headerTitle: (props) => <LogoTitle {...props} />,
          })}
        />

        <Stack.Screen name="Profile">
          {(props) => <Profile {...props} extraData={"Roma Debrian"} />}
        </Stack.Screen>
        {/* Using params in the title */}
        {/* <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({ title: route.params.name })}
        /> */}
        {/* Initial params */}
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          initialParams={{ itemId: 42 }}
          options={{
            headerBackVisible: false,
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
        />
        <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Replacing the title with a custom component
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./src/assets/img/react-native-logo.png.png")}
    />
  );
}

export default App;

const styles = StyleSheet.create({});
