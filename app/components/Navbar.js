import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

// Utils
import { COLORS } from '../utils/colors'

const Navbar = ({ navigation, memorySize }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../assets/img/pokeIcon.png')} />
      <TouchableOpacity
        style={styles.search}
        onPress={() => navigation.navigate('CatchThem', { memorySize })}
      >
        <Text style={styles.searchText}>catch'em</Text>
        <Image style={styles.dittoTinyLogo} source={require('../assets/img/ditto.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: COLORS.darkRed,
    borderWidth: 0.8,
    borderColor: 'rgba(154, 0, 0, 0.8)'
  },
  tinyLogo: {
    width: 40,
    height: 40
  },
  search: {
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchText: {
    color: COLORS.yellow,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'ValeriaRound-Regular'
  },
  dittoTinyLogo: {
    marginTop: 5,
    width: 35,
    height: 30
  }
})