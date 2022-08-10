import { Text, StyleSheet, View, Button } from "react-native";
import React, { Component } from "react";

const Home = ({ navigation, route }) => {
  const [count, setCount] = React.useState(0);

  //   React.useEffect(() => {
  //     if (route.params?.post) {
  //       // Post updated, do something with `route.params.post`
  //       // For example, send the post to the server
  //     }
  //   }, [route.params?.post]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Text>Count: {count}</Text>
      <Text>This is home page</Text>
      <Button
        title="Go to Profile"
        // onPress={() => navigation.navigate("Profile")}

        // Passing params to nested navigators​
        onPress={() =>
          navigation.navigate("Profile", {
            screen: "Settings",
            params: { user: "jane" },
            user: {
              id: "jane",
              firstName: "Jane",
              lastName: "Done",
              age: 25,
            },
          })
        }
      />

      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("DetailsScreen", {
            itemId: 86,
            otherParam: "anything you want here",
          });
        }}
      />

      {/* Passing params to a previous screen */}
      <Button
        title="Create post"
        onPress={() => navigation.navigate("CreatePostScreen")}
      />

      <Button
        title="NestedNavigator"
        onPress={() => navigation.navigate("NestedNavigator")}
      />

      <Button
        title="DrawerNavigation"
        onPress={() => navigation.navigate("DrawerNavigation")}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
