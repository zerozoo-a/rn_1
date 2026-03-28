import React from "react";
import { Button, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

function Box() {
  const translateX = useSharedValue(0);

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
        <Button
          title="move"
          onPress={() => {
            translateX.value = withSpring(200);
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
