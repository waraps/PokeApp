import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Components
import ActivityIndicatorApp from '../components/ActivityIndicatorApp'
import PokeDisplay from '../components/PokeDisplay'

// API
import { catchPokemon } from '../api/index'

// Assests
import { COLORS } from '../assets/colors'

export default function CatchThem({ navigation }) {
  const [pokemon, setPokemon] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getPokemon()
  }, [])

  const getPokemon = async () => {
    try {
      const response = await catchPokemon.catchIt(1)
      const pokeResponse = await response.json()
      setPokemon(pokeResponse)
      setIsLoading(false)
    } catch (error) {
      console.log(error + 'Error al capturar pokemon')
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Catch'em</Text>
      <Text>Open up App.js to start working on your app!</Text>
      {
        isLoading ? <ActivityIndicatorApp /> : <PokeDisplay pokemon={pokemon}/>
      }
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkRed,
    alignItems: 'center',
    justifyContent: 'center'
  }
})