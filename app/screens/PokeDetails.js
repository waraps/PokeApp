import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Expo imports
import Constants from "expo-constants";

// Utils
import { COLORS } from "../utils/colors";

// Components
import PokePhoto from "../components/PokePhoto";
import PokeNameStripe from "../components/PokeNameStripe";
import Stripe from "../components/Stripe";
import Measure from "../components/Measure";
import InfoList from "../components/InfoList";
import MoveList from "../components/MoveList";

const PokeDetails = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.pokeContainer}>
        <PokePhoto sprites={pokemon.sprites} />
        <PokeNameStripe name={pokemon.name} />
      </View>
      <Stripe text="DETAILS" />
      <View style={styles.experienceContainer}>
        <Text style={styles.experiencieTitle}>Base Experience: </Text>
        <Text style={styles.experienceText}>{pokemon.base_experience}</Text>
      </View>
      <View style={styles.measureContainer}>
        <Measure measure={pokemon.weight} title="Weight" unit="Kg" />
        <Measure measure={pokemon.height} title="Height" unit="m" />
      </View>
      <View style={styles.infoContainer}>
        <InfoList types={pokemon.types} />
        <InfoList abilities={pokemon.abilities} />
      </View>
      <Stripe text="MOVES" />
      <MoveList moves={pokemon.moves} />
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
    backgroundColor: COLORS.red,
  },
  measureContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 3,
  },
  experienceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(0,58,112,0.2)",
    padding: 5,
  },
  experiencieTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.black,
    marginLeft: 3,
    fontFamily: "ValeriaRound-Regular",
  },
  experienceText: {
    fontSize: 20,
    color: COLORS.black,
    fontFamily: "ValeriaRound-Regular",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
