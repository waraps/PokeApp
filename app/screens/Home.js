import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'

// Components
import Navbar from '../components/Navbar'

// Assests
import { COLORS } from '../assets/colors'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <StatusBar style='light' />
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