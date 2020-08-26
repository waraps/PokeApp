import { POKE_API } from './env'

export const weather = {
  async catchPokemon(pokemon) {
    return await fetch(`${POKE_API}${pokemon}`)
  }
}