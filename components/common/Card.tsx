import { Image } from "expo-image";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import type { Card as CardType } from "@/types/card";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
export const CARD_WIDTH = SCREEN_WIDTH * 0.9;
export const CARD_HEIGHT = CARD_WIDTH * 1.3;

interface CardProps {
  card: CardType;
}

export default function Card({ card }: CardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: card.image }}
        style={styles.image}
        contentFit="cover"
      />
      <View style={styles.info}>
        <Text style={styles.name}>
          {card.name}, {card.age}
        </Text>
        <Text style={styles.bio}>{card.bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "75%",
  },
  info: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  bio: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
