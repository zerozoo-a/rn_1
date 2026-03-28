import SwipeableCardDeck from "@/components/common/SwipeableCardDeck";
import { DUMMY_CARDS } from "@/data/cards";
import type { Card, SwipeDirection } from "@/types/card";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  // function handleSwipe(direction: SwipeDirection, card: Card) {
  //   console.log(`Swiped ${direction} on ${card.name}`);
  // }

  return (
    <SafeAreaView style={styles.container}>
      <SwipeableCardDeck cards={DUMMY_CARDS} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
