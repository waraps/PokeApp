import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Utils
import { statColor, COLORS } from "../utils/colors";

const Stats = ({ stat }) => {
  return (
    <View style={styles.containerStats}>
      <View style={styles.infoStats}>
        <Text style={[styles.textStats, { fontWeight: "bold" }]}>
          {stat.stat.name}:
        </Text>
        <Text style={[styles.textStats, { marginLeft: 5 }]}>
          {stat.base_stat}
        </Text>
      </View>
      <View
        style={[
          styles.progressBarStats,
          { width: stat.base_stat, borderColor: statColor(stat.stat.name) },
        ]}
      ></View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  containerStats: {
    width: "50%",
    paddingVertical: 12,
    paddingHorizontal: '4%',
  },
  infoStats: {
    flexDirection: "row",
  },
  textStats: {
    fontSize: 18,
    color: COLORS.black,
    textTransform: "capitalize",
    fontFamily: "ValeriaRound-Regular",
  },
  progressBarStats: {
    borderWidth: 2,
  },
});