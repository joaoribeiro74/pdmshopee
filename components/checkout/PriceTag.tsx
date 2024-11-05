import { View, Text, StyleSheet } from "react-native";
import React from "react";

type PriceTagProps = {
  price: number;
};

export default function PriceTag({ price }: PriceTagProps) {
  return <Text style={styles.price}>R$ {price.toFixed(2)}</Text>;
}

const styles = StyleSheet.create({
  price: {
    left: 4,
    fontWeight: "bold",
    fontSize: 18,
    color: "#FF4C2C",
  },
});
