import AsyncStorage from "@react-native-community/async-storage";

export const localStorgae = {
  async setPokemon(pokemon) {
    try {
      await AsyncStorage.setItem("pokemon", JSON.stringify(pokemon));
    } catch (error) {
      console.log(error + ", was couldn't save pokemon");
    }
  },
  async getPokemon() {
    try {
      return JSON.parse(await AsyncStorage.getItem("pokemon"));
    } catch (error) {
      console.log(error + ", was couldn't get pokemon");
    }
  },
  async setHowMany(count) {
    try {
      await AsyncStorage.setItem("count", JSON.stringify(count));
    } catch (error) {
      console.log(error + ", was couldn't save count");
    }
  },
  async getHowMany() {
    try {
      return JSON.parse(await AsyncStorage.getItem("count"));
    } catch (error) {
      console.log(error + ", was couldn't get count");
    }
  },
};