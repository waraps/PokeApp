import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Utils
import { COLORS } from "../utils/colors";

export default function MoveRow({ move, index }) {
  return (
    <View style={styles.Row}>
      <Text style={styles.rowText}>
        Move #{index + 1} - {move}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Row: {
    backgroundColor: "whitesmoke",
    borderBottomWidth: 0.3,
    borderBottomColor: COLORS.navyBlue,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  rowText: {
    paddingVertical: 4,
    fontFamily: "ValeriaRound-Regular",
    fontSize: 18,
    color: COLORS.black,
    textTransform: "capitalize",
  },
});