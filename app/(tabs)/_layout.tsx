import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="about"
        options={{
          title: "about",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="information-circle"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
