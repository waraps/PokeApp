import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'

import { COLORS } from '../utils/colors'

export default class PokeCard extends Component {
  render() {
    const { pokemon, navigation } = this.props
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('PokeDetails', { pokemon })}
      >
        <Image style={styles.tinyLogo} source={{ uri: pokemon.sprites.front_default }} />
        <Text style={styles.textName}> {pokemon.name} </Text>
        <Text style={styles.textMeasure}>W: {(pokemon.weight * 0.1).toFixed(2)} Kg</Text>
        <Text style={styles.textMeasure}>H: {(pokemon.height * 0.1).toFixed(2)} m</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 3,
    paddingBottom: 3,
    marginHorizontal: 4,
    paddingHorizontal: 2,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 9
  },
  tinyLogo: {
    width: 120,
    height: 120
  },
  textName: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold'
  },
  textMeasure: {
    fontSize: 12,
    textAlign: 'center'
  }
})