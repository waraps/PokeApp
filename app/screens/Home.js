import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

// Components
import Navbar from '../components/Navbar'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text>Home</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity onPress={() => navigation.push('CatchThem')}>
        <Text>Navigate to</Text>
      </TouchableOpacity>
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