import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    "ValeriaRound-Regular": require("../assets/font/VarelaRound-Regular.ttf"),
  });
  return false;
};