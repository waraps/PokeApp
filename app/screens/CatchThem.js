import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

// Expo imports
import { AntDesign } from "@expo/vector-icons";

// Components
import ActivityIndicatorApp from "../components/ActivityIndicatorApp";
import PokeDisplay from "../components/PokeDisplay";

// API
import { catchPokemon } from "../api/index";

// Assests
import { COLORS } from "../utils/colors";

export default function CatchThem({ navigation }) {
  const [search, setSearch] = useState('1');
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getPokemon();
  }, [search]);

  const getPokemon = async () => {
    try {
      setIsLoading(true)
      const response = await catchPokemon.catchIt(search.length === 0 ? '1' : search);
      const pokeResponse = await response.json();
      setPokemon(pokeResponse);
      setIsLoading(false);
    } catch (error) {
      console.log(error + "Error al capturar pokemon");
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={COLORS.navyBlue}
          underlineColorAndroid="transparent"
          maxLength={24}
          onChangeText={(text) => setSearch(text)}
          value={search}
        />
        <AntDesign name="search1" size={28} color={COLORS.navyBlue} />
      </View>
      <PokeDisplay pokemon={pokemon} isLoading={isLoading} />
      <TouchableOpacity style={styles.catchButton}>
        <Text style={styles.catchText}>Catch it</Text>
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
  },
  catchButton: {
    width: '80%',
    height: 50,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: COLORS.yellow
  },
  catchText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  }
});