import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

// Expo imports
import Constants from "expo-constants";

// Assests
import { COLORS } from "../utils/colors";

const PokeDetails = ({ route }) => {
  const { pokemon } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.pokeContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.tinyLogo}
            source={{ uri: pokemon.sprites.front_default }}
          />
          <Image
            style={styles.tinyLogo}
            source={{ uri: pokemon.sprites.back_default }}
          />
        </View>
        <View style={styles.pokeNameContainer}>
          <Text style={styles.pokeName}>{pokemon.name}</Text>
        </View>
      </View>
      <ScrollView >
        <Text> details test first</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test</Text>
        <Text> details test last</Text>
      </ScrollView>
      <StatusBar style="light" backgroundColor={COLORS.lightBlue} />
    </View>
  );
};

export default PokeDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  pokeContainer: {
    backgroundColor: COLORS.yellow,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  pokeNameContainer: {
    marginTop: -20,
    alignItems: "center",
  },
  pokeName: {
    fontSize: 35,
    textTransform: "uppercase",
    fontFamily: "ValeriaRound-Regular",
    color: COLORS.white,
    textShadowColor: COLORS.black,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  scrollDetails: {
    padding: 5,
  }
});