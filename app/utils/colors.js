export const COLORS = {
  yellow: "#FFCB05",
  lightBlue: "#3D7DCA",
  navyBlue: "#003A70",
  black: "#222224",
  white: "#f0f0f0",
  red: "#f00000",
  darkRed: "#ee1515",
};

export const statColor = (name) => {
  switch (name) {
    case "hp":
      return "#f42";

    case "attack":
      return "#a0e515";

    case "defense":
      return "#ffdd57";

    case "special-attack":
      return "#00c2b8";

    case "special-defense":
      return "#ff7f0f";

    case "speed":
      return "#39f";

    default:
      return "black";
  }
};