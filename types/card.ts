export interface Card {
  id: number;
  name: string;
  age: number;
  image: string;
  bio: string;
}

export type SwipeDirection = "left" | "right" | "up" | "down";