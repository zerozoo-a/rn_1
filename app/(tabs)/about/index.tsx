import React from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

function Box() {
  const translateX = useSharedValue(0);
  const moved = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View>
      <Animated.View
        style={[
          { width: 100, height: 100, backgroundColor: "blue" },
          animatedStyle,
        ]}
      >
        <Pressable
          style={{ flex: 1 }}
          onPress={() => {
            if (moved.value) {
              translateX.value = withSpring(0);
            } else {
              translateX.value = withSpring(200);
            }
            moved.value = !moved.value;
          }}
        />
      </Animated.View>
    </View>
  );
}

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box />
      <Text>About</Text>
    </View>
  );
};

export default Index;
