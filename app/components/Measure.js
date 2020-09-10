import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Utils
import { COLORS } from "../utils/colors";

export default function Measure({ measure, title, unit }) {
  return (
    <View style={styles.measureContainer}>
      <Text style={styles.title}>{title}:</Text>
      <Text style={styles.measure}>
        {(measure * 0.1).toFixed(2)} {unit}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  measureContainer: {
    flexDirection: "row",
    padding: 5,
  },
  title: {
    fontWeight: "bold",
    marginRight: 3,
    fontSize: 18,
    fontFamily: "ValeriaRound-Regular",
    color: COLORS.black
  },
  measure: {
    fontSize: 18,
    fontFamily: "ValeriaRound-Regular",
    color: COLORS.black
  },
});