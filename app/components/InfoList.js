import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Utils
import { COLORS } from "../utils/colors";

export default function InfoList({ types, abilities }) {
  if (types) {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Types</Text>
        {types.map((type) => {
          return (
            <View style={styles.itemContainer} key={type.type.name}>
              <Image
                style={styles.bullet}
                source={require("../assets/img/pokeIcon.png")}
              />
              <Text style={styles.itemText}>{type.type.name}</Text>
            </View>
          );
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
            <View style={styles.itemContainer} key={ability.ability.name}>
              <Image
                style={styles.bullet}
                source={require("../assets/img/pokeIcon.png")}
              />
              <Text style={styles.itemText}>{ability.ability.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    paddingBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.black,
  },
  itemContainer: {
    flexDirection: "row",
    alignContent: "center",
  },
  bullet: {
    marginTop: 6,
    width: 15,
    height: 15,
  },
  itemText: {
    fontFamily: "ValeriaRound-Regular",
    color: COLORS.black,
    fontSize: 18,
    textTransform: "capitalize",
    marginLeft: 5,
  },
});