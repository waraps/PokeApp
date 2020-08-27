import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'

// Expo imports
import Constants from 'expo-constants'

// Components
import Navbar from '../components/Navbar'

// Assests
import { COLORS } from '../utils/colors'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Navbar style={styles.navbar} navigation={navigation} />
      <StatusBar style='light' backgroundColor='#9A0000'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: Constants.statusBarHeight,
  },
  navbar: {
    marginTop: 30,
  },
})