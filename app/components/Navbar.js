import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/img/pokeIcon.png')}
      />
      <TouchableOpacity onPress={() => navigation.push('CatchThem')}>
        <Text>Buscar</Text>
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
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: 'rgba(4, 4, 4, 0.2)',
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
})