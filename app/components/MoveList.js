import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import { COLORS } from "../utils/colors";

// Components
import MoveRow from "./MoveRow";

export default function MoveList({ moves, name }) {
  const renderItem = ({ item, index }) => (
    <MoveRow move={item.move.name} index={index} />
  );

  return (
    <View style={styles.containerList}>
      <View style={styles.countMoves}>
        <Text style={[styles.countMovesText, { fontWeight: "bold" }]}>
          {name} has:{" "}
        </Text>
        <Text style={styles.countMovesText}>{moves.length} moves</Text>
      </View>
      <FlatList
        nestedScrollEnabled={true}
        data={moves}
        renderItem={renderItem}
        keyExtractor={(move, index) => index + "-" + move.name}
        style={styles.moveList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerList: {
    height: 450,
  },
  countMoves: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 5,
    backgroundColor: "rgba(0,58,112,0.2)",
  },
  countMovesText: {
    fontSize: 18,
    textTransform: "capitalize",
  },
  moveList: {
    paddingVertical: 5,
  },
});