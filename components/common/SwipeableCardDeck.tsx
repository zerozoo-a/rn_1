import { useState } from "react";
import { Button, Text, View } from "react-native";
import { Swiper } from "rn-swiper-list";
import Card from "./Card";
import { centerCenter1 } from "@/constants/style/center-center";

export default function SwipeableCardDeck({ cards }: { cards: any[] }) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <View style={centerCenter1}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>No more cards</Text>
        <Button title="reload" onPress={() => setDone(false)} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        data={cards}
        renderCard={(card) => <Card card={card} />}
        keyExtractor={(card) => card.id ?? card.name}
        onSwipedAll={() => setDone(true)}
        disableBottomSwipe
        cardStyle={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </View>
  );
}
