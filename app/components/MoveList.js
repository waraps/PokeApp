import React from "react";
import { StyleSheet, FlatList } from "react-native";

// Components
import MoveRow from "./MoveRow";

export default function MoveList({ moves }) {
  const renderItem = ({ item }) => <MoveRow move={item.move.name} />;

  return (
    <FlatList
      data={moves}
      renderItem={renderItem}
      keyExtractor={(move) => move.name}
      style={styles.moveList}
    />
  );
}

const styles = StyleSheet.create({
  moveList: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});