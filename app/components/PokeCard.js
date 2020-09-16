import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { StackActions } from "@react-navigation/native";

// Utils
import { COLORS } from "../utils/colors";

//Components
import Confirm from "./Confirm";

// LocalStorage
import { localStorgae } from "../storage/localStorage";

export default class PokeCard extends Component {
  deletePokemon = async () => {
    try {
      const { index, navigation } = this.props;
      let pokemonsList = await localStorgae.getPokemon();
      pokemonsList.splice(index, 1);
      await localStorgae.setPokemon(pokemonsList);
      navigation.dispatch(StackActions.replace("Home"));
    } catch (error) {
      alert(error);
    }
  };

  confirmDelete = () => {
    try {
      const data = {
        title: "Free Pokemon",
        message: "Are you sure that want to free this pokemon?",
        action: () => this.deletePokemon(),
      };
      Confirm(data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  render() {
    const { pokemon, navigation } = this.props;
    return (
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.push("PokeDetails", { pokemon })}
        >
          <Image
            style={styles.tinyLogo}
            source={{ uri: pokemon.sprites.front_default }}
          />
          <Text style={styles.textName}> {pokemon.name} </Text>
          <Text style={styles.textMeasure}>
            W: {(pokemon.weight * 0.1).toFixed(2)} Kg
          </Text>
          <Text style={styles.textMeasure}>
            H: {(pokemon.height * 0.1).toFixed(2)} m
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.confirmDelete}>
          <View style={styles.deleteContainer}>
            <Text style={styles.deleteText}>Free Pokemon</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 3,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    elevation: 9,
  },
  tinyLogo: {
    width: 120,
    height: 120,
  },
  textName: {
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  textMeasure: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: "ValeriaRound-Regular",
  },
  deleteContainer: {
    backgroundColor: "red",
    marginTop: 2,
    width: "100%",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  deleteText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "ValeriaRound-Regular",
  },
});