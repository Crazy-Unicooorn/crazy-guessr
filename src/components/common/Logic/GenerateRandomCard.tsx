import { Card } from "../TipsBuilder";

export default function generateRandomCard(source: Card) {
  const keys = Object.keys(source);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomFront = keys[randomIndex];
  const randomBack = source[randomFront];

  return { randomFront, randomBack };
}
