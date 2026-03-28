import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Modal() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        onPress={() => {
          router.back();
        }}
      >
        <Text>CLOSE</Text>
      </Pressable>
      <Text> MODAL </Text>
    </View>
  );
}
