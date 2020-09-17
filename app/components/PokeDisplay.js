import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

// Components
import ActivityIndicatorApp from "./ActivityIndicatorApp";

// Utils
import { COLORS } from "../utils/colors";

export default class PokeDisplay extends Component {
  render() {
    const { isLoading, pokemon } = this.props;
    return isLoading ? (
      <ActivityIndicatorApp />
    ) : (
      pokemon && (
        <View style={styles.container}>
          <View style={styles.pokeContainer}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: pokemon.sprites ? pokemon.sprites.front_default : "",
              }}
            />
            {pokemon && (
              <Text style={styles.pokemonName}> {pokemon.name} </Text>
            )}
          </View>
          <View style={styles.pokeDetails}>
            <Text style={styles.pokedetailsText}>Type</Text>
            {pokemon.types.map((type) => {
              return (
                <View style={styles.itemContainer} key={type.type.name}>
                  <Image
                    style={styles.tinyAbility}
                    source={require("../assets/img/pokeIcon.png")}
                  />
                  <Text style={styles.itemDetails}>{type.type.name}</Text>
                </View>
              );
            })}
            <Text style={styles.pokedetailsText}>Abilities</Text>
            {pokemon.abilities.map((ability) => {
              return (
                <View style={styles.itemContainer} key={ability.ability.name}>
                  <Image
                    style={styles.tinyAbility}
                    source={require("../assets/img/pokeIcon.png")}
                  />
                  <Text style={styles.itemDetails}>{ability.ability.name}</Text>
                </View>
              );
            })}
          </View>
        </View>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    minHeight: 310,
    maxHeight: 400,
    width: 380,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
  },
  pokeContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  pokemonName: {
    textTransform: "capitalize",
    fontFamily: "ValeriaRound-Regular",
    fontSize: 20,
  },
  pokeDetails: {
    width: "50%",
    backgroundColor: COLORS.navyBlue,
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  pokedetailsText: {
    fontSize: 18,
    textAlign: "justify",
    color: COLORS.white,
    marginLeft: 10,
    paddingTop: 8,
    paddingBottom: 4,
    fontFamily: "ValeriaRound-Regular",
  },
  tinyAbility: {
    marginTop: 8,
    width: 18,
    height: 18,
  },
  itemContainer: {
    flexDirection: "row",
    alignContent: "center",
    paddingHorizontal: 18,
  },
  itemDetails: {
    marginLeft: 5,
    color: COLORS.yellow,
    fontSize: 18,
    textTransform: "capitalize",
    fontFamily: "ValeriaRound-Regular",
  },
});