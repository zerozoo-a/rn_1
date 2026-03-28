import { useState } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { scheduleOnRN } from "react-native-worklets";
import { Text, View } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Card from "./Card";
import { centerCenter1 } from "@/constants/style/center-center";

const THRESHOLD = 120;
const TO_VALUE = 500;
const USER_CONFIG = { duration: 300 };

export default function SwipeableCardDeck({ cards }: { cards: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotate: `${(translateX.value / 300) * 15}deg` },
    ],
  }));

  if (currentIndex >= cards.length) {
    return (
      <View style={centerCenter1}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>No more cards</Text>
      </View>
    );
  }

  function advanceCard() {
    setCurrentIndex((prev) => prev + 1);
    translateX.value = 0;
    translateY.value = 0;
  }

  const activeCard = cards[currentIndex];
  const pan = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = e.translationX;
      translateY.value = e.translationY;
    })
    .onEnd((e) => {
      if (e.translationX > THRESHOLD) {
        translateX.value = withTiming(TO_VALUE, USER_CONFIG, (finished) => {
          if (finished) {
            scheduleOnRN(advanceCard);
          }
        });
      } else if (e.translationX < -THRESHOLD) {
        translateX.value = withTiming(-TO_VALUE, USER_CONFIG, (finished) => {
          if (finished) {
            scheduleOnRN(advanceCard);
          }
        });
      } else if (e.translationY < -THRESHOLD) {
        translateY.value = withTiming(-TO_VALUE, USER_CONFIG, (finished) => {
          if (finished) {
            scheduleOnRN(advanceCard);
          }
        });
      } else {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={animatedStyle}>
        {activeCard ? <Card card={activeCard} /> : <Text>No more cards</Text>}
      </Animated.View>
    </GestureDetector>
  );
}
