import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Following() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text>/home/following</Text>
      </TouchableOpacity>
    </View>
  );
}
