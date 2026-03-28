import { usePathname } from "expo-router";
import { Text, View } from "react-native";

export default function Post() {
  const pathname = usePathname();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>게시글 상세 페이지 {pathname}</Text>
    </View>
  );
}
