import { POKE_API } from "./env";

export const catchPokemon = {
  async catchIt(pokemon) {
    return await fetch(`${POKE_API}${pokemon}`);
  },
};