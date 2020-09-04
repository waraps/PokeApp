import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'

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
      <View style={styles.pokeList}>
      {pokemons.map(pokemon => {
        return <PokeCard key={pokemon.name} pokemon={pokemon} />
      })}
      </View>
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
  pokeList: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})