import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { CommonActions } from "@react-navigation/native";

// Expo imports
import { AntDesign } from "@expo/vector-icons";

// Components
import PokeDisplay from "../components/PokeDisplay";

// API
import { catchPokemon } from "../api/index";

// LocalStorage
import { localStorgae } from "../storage/localStorage";

// Utils
import { COLORS } from "../utils/colors";

export default function CatchThem({ navigation }) {
  const [search, setSearch] = useState("1");
  const [pokemon, setPokemon] = useState(null);
  const [myPokemons, setMyPokemons] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getStoragedPokemon();
    getPokemon();
  }, [search]);

  const getPokemon = async () => {
    try {
      setIsLoading(true);
      const response = await catchPokemon.catchIt(
        search.length === 0 ? "1" : search
      );
      const pokeResponse = await response.json();
      let pokeFormat = {
        abilities: pokeResponse.abilities,
        base_experience: pokeResponse.base_experience,
        height: pokeResponse.height,
        moves: pokeResponse.moves,
        name: pokeResponse.name,
        sprites: pokeResponse.sprites,
        types: pokeResponse.types,
        weight: pokeResponse.weight,
      };
      setPokemon(pokeFormat);
      setIsLoading(false);
    } catch (error) {
      console.log(error + "Error al capturar pokemon");
      setIsLoading(false);
    }
  };

  const getStoragedPokemon = async () => {
    try {
      setMyPokemons(await localStorgae.getPokemon());
    } catch (error) {
      console.log(error + "error al obtner pokemons");
    }
  };

  const newNavigate = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "Home" }],
      })
    );
  };

  const catchingIt = async () => {
    try {
      setIsLoading(true);
      let list = [];
      if (myPokemons) {
        const check = myPokemons.find((poke) => {
          return pokemon.name === poke.name;
        });
        if (!check) {
          list = myPokemons;
          list.push(pokemon);
          setMyPokemons(list);
          await localStorgae.setPokemon(list);
          setIsLoading(false);
          newNavigate();
        } else {
          setIsLoading(false);
          alert("This pokemon already was catched");
        }
      } else {
        list.push(pokemon);
        await localStorgae.setPokemon(list);
        setIsLoading(false);
        newNavigate();
      }
    } catch (error) {
      console.log(erro + "Error al capturar pokemon");
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.searchInput}
          placeholder="name or id (Ex. bulbasaur or 1)"
          placeholderTextColor={COLORS.navyBlue}
          underlineColorAndroid="transparent"
          maxLength={24}
          onChangeText={(text) => setSearch(text)}
          value={search}
          autoCapitalize="none"
        />
        <AntDesign name="search1" size={28} color={COLORS.navyBlue} />
      </View>
      <PokeDisplay pokemon={pokemon} isLoading={isLoading} />
      <TouchableOpacity
        style={styles.catchButton}
        onPress={catchingIt}
        disabled={isLoading}
      >
        <Text style={styles.catchText}>CATCH !</Text>
      </TouchableOpacity>
      <StatusBar style="light" backgroundColor={COLORS.navyBlue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkRed,
    alignItems: "center",
    justifyContent: "space-around",
  },
  search: {
    width: "95%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 60,
    backgroundColor: COLORS.white,
  },
  searchInput: {
    width: "95%",
    fontSize: 15,
    fontFamily: "ValeriaRound-Regular",
  },
  catchButton: {
    width: "80%",
    height: 50,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: COLORS.yellow,
  },
  catchText: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: "ValeriaRound-Regular",
  },
});