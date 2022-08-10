import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Profile = ({ navigation, extraData, route }) => {
  console.log(route.params.user);
  console.log(extraData);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile</Text>
      <Text>This is Profile Pgae</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate("Home")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />

      {/* Go to previous screen */}
      <Button title="Go back" onPress={() => navigation.goBack()} />

      {/* Go to Frist screen */}
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Detail"
        onPress={() => navigation.navigate("DetailsScreen")}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
