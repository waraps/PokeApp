import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../utils/colors";

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/img/pokeIcon.png")}
      />
      <TouchableOpacity style={styles.search} onPress={() => navigation.push("CatchThem")}>
      <Text style={styles.searchText}>catch'em</Text>
        <Image
          style={styles.dittoTinyLogo}
          source={require("../assets/img/ditto.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: COLORS.darkRed,
    borderWidth: 0.8,
    borderColor: "rgba(154, 0, 0, 0.8)",
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
  search: {
    flexDirection: "row",
  },
  searchText: {
    color: COLORS.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  dittoTinyLogo: {
    width: 28,
    height: 23,
  },
});
