import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

// Assests
import { COLORS } from '../utils/colors'

const PokeDetails = ({ route }) => {
  const { pokemon } = route.params
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.tinyLogo} source={{ uri: pokemon.sprites.front_default }} />
        <Image style={styles.tinyLogo} source={{ uri: pokemon.sprites.back_default }} />
      </View>
      <View style={styles.pokeNameContainer}>
        <Text style={styles.pokeName}>{pokemon.name}</Text>
      </View>
      <StatusBar style='light' backgroundColor={COLORS.lightBlue} />
    </View>
  )
}

export default PokeDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    flexDirection: 'row'
  },
  tinyLogo: {
    width: 150,
    height: 150
  },
  pokeNameContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pokeName: {
    fontSize: 35,
    textTransform: 'uppercase',
    fontFamily: "ValeriaRound-Regular",
  }
})