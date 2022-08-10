import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import page1 from "../../assets/components/Page1";
import page2 from "../../assets/components/Page3";
import page3 from "../../assets/components/Page3";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="halaman1" component={Halaman1} />
      <Drawer.Screen name="halaman2" component={Halaman2} />
      <Stack.Screen name="halaman3" component={Halaman3} />
    </Drawer.Navigator>
  );
};

const Halaman1 = () => {
  return <Text>Halaman 1</Text>;
};
const Halaman2 = () => {
  return <Text>Halaman 2</Text>;
};
const Halaman3 = () => {
  return <Text>Halaman 3</Text>;
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
