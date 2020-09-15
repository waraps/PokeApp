import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function PokePhoto({ sprites }) {
  return (
    <View style={styles.photoContainer}>
      <Image
        style={[styles.tinyPhoto, styles.photoRight]}
        source={{ uri: sprites.front_default }}
      />
      <Image
        style={[styles.tinyPhoto, styles.photoLeft]}
        source={{ uri: sprites.back_default }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 12,
  },
  tinyPhoto: {
    width: 160,
    height: 160,
    backgroundColor: "whitesmoke",
  },
  photoRight: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  photoLeft: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
});