import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";

export default function TabLayout() {
  const router = useRouter();
  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="home"
                size={24}
                color={focused ? "black" : "gray"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="search"
                size={24}
                color={focused ? "black" : "gray"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="add"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.navigate("/modal");
          },
        }}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="add"
                size={24}
                color={focused ? "black" : "gray"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="heart-outline"
                size={24}
                color={focused ? "black" : "gray"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="[username]"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="person-circle"
                size={24}
                color={focused ? "black" : "gray"}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="(todo)"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="checkbox"
                size={24}
                color={focused ? "black" : "gray"}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="(post)/[username]/post/[postID]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
