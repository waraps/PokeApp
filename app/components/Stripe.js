import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Utils
import { COLORS } from "../utils/colors";

export default function Stripe({ text }) {
  return (
    <View style={styles.stripeContainer}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  stripeContainer: {
    padding: 12,
    backgroundColor: COLORS.navyBlue,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    color: COLORS.yellow,
    fontFamily: "ValeriaRound-Regular",
  },
});