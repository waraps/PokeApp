import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MoveRow({ move }) {
  return (
    <View style={styles.Row}>
      <Text style={styles.rowText}>{move}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Row: {
    // padding: 5,
  },
  rowText: {
    fontFamily: "ValeriaRound-Regular",
  }
});