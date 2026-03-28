import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const posts = [1, 2, 3, 4, 5];

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.push("/");
        }}
      >
        <Text>For You</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.push(`/following`);
        }}
      >
        <Text>Following</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          router.push(`/login`);
        }}
      >
        <Text>login</Text>
      </TouchableOpacity>

      {posts.map((post) => {
        return (
          <TouchableOpacity
            key={post}
            onPress={() => {
              router.push(`/hello/post/${post}`);
            }}
          >
            <Text>post - {post}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
