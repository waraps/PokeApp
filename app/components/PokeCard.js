import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native'

import { COLORS } from '../utils/colors'

export default class PokeCard extends Component {
  render() {
    const { pokemon } = this.props
    return (
      <TouchableOpacity style={styles.button}>
        <Image style={styles.tinyLogo} source={{ uri: pokemon.sprites.front_default }}/>
        <Text style={[styles.text, {textTransform: 'capitalize', fontWeight: 'bold'}]}> {pokemon.name} </Text>
        <Text style={{fontSize: 12, textAlign: "center",}}> W: {pokemon.weight * 0.1} Kg</Text>
        <Text style={{fontSize: 12, textAlign: "center",}}> H: {(pokemon.height * 0.1).toFixed(1)} m</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: .2,
    borderColor: COLORS.lightBlue,
    borderRadius: 15,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  text: {
    textAlign: "center",
  },
})
