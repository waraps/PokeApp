import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Components
import PokeDisplay from '../components/PokeDisplay'

export default function CatchThem({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Catch'em</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <PokeDisplay />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})