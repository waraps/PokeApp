import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native'

export default class PokeCard extends Component {
  render() {
    const { pokemon } = this.props
    return (
      <TouchableOpacity>
        <Image style={styles.tinyLogo} source={{ uri: pokemon.sprites.front_default }}/>
        <Text> {pokemon.name} </Text>
        <Text> {pokemon.weight} </Text>
        <Text> {pokemon.height} </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
  },
})
