import AsyncStorage from "@react-native-community/async-storage";

export const localStorgae = {
  async setPokemon(pokemon) {
    try {
      await AsyncStorage.setItem("pokemon", JSON.stringify(pokemon));
    } catch (error) {
      console.log(error + ", no se pudo guardar pokemon");
    }
  },
  async getPokemon() {
    try {
      return JSON.parse(await AsyncStorage.getItem("pokemon"));
    } catch (error) {
      console.log(error + ", no se pudo obtener pokemon");
    }
  },
}