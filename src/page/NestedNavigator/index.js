import { ScrollView, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import DetailsScreen from "../DetailsScreen";
import CreatePostScreen from "../CreatePostScreen";
import Home from "../Home";
import page1 from "../../assets/components/page1";
import page2 from "../../assets/components/page2";

const Tab = createBottomTabNavigator();

const NestedNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="page1" component={page1} />
      <Tab.Screen name="page2" component={page2} />
    </Tab.Navigator>
  );
};

export default NestedNavigator;

const styles = StyleSheet.create({});
