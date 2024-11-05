import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import {
  DEFAULT_GAP,
  DEFAULT_PADDING,
  DEFAULT_RADIUS,
} from "@/constants/globalStyles";

type CardFooterProps = {
  children: ReactNode;
};

export default function CardFooter({ children }: CardFooterProps) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    gap: DEFAULT_GAP,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
