import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class PokeDisplay extends Component {
  render() {
    return <View>{this.props.pokemon && <Text> {this.props.pokemon.name} </Text>}</View>
  }
}

const styles = StyleSheet.create({})
