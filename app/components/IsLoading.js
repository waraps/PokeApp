import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Utils
import { COLORS } from '../utils/colors'

import ActivityIndicatorApp from '../components/ActivityIndicatorApp'

const IsLoading = () => {
  return (
    <View style={styles.isLoadingContainer}>
      <ActivityIndicatorApp />
      <Text style={styles.isLoadingText}>Loading Pokemon List ...</Text>
      <StatusBar style='light' backgroundColor={COLORS.navyBlue} />
    </View>
  )
}

export default IsLoading

const styles = StyleSheet.create({
  isLoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red
  },
  isLoadingText: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  }
})