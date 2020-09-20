import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import { sizeof } from "sizeof";

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
        id: pokeResponse.id,
        abilities: pokeResponse.abilities,
        base_experience: pokeResponse.base_experience,
        height: pokeResponse.height,
        moves: pokeResponse.moves,
        name: pokeResponse.name,
        sprites: pokeResponse.sprites,
        stats: pokeResponse.stats,
        types: pokeResponse.types,
        weight: pokeResponse.weight,
      };
      setPokemon(pokeFormat);
      setIsLoading(false);
    } catch (error) {
      console.log(error + "error to catch pokemon");
      setIsLoading(false);
    }
  };

  const getStoragedPokemon = async () => {
    try {
      setMyPokemons(await localStorgae.getPokemon());
    } catch (error) {
      console.log(error + "error to get pokemons");
    }
  };

  const existPokemon = () => {
    const check = myPokemons.find((poke) => {
      return pokemon.name === poke.name;
    });
    return check;
  };

  const isMemoryfull = async () => {
    const memorySize = await localStorgae.getHowMany();
    const pokeSize = sizeof(pokemon);
    const totalSize = memorySize + pokeSize;
    if (totalSize < 6000000) {
      await localStorgae.setHowMany(totalSize);
      return true;
    }
    return false;
  };

  const savePokemon = async (list) => {
    setMyPokemons(list);
    await localStorgae.setPokemon(list);
    setIsLoading(false);
    newNavigate();
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
      if (pokemon != null) {
        let list = [];
        if (myPokemons) {
          if (!existPokemon(myPokemons)) {
            if (await isMemoryfull()) {
              list = myPokemons;
              list.push(pokemon);
              savePokemon(list);
            } else {
              setIsLoading(false);
              alert("Memory full, you should free a pokemon");
            }
          } else {
            setIsLoading(false);
            alert("This pokemon already was catched");
          }
        } else {
          list.push(pokemon);
          await localStorgae.setPokemon(list);
          await localStorgae.setHowMany(0);
          setIsLoading(false);
          newNavigate();
        }
      }
    } catch (error) {
      alert("Error to catch pokemon");
      console.log(error + "Error to catch pokemon");
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
    </ScrollView>
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
    marginVertical: 30,
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
    marginVertical: 30,
  },
  catchText: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: "ValeriaRound-Regular",
  },
});