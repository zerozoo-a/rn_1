import { Redirect, usePathname } from "expo-router";
import { Text, View } from "react-native";
export default function Login() {
  const isLoggedIn = false;
  const pathname = usePathname();
  console.log("🚀 ~ Login ~ pathname:", pathname);

  if (isLoggedIn) {
    return <Redirect href={"/(tabs)"} />;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login</Text>
    </View>
  );
}
