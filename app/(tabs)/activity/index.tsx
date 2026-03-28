import NotFound from "@/app/+not-found";
import { usePathname, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const activityChildrenPaths = [
  "/activity",
  "/activity/follows",
  "/activity/replies",
  "/activity/mentions",
  "/activity/quatos",
  "/activity/verified",
];

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();

  if (!activityChildrenPaths.includes(pathname)) {
    return <NotFound />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => router.push("/activity")}>
        <Text>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/activity/follows")}>
        <Text>Follows</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/activity/replies")}>
        <Text>Replies</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/activity/mentions")}>
        <Text>Mentions</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/activity/quatos")}>
        <Text>Quatos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/activity/verified")}>
        <Text>Verified</Text>
      </TouchableOpacity>
    </View>
  );
}
