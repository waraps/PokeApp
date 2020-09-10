import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

// Expo imports
import Constants from 'expo-constants'

// Components
import Navbar from '../components/Navbar'
import PokeCard from '../components/PokeCard'

// Assests
import { COLORS } from '../utils/colors'

// LocalStorage
import { localStorgae } from '../storage/localStorage'

export default function Home({ navigation }) {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    getPokemons()
  }, [])
  const getPokemons = async () => {
    try {
      const pokemonsList = await localStorgae.getPokemon()
      if (pokemonsList) {
        setPokemons(pokemonsList)
      }
    } catch (error) {
      console.log(error + 'error al cargar pokemones')
    }
  }
  return (
    <View style={styles.container}>
      <Navbar style={styles.navbar} navigation={navigation} />
    <View style={styles.pokeCount}>
    <Text style={styles.pokeCountText}>Total Pokemons catched: {pokemons.length}</Text>
    </View>
      <ScrollView>
      <View style={styles.pokeList}>
      {pokemons.map(pokemon => {
        return <PokeCard key={pokemon.name} pokemon={pokemon} navigation={navigation} />
      })}
      </View>
      </ScrollView>
      <StatusBar style='light' backgroundColor='#9A0000' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: Constants.statusBarHeight
  },
  navbar: {
    marginTop: 30
  },
  pokeCount: {
    backgroundColor: COLORS.black,
    padding: 5,
  },
  pokeCountText: {
    textAlign: "center",
    fontFamily: "ValeriaRound-Regular",
    fontSize: 16,
    color: COLORS.white
  },
  pokeList: {
    padding: 5,
    flexDirection: 'row',
    flexWrap: "wrap",
  }
})