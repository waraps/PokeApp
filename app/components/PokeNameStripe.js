import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Utils
import { COLORS } from "../utils/colors";

export default function PokeNameStripe({ name }) {
  return (
    <View style={styles.pokeNameContainer}>
      <Text style={styles.pokeName}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pokeName: {
    fontSize: 35,
    textTransform: "uppercase",
    fontFamily: "ValeriaRound-Regular",
    color: COLORS.white,
    textShadowColor: COLORS.black,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  pokeNameContainer: {
    alignItems: "center",
  },
});