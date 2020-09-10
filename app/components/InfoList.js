import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Utils
import { COLORS } from "../utils/colors";

export default function InfoList({ types, abilities }) {
  if (types) {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Types</Text>
        {types.map((type) => {
          return <Text style={styles.itemText} key={type.type.name}>+ {type.type.name}</Text>;
        })}
      </View>
    );
  }
  if (abilities) {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Abilities</Text>
        {abilities.map((ability) => {
          return (
            <Text style={styles.itemText} key={ability.ability.name}>+ {ability.ability.name}</Text>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.black
  },
  itemText: {
    fontFamily: "ValeriaRound-Regular",
    color: COLORS.black
  },
});